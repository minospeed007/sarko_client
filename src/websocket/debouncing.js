import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import axios from 'axios';
import { io } from 'socket.io-client';

const currentUser = JSON.parse(localStorage.getItem('user')); 
const currentUserId = currentUser?.id || ''; // fallback if not found

const socket = io('http://localhost:5000', {
  auth: {
    token: localStorage.getItem('token')
  }
});

socket.on('connect', () => {
  console.log('Connected to Socket.IO:', socket.id);
});

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('new_message', (data) => {
      console.log('New message received:', data);
      setMessages(prev => [
        ...prev,
        {
          ...data,
          direction: data.senderId === currentUserId ? 'outgoing' : 'incoming'
        }
      ]);
    });

    return () => {
      socket.off('new_message');
    };
  }, []);

  const debouncedSearch = useMemo(() => {
    return debounce(async (searchTerm) => {
      if (searchTerm.trim() === '') {
        setResults([]);
        return;
      }
      try {
        const res = await axios.get(`http://localhost:5000/api/user/search?q=${searchTerm}`);
        setResults(res?.data?.data || []);
        console.log('data', res?.data?.data);
      } catch (err) {
        console.error('Search error:', err);
        setResults([]);
      }
    }, 3000);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  const handleBookmark = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/post/bookmark", {
        userId: currentUserId,
        postId: "68a74ee282f6abb134f86468",
        postCreatorUserId: "689a5e91e78184dc6eb2a06e"
      });
      console.log('Bookmark response:', res?.data?.message);
    } catch (err) {
      console.log('Bookmark error:', err);
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <ul>
        {results.map((item) => (
          <li key={item._id}>{item.caption}</li>
        ))}
      </ul>
      <button onClick={handleBookmark}>Bookmark</button>
    </>
  );
};

export default SearchBox;

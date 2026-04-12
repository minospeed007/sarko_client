// src/socket.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  auth: {
    token: localStorage.getItem('token'),
  },
  withCredentials: true,
});



const ChatBox = ({currentUserId,selectedUserId}) => {
  
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
   if (!selectedUserId) {
    console.warn('No selectedUserId passed. Using fallback.');
  }

  useEffect(() => {
    socket.on('new_message', (msg) => {
        console.log("new_message received:", msg);
      if (msg.senderId === selectedUserId) {
        setMessages((prev) => [...prev, msg]);
      }
    });

    return () => {
      socket.off('new_message');
    };
  }, [selectedUserId]);

  const sendMessage = async () => {
    if (!content.trim()) return;

    try {
      const res = await axios.post(
        'http://localhost:5000/api/message',
        {
          conversationId : "6947af4dd34d19d7f17c2656",
          senderId: '689a5e91e78184dc6eb2a06e',
          receiverId: '6947b82dba67ae6dd22db7df',
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          withCredentials: true,
        },
       
      );
console.log('currentUserId:', currentUserId);
console.log(res?.data?.data);
console.log('messages', messages)

      socket.emit('send_message', {
        receiverId: selectedUserId,
        content,
      });

      setMessages((prev) => [...prev, res.data.data]);
      setContent('');
    } catch (err) {
      console.error('Message send error:', err);
    }
  };

  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.senderId === currentUserId ? 'sent' : 'received'}>
            <p>{msg.content}</p>
            <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
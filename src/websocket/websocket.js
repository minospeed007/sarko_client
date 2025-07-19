import { useState } from 'react';
import axios from 'axios';

const WS = () => {
  const [newProfile, setNewProfile] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://styyze-server.onrender.com/api/userProfile', {
        id: "6807fa0de22d620d27c58d15",
        name: 'Nonso',
        username: "Mino450",
        bio: "Styyze lord",
        avatarUrl:"https://www.straitstimes.com/sport/basketball/la-lakers-take-aim-at-no-3-spot-against-no-2-seeds-houston-rockets",
        coverPhotoUrl:"https://www.straitstimes.com/sport/basketball/la-lakers-take-aim-at-no-3-spot-against-no-2-seeds-houston-rockets",
        
        location: 'New York',
        website: 'nonso.com', 
      });

      setNewProfile(res?.data?.data);
      console.log("Profile created:", res?.data?.data);
    } catch (err) {
      console.error("Error creating profile:", err);
    }
  };

  const handleTweet = async (e) => {
    e.preventDefault();

    try {
      const postData={
        userId: "6807b89cda75c3b3b9a1bdbb", 
      clientId:"6807b89cda75c3b3b9a01bdbb", 
   
   postData: {
                  
                    caption: "Heading to Paris",
                    file: [
                      {url:"bbcimage.com"},
                      {img_id: "162394gresdhgjfk"}

                    ], 
                    location: "New York",
                    tags: ["Prada", "Fendi", "LX"], 
                }
              }
      const res = await axios.post('http://localhost:5000/api/posts', postData);

      setNewProfile(res?.data?.data);
      console.log("Profile created:", res?.data?.data);
    } catch (err) {
      console.error("Error creating profile:", err);
    }
  }
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/sign_up', {
        name: 'Nonso',
        username: "Mino45",
        password: "Styyze1234god",
        email: 'nonso@gmail.com', 
      });

      setNewProfile(res?.data?.data);
      console.log("User created:", res?.data?.data);
    } catch (err) {
      console.error("Error creating profile:", err);
    }
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token"); 
      const userId="6807b89cda75c3b3b9a1bdbb"; 
      const res = await axios.patch('http://localhost:5000/api/updateUserProfile', {
        name: 'Nonny',
        userId},
        {
          headers: {
              Authorization: `Bearer ${token}`, 
          },
      }
      );

      setNewProfile(res?.data?.data);
      console.log("User created:", res?.data?.data);
    } catch (err) {
      console.error("Error creating profile:", err);
    }
  };
  const fetchUserProfile = async () => {
    const userId="6807fa0de22d620d27c58d15";
    try {
        const response = await axios.get(`http://localhost:5000/api/getUserProfile/${userId}`);
        console.log("User Profile:", response.data.data);
    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
};
 const likePost = async () => {
    const userId="6800e3fd62bd8f1bbca1dc8b";
    try {
        const response = await axios.post('http://localhost:5000/api/like', {
          postId:"68110590a32e1bbde703f662",
           userId:"6807b89cda75c3b3b9a1bdbb"});
        console.log("User Profile:", response.data.message);
    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
};
  return (
    <div className='UserProfileForm'>
      <h5>Create User Profile</h5>
      <button type='button' onClick={handlePost}>Create Profile</button><br/>
      <button type='button' onClick={likePost}>like</button><br/>

      <button type='button' onClick={fetchUserProfile}>Get Profile</button><br/>
      
      <button type='button' onClick={handleSignup}>Create User</button><br/>
      <button type='button' onClick={handleProfileUpdate }>Update profile</button>

      <button type='button' onClick={handleTweet }>Post</button>

      {newProfile && (
        <div className='profile-info'>
          <h6>Profile Created:</h6>
          <p>Name: {newProfile.name}</p>
          <p>Username: {newProfile.username}</p>
          <p>Bio: {newProfile.bio}</p>
          <p>Location: {newProfile.location}</p>
          <p>Website: {newProfile.website}</p>
        </div>
      )}
    </div>
  );
}

export default WS;

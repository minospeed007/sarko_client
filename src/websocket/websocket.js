import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  withCredentials: true,
});

const WS = () => {
  const [newProfile, setNewProfile] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [refresh, setRefresh]=useState('')
  const [getPost, setGetPost]= useState('');
 useEffect(() => {
  socket.on('client-id', (id) => {
    console.log("Received clientId from server:", id);
    setClientId(id);
  });

  return () => {
    socket.off('client-id');
  }
}, []); 

const handlePostLikes= async()=>{
    const profileId='689a5e91e78184dc6eb2a06e'
    try{
      const res = await axios.get(`http://localhost:5000/api/get_followers/${profileId}`)
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }
  const handleLikes= async()=>{
    const targetUserProfileId="688dfc46a11ed07e9beb40f4"
    const followerUserId='688dfeb9a11ed07e9beb40f8'
    try{
      const res = await axios.post("http://localhost:5000/api/follow",{
        followerUserId: followerUserId,
        targetUserProfileId:targetUserProfileId
      })
      console.log(res?.data?.message)
    }catch(err){
      console.log(err);
    }
  }
  const getPostById = async()=>{
    const postId='68a74ee282f6abb134f86468';
    try{
const res=  await axios.get(`http://localhost:5000/api/get_post/${postId}`)
console.log("data", res?.data?.data)
    }catch(err){
      console.log(err)
    }
  }

  const handleComment = async()=>{
        const postId='68a74ee282f6abb134f86468';

    const commentData={
      postId:postId,
      userId: '689a5e91e78184dc6eb2a06e',
      content:"well said!",
      parentCommentId:null
    }
    try{
const res=  await axios.post('http://localhost:5000/api/post/comment', commentData)
console.log("data", res?.data?.message)
    }catch(err){
      console.log(err)
    }
  }
const getAllPosts = async()=>{
    const postId='68990d18aa1bd6b641422308';
    try{
const res=  await axios.get('http://localhost:5000/api/posts/all')
console.log("data", res?.data?.data)
    }catch(err){
      console.log(err)
    }
  }
  
 
  const getUserPosts = async()=>{
    const userId='689a5e91e78184dc6eb2a06e';
    try{
const res=  await axios.get(`https://styyze-server.onrender.com/api/posts_by_user/${userId}`)
console.log("data", res?.data?.data)
    }catch(err){
      console.log(err)
    }
  }
  //get all users

  const getAllUsers = async()=>{
    const userId='689a5e91e78184dc6eb2a06e';
    try{
const res=  await axios.get('http://localhost:5000/api/all_users')
console.log("data", res?.data)
    }catch(err){
      console.log(err)
    }
  }
  const reload=async()=>{
    try{
  const res= await axios ("http://localhost:5000/api/reload", {
  
  withCredentials: true
})
console.log(setRefresh(res?.data?.user))
    }
  catch(err){
    console.log(err)
  }
  }
  const handlePost = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/userProfile', {
        userId: "689a5e91e78184dc6eb2a06e",
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
      const payload={
      userId: "689a5e91e78184dc6eb2a06e", 
      clientId: clientId, 
      caption: "World Fashion  Paris",
      media: [{mediaUrl:"bbcimage.com"},{mediaId: "162394gresdhgjfk"}], 
      location: "New York",
      tags: ["Prada", "Fendi", "LX"], 
                
             }
      const res = await axios.post('http://localhost:5000/api/posts', payload);

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
        name: 'OZ',
        username: "WizwZ405",
        password: "Styyze1234god",
        email: 'soundozt@gmail.com', 
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
    const userId="689a5e91e78184dc6eb2a06e";
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
      <button type='buttogetPostByIdn' onClick={likePost}>like</button><br/>
      <button type='buttogetPostByIdn' onClick={getPostById}>Get post</button><br/>
      <button type='buttogetPostByIdn' onClick={getAllUsers}>Get all users</button><br/>
      <button type='buttogetPostByIdn' onClick={handleComment}>comment</button><br/>



      <button type='button' onClick={fetchUserProfile}>Get Profile</button><br/>
      
      <button type='button' onClick={handleSignup}>Create User</button><br/>
      <button type='button' onClick={handleProfileUpdate }>Update profile</button><br/>

      <button type='button' onClick={handleTweet }>Post</button> <br/>
      <button type='button' onClick={handlePostLikes }>Get followers</button> <br/>
       <button type='button' onClick={getUserPosts }>Get user posts</button> <br/>

       <button type='button' onClick={getAllPosts }>Get All posts</button> <br/>

      <button type='button' onClick={handleLikes }>follow</button> <br/>

            <button type='button' onClick={reload }>Reload</button>


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

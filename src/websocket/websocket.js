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

const addToCart = async () => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/product/buy_now",
      {
        items: [
      {
        productId: "69aad6e91570251e6c5eb9d9", 
        quantity: 1
      }
    ]
      }
    );

    console.log("Cart updated:", response?.data?.data);

  } catch (error) {
    console.error(
      "Add to cart error:",
      error.response?.data?.message || error.message
    );
  }
};
const createCheckoutDetail = async () => {

  const preOrderId = "69adf1caceab0d16224e79fc";


  try {

    const response = await axios.post(
      `http://localhost:5000/api/product/order/checkout-details/${preOrderId}`,
      {
        shippingAddress: {
          fullName: "John Danny",
          phone: "08012345678",
          addressLine1: "12 Allen Avenue",
          addressLine2: "Ikeja Plaza",
          city: "Lagos",
          state: "Lagos",
          country: "Nigeria",
          postalCode: "100001"
        },

        paymentInfo: {
          paymentProvider: "paystack",
          paymentMethod: "card"
        }
      },
      {withCredentials: true,}
    );

    console.log("Checkout details created:", response.data);

  } catch (error) {

    console.error(
      "Checkout creation error:",
      error.response?.data?.message || error.message
    );

  }
};
const payNow = async () => {
  const preorderId='69adf1caceab0d16224e79fc';
  try {
    const response = await axios.post(
      "http://localhost:5000/api/product/order/pay",
      {preorderId},
        
      {withCredentials: true,}
    );

const data = response?.data?.data;

    console.log("payment started:", data);

    if (data?.authorization_url) {
      window.location.href = data.authorization_url;
    }
  } catch (error) {
    console.error(
      "Payment error:",
      error.response?.data?.message || error.message
    );
  } 
  
};

const getCartById = async()=>{
    const buyerId="6947b82dba67ae6dd22db7df";
  try{
    const res = await axios.get(`http://localhost:5000/api/cart/items/${buyerId}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(res?.data?.data);
  }catch(err){
    console.log(err);
  }
}
const getCheckOutOrder= async()=>{
    const orderId = "698b2cfa3114f1ea2a17d480";
    try{
      const res = await axios.get(`http://localhost:5000/api/product/order/${orderId}`)
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }
const getPreOrderId = async()=>{
    const preOrderId="69adc4daf82a561b152702b0";
  try{
    const res = await axios.get(`http://localhost:5000/api/product/preorder/${preOrderId}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(res?.data?.data);
  }catch(err){
    console.log(err);
  }
}
// delete cart
const deleteEntireCart = async () => {
  try {
    const cartId = "69a4599145ce71804971343c";

    const response = await axios.delete(
      `http://localhost:5000/api/cart/${cartId}`,
      {
        withCredentials: true
      }
    );

    console.log("Cart deleted:", response.data.message);

  } catch (error) {
    console.error(
      "Delete cart error:",
      error.response?.data?.message || error.message
    );
  }
};
const removeCartItem = async () => {
  try {
    const cartId = "69a4599145ce71804971343c";
    const productId = "698b1fbf8904bb4aa7551a29";

    const response = await axios.delete(
  `http://localhost:5000/api/cart/${cartId}/items/${productId}`,
  {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,   
  }
);

    console.log("Item removed:", response?.data?.data);

  } catch (error) {
    console.error(
      "Remove cart item error:",
      error.response?.data?.message || error.message
    );
  }
};
const getOrderbySeller= async()=>{
    const seller = "6947b82dba67ae6dd22db7df"; 
    try{
      const res = await axios.get(`http://localhost:5000/api/product/getOrders/${seller}`)
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }

  
  const getOrderbyBuyer= async()=>{
    const buyer = "68fe70125d8eef7ef00f82ec";
    try{
      const res = await axios.get(`http://localhost:5000/api/product/buyerOrder/${buyer}`)
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }


const submitDocs= async()=>{
   
    try{
      const res = await axios.post(
      "http://localhost:5000/api/user/verify/documents",
      {
        userId: "689a5e91e78184dc6eb2a06e", 

        documents: [
          {
            type: "id_card",
            fileUrl: "https://www.pexels.com/photo/photo-of-man-doing-a-dunk-2834913/",
            publicId: "seller_docs/id-card"
          },
          {
            type: "utility_bill",
            fileUrl: "https://www.pexels.com/photo/photo-of-man-doing-a-dunk-2834913/",
            publicId: "seller_docs/utility-bill"
          }
        ]
      },
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true 
      }
    );
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }

const approveSeller= async()=>{
    const userId = "689a5e91e78184dc6eb2a06e"; 

    try{
      const res = await axios.patch(`http://localhost:5000/api/user/verify/admin/${userId}`);
      console.log(res?.data?.data)
      console.log("userId", userId);
    }catch(err){
      console.log(err);
    }
  }
  const getProductById = async()=>{
    const productId="695a98921685976c4b3fdccc";
  try{
    const res = await axios.get(`http://localhost:5000/api/product/${productId}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(res?.data?.data);
  }catch(err){
    console.log(err);
  }
}
const getProductBySellerId = async()=>{
    const seller="6947b82dba67ae6dd22db7df";
  try{
    const res = await axios.get(`http://localhost:5000/api/product/productBySeller/${seller}`,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(res?.data?.data);
  }catch(err){
    console.log(err);
  }
}
const getAllProducts = async()=>{
  try{
    const res = await axios.get("http://localhost:5000/api/products/getAllProducts",
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(res?.data?.data);
  }catch(err){
    console.log(err);
  }
}
const createCheckoutDetails = async () => {

  try {

    const preorderId = "69adf1caceab0d16224e79fc";

    const response = await axios.post(
      `http://localhost:5000/api/product/order/checkout-details/${preorderId}`,
      {
        shippingAddress: {
          fullName: "Dominic Okeke",
          phone: "0240563400",
          addressLine1: "Nze Community 1",
          addressLine2: "Near Market",
          city: "Awka",
          state: "Anambra",
          country: "Nigeria",
          postalCode: "004104"
        },

        paymentInfo: {
          paymentProvider: "paystack",
          paymentMethod: "card"
        }
      }
    );
  }catch(err){
    console.log("error occured", err);
  }
}
const updateCheckoutDetails = async () => {

  try {

    const preOrderId = "69adf1caceab0d16224e79fc";

    const response = await axios.patch(
      `http://localhost:5000/api/product/order/updateCheckoutDetails/${preOrderId}`,
      {

        shippingAddress: {
          city: "Los Angeles",
          addressLine1: "Trump Street 12"
        },

        paymentInfo: {
          paymentProvider: "stripe",
          paymentMethod: "card"
        }

      }
    );

    console.log("Updated checkout:", response.data);

  } catch (error) {

    console.error(
      error.response?.data || error.message
    );

  }
};
const createOrder = async()=>{
  try{
    const response = await axios.post(
      'http://localhost:5000/api/product/preorder',
      {
        cartId: '69a5a9084ab2246e209d7ab4',
        
        
      },
     {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,   
  }
    );

    console.log('Order created:', response?.data?.data);
  }catch(err){
console.log(err);
  }
}
const handleCreateProduct= async()=>{
    try{
      const token = localStorage.getItem("token"); 
      
       
      const res = await axios.post('http://localhost:5000/api/product',
      {
        sellerId: '6947b82dba67ae6dd22db7df', 
        title: "Premium Arab Men Gown",
        description: "Made from original Turkish fabric",
        price:60000,
        currency: "NGN",
        size: "XL",
        color: "Gold",
        category: "Clothing",
        status: "available",
        media: [
          {
            mediaUrl: "https://res.cloudinary.com/demo/image/upload/v1/ankara1.jpg",
            mediaId: "ankara1"
          },
          {
            mediaUrl: "https://res.cloudinary.com/demo/image/upload/v1/ankara2.jpg",
            mediaId: "ankara2"
          }
        ]
      },
      { withCredentials: true }
    );
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }
const handleUserMessages= async()=>{
    const conversationId = "6947af4dd34d19d7f17c2656"; 
    try{
      const res = await axios.get(`http://localhost:5000/api/message/user/${conversationId}`)
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }

  const handleGetUserChatList= async()=>{
    const userId = "6947b82dba67ae6dd22db7df"; 
    try{
      const res = await axios.get(`http://localhost:5000/api/message/chat/chatList/${userId}`);
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }
  const checkConversationId= async()=>{
    const senderId='68fe6a685d8eef7ef00f82e8';
    const receiverId='689a5e91e78184dc6eb2a06e';
    try{
      const res = await axios.post(`http://localhost:5000/api/message/user/conversation`, 
        {senderId: senderId,
          receiverId: receiverId
        }
      )
      console.log(res?.data?.data)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
checkConversationId();
  },[]);
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
const res=  await axios.get('http://localhost:5000/api/posts/all?limit=5&page=1')
console.log("data", res?.data?.data)
    }catch(err){
      console.log(err)
    }
  }
  const gePostsVideos = async()=>{
    
    try{
const res=  await axios.get('http://localhost:5000/api/posts/videos')
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
        name: 'Nozzy13',
        username: "Nozzy13",
        password: "Nozzy13",
        email: 'soundoz13st@gmail.com', 
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
      <button type='button' onClick={createCheckoutDetail }>Add Pay info</button><br/>

        <button type='button' onClick={payNow}>Pay Now</button><br/>


            <button type='button' onClick={createOrder}>Order Now</button><br/>


                  <button type='button' onClick={deleteEntireCart}> delete cart</button><br/>

                  <button type='button' onClick={removeCartItem }> Remove Item</button><br/>

            <button type='button' onClick={getCartById }> Get Cart</button><br/>

      <button type='button' onClick={addToCart }>Add to Cart</button><br/>

      <button type='button' onClick={getPreOrderId}>get pre-orderById</button><br/>

          <button type='button' onClick={updateCheckoutDetails}>edit info</button><br/>


            <button type='button' onClick={getCheckOutOrder}>Checkout</button><br/>

            <button type='button' onClick={getOrderbyBuyer}>orders by buyer</button><br/>

            <button type='button' onClick={getOrderbySeller}>orders by seller</button><br/>

      <button type='button' onClick={getProductBySellerId}>get productBySellerid</button><br/>


      <button type='button' onClick={getProductById}>get productByid</button><br/>
      <button type='button' onClick={submitDocs}>Become Verified</button><br/>

      <button type='button' onClick={approveSeller}>Approve</button><br/>


      <button type='button' onClick={getAllProducts}>Get Products</button><br/>


      <button type='button' onClick={handleCreateProduct}>Post Product</button><br/>

      <button type='button' onClick={handlePost}>Create Profile</button><br/>
          <button type='buttogetPostByIdn' onClick={handleGetUserChatList}>Get ChatList</button><br/>
  


      <button type='buttogetPostByIdn' onClick={likePost}>like</button><br/>
      <button type='buttogetPostByIdn' onClick={handleUserMessages}>Get user Chat</button><br/>

      <button type='buttogetPostByIdn' onClick={getPostById}>Get post</button><br/>
      <button type='buttogetPostByIdn' onClick={getAllUsers}>Get all users</button><br/>
      <button type='buttogetPostByIdn' onClick={handleComment}>comment</button><br/>

      <button type='buttogetPostByIdn' onClick={gePostsVideos}>explore</button><br/>


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

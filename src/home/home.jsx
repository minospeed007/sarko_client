import { useState } from 'react';
import './home.css';
import waitlist_pic from '../assets/waitlist_pic.JPG';
import user from '../assets/users.png';
import axios from 'axios';
import Modal from './modal';  

const Home = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleWaitList = async () => {
    try {
      const res = await axios.post("https://sarto-server.onrender.com/api/auth", { email });
      setSuccessMsg(res?.data?.message);
      setEmail('');
      setIsError('');
    } catch (err) {
      setSuccessMsg('');
      setIsError(err.response?.data?.message || 'An error occurred');
      console.error("Error:", err);
    }
  };

  const closeModal = () => {
    setSuccessMsg('');
    setIsError('');
  };

  return (
    <div className="home-root-div">
      <div className="home-div">
        <div className="home-content">
          <div className='home-desc'>
            <div className="home-btn-div">
              <div className='btn-div'>
                <h4>Get Trending</h4>
              </div>
              <div className='btn2-div'>
                <h4>Top Fashion</h4>
              </div>
            </div>
            <div className='h1-desc-div'>
              <h1>Discover, follow, and shop</h1>
              <h1> fashion trends in one </h1>
              <h1 className='h1-dot'>social platform</h1>
              <div className='desc-div'>
                Unlock exclusive fashion access to unique,<br />
                high-end designs, collaborations<br /> with top talents and brands.<br />
                Register for our <span className='span-text'>live events</span>.
              </div>
              <div className='user-div'>
                <img src={user} alt='user' className='user-img' />
                <h1 className='user-h2'>10k+</h1>
                <p className='user-p'> Registered Users</p>
              </div>
            </div>
          </div>
          <div className='home-img-div'>
            <img src={waitlist_pic } alt='fashion' className='home-img' />
          </div>
        </div>
      </div>
      <div className='wait-list-div'>
        <input 
          type='text' 
          placeholder='Your Email' 
          onChange={(e) => setEmail(e.target.value)}
          value={email}  
          className='join-input'
        />
        <button 
          type='button' 
          onClick={handleWaitList} 
          className='join-btn'
        >
          Join the waitlist
        </button>
      </div>
       {isError && <Modal message={isError} type="error" onClose={closeModal} />}
      {successMsg && <Modal message={successMsg} type="success" onClose={closeModal} />}
    </div>
  );
};

export default Home;

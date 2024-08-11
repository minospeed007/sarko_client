import { useState } from 'react';
import './create.css';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); 
    try {
      const response = await axios.post('http://localhost:5000/api/auth/sign_up', formData);
      navigate('/login');

      if (response.status !== 200) {
        throw new Error('Network error');
      }
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className='login-parent-div'>
      <div className='input-div'>
        <div className='h2-div'>
          <h1 className='login-h2'>Join Sarto</h1>
        </div>
        <form className='input-container' onSubmit={handleSubmit}>
          <div className='input-div-container'>
            <div className='login-input-div'>
              <input
                className='login-input'
                placeholder='Name'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='login-input-div'>
              <input
                className='login-input'
                placeholder='Username'
                name='username'
                value={formData.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='input-div-container'>
            <div className='login-input-div'>
              <input
                className='login-input'
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='login-input-div'>
              <input
                className='login-input'
                placeholder='Password'
                name='password'
                type='password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          {errorMessage && <div className='error-message'>{errorMessage}</div>}
          <div className='next-btn-div'>
            <button type="submit" className='login-btn'>Sign Up</button>
          </div>
          <div className='policy-div'>
            <small className='small-text'>
              By signing up, you agree to the
              <span className='signup-span-text'> Terms of service </span>
              and <span className='signup-span-text'> Privacy Policy</span>,
              including <span className='signup-span-text'> Cookies Use</span>
            </small>
          </div>
          <div className="signup-div">
            <span className='signup-text'>Already have an account?</span>
            <Link to='/login' className='signup-link'>
              <span className='signup'>Sign in</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;

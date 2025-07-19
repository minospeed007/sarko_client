import {useState} from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState();
const navigate=useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/userLogin', 
            { username, password });
            localStorage.setItem('token', response.data.access_token);
            console.log('Token Stored:', response.data.access_token);
            console.log('Response:', response.data);
            console.log('Button Clicked');
navigate('/ws')
        } catch (error) {
            console.log('Error:', error);
        }
    };
    

    return (
        <>
            <div className='login-parent-div'>
                <div className='input-div'>
                    <div className='input-container'>
                        <div className='h2s-div'>
                            <h1 className='logins-h2'>Sign in to Sarto</h1>
                        </div>
                        <div className='google-login-div'>
                            Sign in with Google
                        </div>
                        <div className='hr-div'>
                            <hr className='hr-log'/>
                            <span className='or-texts'>or</span>
                            <hr className='hr-log'/>
                        </div>
                        <div className='login-input-div'>
                            <input 
                                className='login-input' 
                                value={username}
                                placeholder='Email or username'
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input 
                                className='login-input' 
                                value={password}
                                placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='next-btns-div'>
                            <button 
                                role="button" 
                                type="button" 
                                className='loginbtns'
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                        </div>
                        <div className='reset-pwd-divs'>
                            <button className='reset-pwd-btns'>Forgot password</button>
                        </div>
                        <div className="signup-div">
                            <span className='signup-text'>Don't have an account?</span>
                            <Link to='/signup' className='signup-link'>
                                <span className='signup'>Sign up</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

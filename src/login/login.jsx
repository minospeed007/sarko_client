import {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login=()=>{

    return(<>
    <div className='login-parent-div'>


        <div className='input-div'>

            <div className='input-container'>
            <div className='h2s-div'> <h1 className='logins-h2'>Sign in to Sarto</h1></div>


              <div className='google-login-div'> Sign in with Google </div>
              <div className='hr-div'>
                 <hr className='hr-log'/>
                  <span className='or-texts'>or

                  </span>
                  <hr className='hr-log'/>
              </div>
              <div className='login-input-div'>
              <input className='login-input' placeholder='Email or username'/>

              </div>
              <div className='next-btns-div'>
              <button role="button"  type="button" className='loginbtns' > Next
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
    
    </>)

}

export default Login;
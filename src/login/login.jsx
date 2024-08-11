import {useState} from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login=()=>{

    return(<>
    <div className='login-parent-div'>


        <div className='input-div'>

            <div className='input-container'>
            <div className='h2-div'> <h1 className='login-h2'>Sign in to Sarto</h1></div>


              <div className='google-div'> Sign in with Google </div>
              <div className='hr-div'>
                 <hr className='login-hr'/>
                  <span className='or-text'>or

                  </span>
                  <hr className='login-hr'/>
              </div>
              <div className='login-input-div'>
              <input className='login-input' placeholder='Email or username'/>

              </div>
              <div className='next-btn-div'>
              <button role="button"  type="button" className='loginbtn' > Next
                 </button>
                 </div>
                 <div className='reset-pwd-div'> 
                 <button className='reset-pwd-btn'>Forgot password</button>
             
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
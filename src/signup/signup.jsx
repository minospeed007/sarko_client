import {useState} from 'react';
import {Link} from 'react-router-dom';
import './signup.css';

const Signup=()=>{

    return(<>
    <div className='signup-parent-div'>


        <div className='input-div'>

            <div className='input-container'>
            <div className='h1-div'>
              <h2>Join Sarto</h2>


            </div>


              <div className='google-div'> Sign up with Google </div>
              <div className='hr-div'>
                 <hr className='login-hr'/>
                  <span className='or-text'>or

                  </span>
                  <hr className='login-hr'/>
              </div>
              <Link to='/create_user' className='create-account-link'>
              <div className='next-btn-div'>
              <button role="button"  type="button" className='signup-btn' > Create an account
                 </button>
                 </div>
                 </Link>
                 <div className='policy-div'>
                    <small className='small-text'>By signing up, you agree to the
                         <span className='signup-span-text'> Terms of service </span>
                    and <span className='signup-span-text'> Privacy Policy</span>, 
                    including <span className='signup-span-text'> Cookies Use</span>
                    </ small>
                 </div>

                
              <div className="login-div">
              <span className='login-text'>Already have an account?</span>
              <Link to='/login' className='login-link'>
               <span className='login'>Log in</span> 
               </Link>
              
               </div>
            </div>

        </div>
    </div>
    
    </>)

}

export default Signup;
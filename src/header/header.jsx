import { Link } from 'react-router-dom';
import './header.css'

const Header =()=>{

    return(<>
   <div className="header-root-div">
    <div className="header-div">
        <Link to='/' className='about-link'>
    <div className="header-title-h1">
            <h1 className='header-h1'>Sarto</h1>
        </div>
        </Link>
        <Link to='/about' className='about-link'>
        <div className="header-title">
            <h4 className='header-h4'>About Us</h4>
        </div>
        </Link>
        <Link to='/login' className='about-link'>
        <div className="header-title">
            <h4 className='header-h4'>Login</h4>
        </div>
        </Link>
        
    </div>
</div>

    
    </>)

}

export default Header;

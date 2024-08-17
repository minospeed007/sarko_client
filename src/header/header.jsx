import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import './header.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className="header-root-div">
                <div className="header-div">
                    <Link to='/' className='about-link'>
                        <div className="header-title-h1">
                            <h1 className='header-h1'>Sarto</h1>
                        </div>
                    </Link>
                    <div className='about-login-div'>
                        <Link to='/about' className='about-link'>
                            <div className="header-title">
                                <h4 className='header-h4'>About Us</h4>
                            </div>
                        </Link>
                        <Link to='/login' className='about-link'>
                            <div className="header-title">
                                <button className='header-login-btn'>Login</button>
                            </div>
                        </Link>
                        <Link to='/signup' className='about-link'>
                            <div className="header-title">
                                <button className='header-login-btn'>Signup</button>
                            </div>
                        </Link>
                    </div>
                    <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
                </div>

                <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                    <div className="sidebar-close-btn" onClick={toggleSidebar}>
                        <MdClose className='close-icon' />
                    </div >
                    <div className="sidebar-links">
                        <Link to='/about' className='sidebar-link'>About Us</Link>
                        <Link to='/login' className='sidebar-link'>Login</Link>
                        <Link to='/signup' className='sidebar-link'>Signup</Link>


                        <div className="btn2-sidebar">Top Fashion</div>

                            <div className="btn-sidebar">Get Trending</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

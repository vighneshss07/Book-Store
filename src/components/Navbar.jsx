import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = ({role}) => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'>Book store</Link>
            </div>
            <div className='navbar-right'>
                <ul className="navbar-links">
                    <li><Link to="/books" className='navbar-link'>Books</Link></li>
                    { role === "admin" && <>
                      <li><Link to="/addbook" className='navbar-link'>Add Book</Link></li>
                      <li><Link to="/addstudent" className='navbar-link'>Add Student</Link></li>
                      <li><Link to="/dashboard" className='navbar-link'>Dashboard</Link></li>
                      </>
                    }
                    {role ===  "" ?
                    <li><Link to="/login" className='navbar-link'>Login</Link></li>
                    : <li><Link to="/logout" className='navbar-link'>Logout</Link></li>
                     }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

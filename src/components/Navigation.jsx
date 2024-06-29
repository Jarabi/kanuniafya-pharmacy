import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='nav-links'>
            <Link className='nav-item active' to='/'>
                Home
            </Link>
            <Link className='nav-item' to='/about'>
                About
            </Link>
            <Link className='nav-item' to='/services'>
                Services
            </Link>
            <Link className='nav-item' to='/contact'>
                Contact
            </Link>
        </div>
    );
};

export default Navigation;

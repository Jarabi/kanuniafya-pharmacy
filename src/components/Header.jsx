import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Header = () => {
    const location = useLocation();
    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className='navbar navbar-expand-lg fixed-top p-3'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    <img
                        src={logoImage}
                        alt='KanuniAfya logo image'
                        className='logo'
                        width={40}
                        height={40}
                    />
                    <div className='header'>
                        <h1>KanuniAfya Pharmacy</h1>
                        <h3>Health Guaranteed</h3>
                    </div>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#nav-items'
                    aria-controls='nav-items'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='nav-items'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        {links.map((link) => (
                            <li className='nav-item' key={link.path}>
                                <Link
                                    className={`nav-link ${
                                        location.pathname === link.path
                                            ? 'active'
                                            : ''
                                    }`}
                                    {...(location.pathname === link.path && {
                                        'aria-current': 'page',
                                    })}
                                    to={link.path}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

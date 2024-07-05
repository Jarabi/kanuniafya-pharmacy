Link;
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div className='container'>
            <header>
                <Link to='/'>
                    <img
                        src={logoImage}
                        alt='KanuniAfya logo image'
                        className='logo'
                    />
                    <div className='header-text'>
                        <h1>KanuniAfya Pharmacy</h1>
                        <h3>Health Guaranteed</h3>
                    </div>
                </Link>
                <Navigation />
            </header>
        </div>
    );
};

export default Header;

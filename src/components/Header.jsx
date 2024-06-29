Link;
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <Link to='/'>
                <img
                    src={logoImage}
                    alt='KanuniAfya logo image'
                    className='logo'
                />
                <h1>KanuniAfya Pharmacy</h1>
            </Link>
            <Navigation />
        </header>
    );
};

export default Header;

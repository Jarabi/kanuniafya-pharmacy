import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Header = () => {
    const location = useLocation();

    return (
        <header className='sticky top-0 z-50 bg-[#146D16] text-white p-4 shadow-md'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='flex items-center'>
                    <img
                        className='w-12 h-12 mr-6 shadow-xl rounded-full'
                        src={logoImage}
                        alt='Logo image'
                    />
                    <div>
                        <h1 className='text-2xl font-bold'>
                            KanuniAfya Pharmacy
                        </h1>
                        <p className='text-sm hover:text-[#DBC078] transition-text duration-300'>
                            Health Guaranteed
                        </p>
                    </div>
                </div>
                <nav>
                    <ul className='flex space-x-4'>
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Services', path: '/services' },
                            { name: 'Contact', path: '/contact' },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className={`hover:underline ${
                                        location.pathname === link.path
                                            ? 'text-[#DBC078]'
                                            : ''
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <footer className='bg-[#146D16] text-white p-8'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
                <div className='text-center'>
                    <h2 className='text-xl font-bold mb-2'>
                        KanuniAfya Pharmacy
                    </h2>
                    <p className='copyright'>
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>
                <div className='text-center'>
                    <h3 className='text-lg font-semibold mb-2'>Quick Links</h3>
                    <ul className='space-y-2'>
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About', path: '/about' },
                            { name: 'Services', path: '/services' },
                            { name: 'Gallery', path: '/gallery' },
                            { name: 'Contact', path: '/contact' },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    className='hover:underline'
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-center'>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

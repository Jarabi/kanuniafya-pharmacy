import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

const Footer = () => {
    const siteLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <section className='footer'>
            <div className='footer-content'>
                <p className='footer-heading'>
                    <span className='footer-title'>
                        <strong>KanuniAfya Pharmacy</strong>
                    </span>
                    <span className='copyright'>
                        © 2024. All Rights Reserved
                    </span>
                </p>
                <div className='site-links'>
                    <ul>
                        {siteLinks.map((link, index) => (
                            <>
                                <li key={link.index}>
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                                {index < siteLinks.length - 1 && (
                                    <span>&middot;</span>
                                )}
                            </>
                        ))}
                    </ul>
                </div>
                <SocialLinks />
            </div>
        </section>
    );
};

export default Footer;

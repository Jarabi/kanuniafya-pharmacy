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
            <div className='container'>
                <div className='row'>
                    <div className='content col-lg-12'>
                        <p className='copyright'>
                            <strong>KanuniAfya Pharmacy</strong> © 2024. All
                            Rights Reserved
                        </p>
                        <div className='site-links'>
                            {siteLinks.map((link, index) => (
                                <>
                                    <Link to={link.path} key={link.index}>
                                        {link.name}
                                    </Link>
                                    {index < siteLinks.length - 1 && (
                                        <span>&middot;</span>
                                    )}
                                </>
                            ))}
                        </div>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

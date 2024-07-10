import { Link } from 'react-router-dom';

const Footer = () => {
    const siteLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
    ];

    const socialLinks = [
        {
            name: 'facebook',
            path: 'https://www.facebook.com/profile.php?id=61556599607156',
        },
        { name: 'twitter', path: 'https://x.com/KanuniAfya' },
        { name: 'instagram', path: 'https://www.instagram.com/kanuniafya/' },
        {
            name: 'linkedin',
            path: 'https://www.linkedin.com/in/kanuniafya-pharmacy/',
        },
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
                        <div className='social-links'>
                            {socialLinks.map((link, index) => (
                                <>
                                    <Link
                                        target={'_blank'}
                                        to={link.path}
                                        className={`social-icon ${link.name}`}
                                        key={index}
                                    >
                                        <i
                                            className={`bx bxl-${link.name}`}
                                        ></i>
                                    </Link>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;

import { Link } from 'react-router-dom';

export default function SocialLinks() {
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
        <div className='social-links'>
            {socialLinks.map((link, index) => (
                <Link
                    target={'_blank'}
                    to={link.path}
                    className={`social-icon ${link.name}`}
                    key={index}
                >
                    <i className={`bx bxl-${link.name}`}></i>
                </Link>
            ))}
        </div>
    );
}

import { Link } from 'react-router-dom';
import 'boxicons';

export default function SocialLinks() {
    return (
        <>
            <h3 className='text-lg font-semibold mb-2'>Connect With Us</h3>
            <div className='flex space-x-4 justify-center'>
                {[
                    {
                        name: 'facebook',
                        path: 'https://www.facebook.com/profile.php?id=61556599607156',
                    },
                    { name: 'twitter', path: 'https://x.com/KanuniAfya' },
                    {
                        name: 'instagram',
                        path: 'https://www.instagram.com/kanuniafya/',
                    },
                    {
                        name: 'linkedin',
                        path: 'https://www.linkedin.com/in/kanuniafya-pharmacy/',
                    },
                ].map((link) => (
                    <Link target={'_blank'} to={link.path} key={link.name}>
                        <box-icon
                            type='logo'
                            name={link.name}
                            size='md'
                            border='circle'
                            color='white'
                            animation='flashing-hover'
                        ></box-icon>
                    </Link>
                ))}
            </div>
        </>
    );
}

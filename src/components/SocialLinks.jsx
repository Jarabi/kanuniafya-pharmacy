import { Link } from 'react-router-dom';

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
                    <Link
                        target={'_blank'}
                        to={link.path}
                        className='hover:text-[#DBC078]'
                        key={link.name}
                    >
                        <i className={`bx bxl-${link.name}`}></i>
                    </Link>
                ))}
            </div>
        </>
    );
}

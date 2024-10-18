import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-kanuniafya.jpg';

export default function AboutKanuniafya() {
    return (
        <motion.section
            className='flex flex-col md:flex-row items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mb-4'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='md:w-2/3 md:pr-8'>
                <h2 className='text-3xl font-semibold mb-8'>
                    <span className='text-[#146D16]'>Health</span> Guaranteed
                </h2>
                <p className='text-lg mb-4'>
                    Welcome to KanuniAfya Pharmacy, your trusted partner in
                    healthcare and wellness.
                </p>
                <p className='text-lg'>
                    Since our establishment, we have been committed to providing
                    exceptional pharmaceutical care to our clients. Our name,{' '}
                    <span className='italic'>KanuniAfya</span>, reflects our
                    core mission: &quot;Health Guaranteed&quot;. We believe that
                    everyone deserves access to high-quality healthcare services
                    and products.
                </p>
            </div>
            <div className='md:w-1/3 mb-8 md:mb-0'>
                <Image
                    image={{
                        className: 'rounded-lg shadow-md',
                        src: aboutImg,
                        alt: 'three people in a pharmacy setting',
                    }}
                />
            </div>
        </motion.section>
    );
}

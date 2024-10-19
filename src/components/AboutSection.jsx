import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Image from './LazyLoadImage';
import aboutImg from '../assets/about-section.jpg';

const About = () => {
    return (
        <motion.section
            className='py-16'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center mb-4'>
                    About <span className='text-[#146D16]'>KanuniAfya</span>
                </h2>
                <div className='flex flex-col md:flex-row items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4'>
                    <div className='md:w-1/3 mb-8 md:mb-0'>
                        <Image
                            image={{
                                src: aboutImg,
                                alt: 'shopping bag with some drugs',
                            }}
                        />
                    </div>
                    <div className='md:w-2/3 md:pl-8'>
                        <h3 className='text-2xl font-semibold mb-8'>
                            Enhancing your{' '}
                            <span className='text-[#146D16]'>health</span> and
                            wellbeing
                        </h3>
                        <p className='text-lg mb-4'>
                            KanuniAfya is a trusted pharmacy, devoted to safe
                            medicine for, and overall well-being of its clients.
                            Our experienced and friendly team will always be
                            readily available to ensure you access requisite
                            healthcare promptly and effectively.
                        </p>
                        <Link
                            to='/about'
                            className='text-[#146D16] font-semibold hover:underline'
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;

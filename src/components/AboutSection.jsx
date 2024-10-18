import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Image from './LazyLoadImage';
import aboutImg from '../assets/about-section.jpg';

const About = () => {
    return (
        <motion.section
            className='about-section py-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-center'>
                    About <span className='text-[#146D16]'>KanuniAfya</span>
                </h2>
                <h3 className='text-2xl text-center mb-8'>
                    Enhancing your health and wellbeing
                </h3>
                <div className='flex flex-col md:flex-row items-center'>
                    <div className='md:w-1/2 mb-8 md:mb-0'>
                        <Image
                            image={{
                                className: 'rounded-lg shadow-lg',
                                src: aboutImg,
                                alt: 'shopping bag with some drugs',
                                // width: 600,
                                // height: 500,
                            }}
                        />
                    </div>
                    <div className='md:w-1/2 md:pl-8'>
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
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;

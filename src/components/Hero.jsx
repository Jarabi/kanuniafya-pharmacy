import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <motion.section
            className='hero bg-[#146D16] text-white py-20'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='container mx-auto text-center'>
                <h1 className='text-4xl font-bold mb-4'>
                    Welcome to KanuniAfya Pharmacy
                </h1>
                <p className='text-xl mb-8'>
                    Your health and wellbeing is our top priority. We are
                    dedicated to providing you with the highest quality
                    healthcare through a wide range of health and wellness
                    products and services.
                </p>
                <Link
                    to='/services'
                    className='bg-[#DBC078] text-[#146D16] px-6 py-2 rounded-full font-semibold hover:bg-opacity-90'
                >
                    View Our Services
                </Link>
            </div>
        </motion.section>
    );
};

export default Hero;

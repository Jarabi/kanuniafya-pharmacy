import { motion } from 'framer-motion';
import Button from './Button';

const Hero = () => {
    return (
        <motion.section
            className='hero'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1>
                Welcome to <span className='accent'>KanuniAfya</span>
            </h1>
            <p>
                Your health and wellbeing is our top priority. We are dedicated
                to providing you with the highest quality healthcare through a
                wide range of health and wellness products and services.
            </p>
            <Button path='/services'>View Our Services</Button>
        </motion.section>
    );
};

export default Hero;

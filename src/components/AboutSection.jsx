import { motion } from 'framer-motion';
import Button from './Button';
import Image from './LazyLoadImage';
import aboutImg from '../assets/about-section.jpg';

const About = () => {
    return (
        <motion.section
            className='about-section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <div className='section-illustration'>
                <Image
                    image={{
                        src: aboutImg,
                        alt: 'shopping bag with some drugs',
                    }}
                />
            </div>
            <div className='section-details'>
                <h2 className='section-title'>
                    About <span className='accent'>KanuniAfya</span>
                </h2>
                <h3 className='section-subtitle'>
                    Enhancing your health and wellbeing
                </h3>
                <p className='section-description'>
                    KanuniAfya is a trusted pharmacy, devoted to safe medicine
                    for, and overall well-being of its clients. Our experienced
                    and friendly team will always be readily available to ensure
                    you access requisite healthcare promptly and effectively.
                </p>
                <Button path='/about'>Read More</Button>
            </div>
        </motion.section>
    );
};

export default About;

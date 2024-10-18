import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import missionImg from '../assets/our-mission.jpg';

export default function OurMission() {
    return (
        <motion.section
            className='our-mission section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <div className='section-details'>
                <h2 className='section-title'>
                    Our <span className='accent'>Mission</span>
                </h2>
                <p className='section-description'>
                    At KanuniAfya Pharmacy, our mission is to enhance the health
                    and well-being of our customers through personalized care
                    and innovative solutions. We strive to create an enabling
                    environment where everyone feels valued and supported in
                    their health journey.
                </p>
            </div>
            <div className='section-illustration'>
                <Image
                    image={{
                        src: missionImg,
                        alt: 'Three people around a bullseye target with an arrow in the center',
                        width: 600,
                    }}
                />
            </div>
        </motion.section>
    );
}

import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import teamImg from '../assets/our-team.jpg';

export default function OurTeam() {
    return (
        <motion.section
            className='section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className='section-illustration'>
                <Image
                    image={{
                        src: teamImg,
                        alt: 'Image of four people in a lightbulb',
                        width: 600,
                    }}
                />
            </div>
            <div className='section-details'>
                <h2 className='section-title'>
                    Our <span className='accent'>Team</span>
                </h2>
                <p className='section-description'>
                    Our team is dedicated to providing compassionate care and
                    expert advice. The team takes time to listen to
                    clients&apos; needs and offer tailored solutions to help
                    them achieve optimal health. Our commitment to continuous
                    education ensures the team stays abreast with the latest
                    advancements in pharmacy practice.
                </p>
            </div>
        </motion.section>
    );
}

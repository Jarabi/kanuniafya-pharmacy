import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import aboutImg from '../assets/about-kanuniafya.jpg';

export default function AboutKanuniafya() {
    return (
        <motion.section
            className='about-kanuniafya section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='section-details'>
                <h2 className='section-title'>
                    About <span className='accent'>Kanuniafya</span>
                </h2>
                <p className='section-description'>
                    Welcome to KanuniAfya Pharmacy, your trusted partner in
                    healthcare and wellness. Since our establishment, we have
                    been committed to providing exceptional pharmaceutical care
                    to our clients. Our name, KanuniAfya, reflects our core
                    mission: &quot;Health Guaranteed&quot;. We believe that
                    everyone deserves access to high-quality healthcare services
                    and products.
                </p>
            </div>
            <div className='section-illustration'>
                <Image
                    image={{
                        src: aboutImg,
                        alt: 'three people in a pharmacy setting',
                    }}
                />
            </div>
        </motion.section>
    );
}

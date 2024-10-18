import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import otcImg from '../assets/otc-products.jpg';

export default function OTCProducts() {
    return (
        <motion.section
            className='otc section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='section-details'>
                <h3 className='section-title'>01</h3>
                <h4 className='section-subtitle'>Over the Counter Products</h4>
                <p className='section-description'>
                    A wide selection of OTC medications, supplements, and health
                    products.
                </p>
            </div>
            <div className='section-illustration'>
                <Image
                    image={{
                        src: otcImg,
                        alt: 'Customer looking at OTC products in a pharmacy',
                        width: 600,
                    }}
                />
            </div>
        </motion.section>
    );
}

import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import missionImg from '../assets/our-mission.jpg';

export default function OurMission() {
    return (
        <motion.section
            className='flex flex-col md:flex-row items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mb-4'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <div className='md:w-2/3 md:pr-8'>
                <h2 className='text-3xl font-semibold mb-8'>
                    Our <span className='text-[#146D16]'>Mission</span>
                </h2>
                <p className='text-lg'>
                    At KanuniAfya Pharmacy, our mission is to enhance the health
                    and well-being of our customers through personalized care
                    and innovative solutions. We strive to create an enabling
                    environment where everyone feels valued and supported in
                    their health journey.
                </p>
            </div>
            <div className='md:w-1/3 mb-8 md:mb-0'>
                <Image
                    image={{
                        src: missionImg,
                        alt: 'Three people around a bullseye target with an arrow in the center',
                    }}
                />
            </div>
        </motion.section>
    );
}

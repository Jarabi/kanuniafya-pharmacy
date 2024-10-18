import Image from './LazyLoadImage';
import { motion } from 'framer-motion';
import teamImg from '../assets/our-team.jpg';

export default function OurTeam() {
    return (
        <motion.section
            className='flex flex-col md:flex-row items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 mb-4'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className='md:w-1/3 mb-8 md:mb-0'>
                <Image
                    image={{
                        className: 'rounded-lg shadow-md',
                        src: teamImg,
                        alt: 'Image of four people in a lightbulb',
                    }}
                />
            </div>
            <div className='md:w-2/3 md:pl-8'>
                <h2 className='text-3xl font-semibold mb-8'>
                    Our <span className='text-[#146D16]'>Team</span>
                </h2>
                <p className='tex-lg mb-4'>
                    Our team is dedicated to providing compassionate care and
                    expert advice.
                </p>
                <p className='tex-lg'>
                    The team takes time to listen to clients&apos; needs and
                    offer tailored solutions to help them achieve optimal
                    health. Our commitment to continuous education ensures the
                    team stays abreast with the latest advancements in pharmacy
                    practice.
                </p>
            </div>
        </motion.section>
    );
}

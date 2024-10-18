import { motion } from 'framer-motion';

export default function ChooseUs() {
    return (
        <motion.section
            className='rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            <h2 className='text-3xl font-semibold mb-8 text-center'>
                Why <span className='text-[#146D16]'>Choose</span> KanuniAfya
            </h2>
            <p className='text-lg mb-8'>
                At KanuniAfya Pharmacy, we prioritize your health and
                satisfaction. We are proud to offer:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {[
                    {
                        title: 'Exceptional Customer Service',
                        description:
                            'Friendly and experienced staff ready to assist you.',
                    },
                    {
                        title: 'Quality Products',
                        description:
                            'Trusted brands and high-quality medications at reasonable cost.',
                    },
                    {
                        title: 'Community Support',
                        description:
                            'Active participation in community health-related initiatives and events.',
                    },
                    {
                        title: 'Experienced and Knowledgeable Staff',
                        description:
                            'Our team is composed of highly trained professionals dedicated to providing expert advice and guidance.',
                    },
                ].map((reason, index) => (
                    <div key={index} className='px-8'>
                        <h3 className='flex items-center gap-2 text-xl text-[#146D16] font-semibold mb-2 -ml-8'>
                            <i className='bx bx-check-circle bx-sm'></i>
                            {reason.title}
                        </h3>
                        <p>{reason.description}</p>
                    </div>
                ))}
            </div>
            {/* <p className='text-lg mt-4'>
                Thank you for choosing KanuniAfya Pharmacy. We look forward to
                serving you and being a reliable partner in your health journey.
            </p> */}
        </motion.section>
    );
}

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className='container mx-auto py-16'>
            <h1 className='text-4xl font-bold text-center mb-8'>
                Our <span className='text-[#146D16]'>Services</span>
            </h1>
            <p className='text-lg text-center mb-8'>
                We offer a comprehensive range of services designed to meet your
                healthcare needs:
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {[
                    {
                        icon: 'shopping-bag',
                        title: 'Over-the-counter Products',
                        description:
                            'A wide selection of OTC medications, supplements, and health products.',
                    },
                    {
                        icon: 'refresh',
                        title: 'Online Refill Ordering',
                        description: 'Convenient on call prescription refills.',
                    },
                    {
                        icon: 'clipboard',
                        title: 'Prescription Services',
                        description:
                            'Quick and accurate prescription filling services.',
                    },
                ].map((service, index) => (
                    <motion.section
                        key={index}
                        className='flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4 m-4'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 * index }}
                    >
                        <box-icon
                            name={service.icon}
                            color='#146D16'
                            size='lg'
                        ></box-icon>
                        <h2 className='text-2xl font-semibold mb-4'>
                            {service.title}
                        </h2>
                        <p className='text-gray-600 border-t-2 border-t-[#146D16] pt-4'>
                            {service.description}
                        </p>
                    </motion.section>
                ))}
            </div>
        </div>
    );
};

export default Services;

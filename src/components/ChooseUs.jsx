import { motion } from 'framer-motion';

export default function ChooseUs() {
    return (
        <motion.section
            className='choose-us section'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            <div className='section-details'>
                <h2 className='section-title'>
                    Why <span className='accent'>Choose</span> KanuniAfya
                </h2>
                <div className='section-description'>
                    <p>
                        At KanuniAfya Pharmacy, we prioritize your health and
                        satisfaction. We are proud to offer:
                    </p>
                    <ul>
                        <li>
                            <span className='accent'>
                                Exceptional Customer Service
                            </span>
                            : Friendly and experienced staff ready to assist
                            you.
                        </li>
                        <li>
                            <span className='accent'>Quality Products</span>:
                            Trusted brands and high-quality medications at
                            reasonable cost.
                        </li>
                        <li>
                            <span className='accent'>Community Support</span>:
                            Active participation in community health related
                            initiatives and events.
                        </li>
                    </ul>
                    <p>
                        Thank you for choosing KanuniAfya Pharmacy. We look
                        forward to serving you and being a reliable partner in
                        your health journey.
                    </p>
                </div>
            </div>
        </motion.section>
    );
}

import ContactSection from '../components/ContactSection';

const Contact = () => {
    return (
        <div className='container'>
            <div className='contact-page'>
                <h2 className='text-center'>
                    <span className='accent'>Contact</span> Us
                </h2>
                {/* <p className='welcome-text'>
                    We welcome you to visit our pharmacy during our operating
                    hours. Our friendly staff is ready to help you with all your
                    healthcare needs.
                </p> */}
                <p className='welcome-text'>
                    We welcome you to visit our pharmacy. Our friendly staff is
                    ready to help you with all your healthcare needs.
                </p>
                <ContactSection />
            </div>
        </div>
    );
};

export default Contact;

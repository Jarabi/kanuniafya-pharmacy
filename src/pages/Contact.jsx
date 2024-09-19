import ContactSection from '../components/ContactSection';

const Contact = () => {
    return (
        <div className='contact section-layout'>
            <h2 className='contact-heading'>
                <span className='accent'>Contact</span> Us
            </h2>
            <div className='row justify-content-center'>
                <div className='col-md-12'>
                    <div className='wrapper'>
                        <div className='row no-gutters mb-5'>
                            <ContactSection />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

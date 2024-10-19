import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';

const Contact = () => {
    return (
        <div className='container mx-auto py-16'>
            <h1 className='text-4xl font-bold text-center mb-16'>
                <span className='text-[#146D16]'>Contact</span> Us
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <ContactForm />
                <ContactMap />
                <ContactInfo />
            </div>
        </div>
    );
};

export default Contact;

import ContactMap from './ContactMap';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactSection() {
    return (
        <div className='contact-section'>
            <ContactForm />
            <ContactMap />
            <ContactInfo />
            {/* <p className='fs-5 mt-3 text-center'>
                Thank you for choosing KanuniAfya Pharmacy. We look forward to
                serving you and ensuring your health is always guaranteed.
            </p> */}
        </div>
    );
}

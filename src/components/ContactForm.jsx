import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function ContactForm() {
    const form = useRef();
    const [stateMessage, setStateMessage] = useState('Send Message');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStateMessage('Sending...');

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_API_KEY
            )
            .then(
                (result) => {
                    setStateMessage('Message sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage('Send Message');
                    }, 5000);
                    console.log(result.text);
                },
                (error) => {
                    setStateMessage('Error sending message. Try again later.');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage('Send Message');
                    }, 5000);
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <div className='contact-form'>
            <h3>Talk to us</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className='row'>
                    <div className='input-grp fullname col-md-6'>
                        <label htmlFor='from_name'>FULL NAME</label>
                        <input
                            type='text'
                            id='from_name'
                            name='from_name'
                            placeholder='Name'
                            required
                        />
                        <small className='errMsg'>Please enter full name</small>
                    </div>
                    <div className='input-grp email col-md-6'>
                        <label htmlFor='from_email'>EMAIL</label>
                        <input
                            type='email'
                            id='from_email'
                            name='from_email'
                            placeholder='Email'
                            required
                        />
                        <small className='errMsg'>
                            Please enter your email
                        </small>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-grp subject col-md-12'>
                        <label htmlFor='subject'>SUBJECT</label>
                        <input
                            className='w-100'
                            type='text'
                            id='subject'
                            name='subject'
                            placeholder='Subject'
                            required
                        />
                        <small className='errMsg'>
                            Please enter email subject
                        </small>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-grp message col-md-12'>
                        <label htmlFor='message'>MESSAGE</label>
                        <textarea
                            className='w-100'
                            id='message'
                            name='message'
                            placeholder='Message'
                            rows={5}
                            required
                        ></textarea>
                        <small className='errMsg'>Please enter message</small>
                    </div>
                </div>
                <button type='submit' disabled={isSubmitting}>
                    {stateMessage}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;

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
        <div className='shadow-sm rounded p-4'>
            <h2 className='text-2xl font-semibold mb-8'>Get in Touch</h2>
            <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                <div className='flex gap-4'>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor='from_name' className='block mb-2'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='from_name'
                            name='from_name'
                            className='w-full p-2 border focus:outline outline-1 outline-[#146D16] rounded'
                            required
                        />
                        <small className='errMsg hidden'>
                            Please enter full name
                        </small>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label htmlFor='from_email' className='block mb-2'>
                            Email Address
                        </label>
                        <input
                            type='email'
                            id='from_email'
                            name='from_email'
                            className='w-full p-2 border focus:outline outline-1 outline-[#146D16] rounded'
                            required
                        />
                        <small className='errMsg hidden'>
                            Please enter your email address
                        </small>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='subject' className='block mb-2'>
                        Subject
                    </label>
                    <input
                        type='text'
                        id='subject'
                        name='subject'
                        className='w-full p-2 border focus:outline outline-1 outline-[#146D16] rounded'
                        required
                    />
                    <small className='errMsg hidden'>
                        Please enter email subject
                    </small>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='message' className='block mb-2'>
                        Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='w-full p-2 border focus:outline outline-1 outline-[#146D16] rounded'
                        required
                    ></textarea>
                    <small className='errMsg hidden'>
                        Please enter message
                    </small>
                </div>
                <button
                    type='submit'
                    className='bg-[#146D16] text-white px-6 py-2 rounded hover:bg-opacity-90'
                    disabled={isSubmitting}
                >
                    {stateMessage}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

function ContactForm() {
    const form = useRef();
    const [stateMessage, setStateMessage] = useState('Send Message');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};

        // Check if name is empty
        if (!form.current.from_name.value.trim()) {
            formErrors.from_name = 'Please enter your name';
        }

        // Check if email is empty or invalid
        const email = form.current.from_email.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.trim() || !emailPattern.test(email)) {
            formErrors.from_email = 'Please enter a valid email address';
        }

        // Check if subject is empty
        if (!form.current.subject.value.trim()) {
            formErrors.subject = 'Please enter the subject';
        }

        // Check if message is empty
        if (!form.current.message.value.trim()) {
            formErrors.message = 'Please enter your message';
        }

        setErrors(formErrors);

        // Return true if no errors, otherwise, false
        return Object.keys(formErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

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
                        {errors.from_name && (
                            <small className='text-xs text-red-500'>
                                {errors.from_name}
                            </small>
                        )}
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
                        {errors.from_email && (
                            <small className='text-xs text-red-500'>
                                {errors.from_email}
                            </small>
                        )}
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
                    {errors.subject && (
                        <small className='text-xs text-red-500'>
                            {errors.subject}
                        </small>
                    )}
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
                    {errors.message && (
                        <small className='text-xs text-red-500'>
                            {errors.message}
                        </small>
                    )}
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

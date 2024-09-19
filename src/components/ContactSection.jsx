import SocialLinks from './SocialLinks';

export default function ContactSection() {
    return (
        <div className='contact-section'>
            <div className='get-in-touch'>
                <div className='map'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3008670885972!2d36.74072463809718!3d-1.2856823405542754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1be9cb549f03%3A0xe72934441a5a5c84!2sEl-Elyon%20Heights!5e0!3m2!1sen!2ske!4v1726518074435!5m2!1sen!2ske'
                        allowfullscreen=''
                        loading='lazy'
                    ></iframe>
                </div>
                <div className='contact-form'>
                    <h3>get in touch</h3>
                    <form>
                        <div className='form-group'>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                placeholder='name'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                placeholder='email'
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <textarea
                                id='message'
                                name='message'
                                placeholder='message'
                                cols={40}
                                rows={5}
                                required
                            ></textarea>
                        </div>
                        <button type='submit'>Send message</button>
                    </form>
                </div>
            </div>
            <div className='contact-info'>
                <div className='row'>
                    <div className='col-md-3'>
                        <h4>address</h4>
                        <p>El-Elyon Buiding, Kawangware, Nairobi</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>phone</h4>
                        <p>0712559704, 0750559704</p>
                    </div>
                    <div className='col-md-3'>
                        <h4>email</h4>
                        <p>kanuniafya[at]gmail[dot]com</p>
                    </div>
                    <div className='social col-md-3'>
                        <h4>social</h4>
                        <SocialLinks />
                    </div>
                </div>
            </div>
            <p className='fs-5 mt-3 text-center'>
                Thank you for choosing KanuniAfya Pharmacy. We look forward to
                serving you and ensuring your health is always guaranteed.
            </p>
        </div>
    );
}

import mapImg from '../assets/map.png';
import SocialLinks from './SocialLinks';

export default function ContactSection() {
    return (
        <div className='contact-section'>
            <div className='row'>
                <div className='map col-md-6'>
                    <img src={mapImg} alt='map' />
                </div>
                <div className='contact-form col-md-6'>
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

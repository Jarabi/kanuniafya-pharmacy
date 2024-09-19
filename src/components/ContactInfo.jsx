// import SocialLinks from './SocialLinks';

function ContactInfo() {
    return (
        <div className='contact-info'>
            <div className='info-items'>
                <div className='info-item address'>
                    <div className='info-icon'>
                        <i className='bx bxs-map'></i>
                    </div>
                    <div className='info-details'>
                        <h6 className='accent'>Address</h6>
                        <p>El-Elyon Buiding, Kawangware, Nairobi</p>
                    </div>
                </div>
                <div className='info-item phone'>
                    <div className='info-icon'>
                        <i className='bx bx-phone'></i>
                    </div>
                    <div className='info-details'>
                        <h6 className='accent'>Phone</h6>
                        <p>0712559704</p>
                    </div>
                </div>
                <div className='info-item email'>
                    <div className='info-icon'>
                        <i className='bx bx-paper-plane'></i>
                    </div>
                    <div className='info-details'>
                        <h6 className='accent'>Email</h6>
                        <p>kanuniafya [at] gmail [dot] com</p>
                    </div>
                </div>
                {/* <div className='info-item social'>
                    <SocialLinks />
                    <p>Follow us on social media</p>
                </div> */}
            </div>
        </div>
    );
}

export default ContactInfo;

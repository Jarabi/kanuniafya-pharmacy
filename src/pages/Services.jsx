import OnlineOrdering from '../components/OnlineOrdering';
import OTCProducts from '../components/OTCProducts';
import PrescriptionServices from '../components/PrescriptionServices';

const Services = () => {
    return (
        <div className='container'>
            <div className='services-page'>
                <h2 className='text-center'>
                    Our <span className='accent'>Services</span>
                </h2>
                <p className='text-center'>
                    We offer a comprehensive range of services designed to meet
                    your healthcare needs:
                </p>
                <div className='cards'>
                    <OTCProducts />
                    <OnlineOrdering />
                    <PrescriptionServices />
                </div>
            </div>
        </div>
    );
};

export default Services;

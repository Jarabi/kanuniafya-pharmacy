import OnlineOrdering from '../components/OnlineOrdering';
import OTCProducts from '../components/OTCProducts';
import PrescriptionServices from '../components/PrescriptionServices';

const Services = () => {
    return (
        <div className='services section-layout'>
            <h2 className='page-header'>
                Our <span className='accent'>Services</span>
            </h2>
            <p className='page-subheading'>
                We offer a comprehensive range of services designed to meet your
                healthcare needs:
            </p>
            <OTCProducts />
            <OnlineOrdering />
            <PrescriptionServices />
        </div>
    );
};

export default Services;

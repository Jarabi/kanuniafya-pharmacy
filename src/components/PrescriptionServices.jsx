import Image from './LazyLoadImage';
import prescriptionServicesImg from '../assets/prescription-services.jpg';

export default function PrescriptionServices() {
    return (
        <section className='prescription-services section'>
            <div className='section-details'>
                <h2 className='section-title'>03</h2>
                <h3 className='section-subtitle'>prescription services</h3>
                <p className='section-description'>
                    Quick and accurate prescription filling services.
                </p>
            </div>
            <div className='section-illustration'>
                <Image
                    image={{
                        src: prescriptionServicesImg,
                        alt: 'Pharmacist filling up prescription form',
                        width: 600,
                    }}
                />
            </div>
        </section>
    );
}

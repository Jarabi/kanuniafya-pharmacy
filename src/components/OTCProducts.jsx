import Image from './LazyLoadImage';
import otcImg from '../assets/otc-products.jpg';

export default function OTCProducts() {
    return (
        <section className='otc section'>
            <div className='section-details'>
                <h3 className='section-title'>01</h3>
                <h4 className='section-subtitle'>Over the Counter Products</h4>
                <p className='section-description'>
                    A wide selection of OTC medications, supplements, and health
                    products.
                </p>
            </div>
            <div className='section-illustration'>
                <Image
                    image={{
                        src: otcImg,
                        alt: 'Customer looking at OTC products in a pharmacy',
                        width: 600,
                    }}
                />
            </div>
        </section>
    );
}

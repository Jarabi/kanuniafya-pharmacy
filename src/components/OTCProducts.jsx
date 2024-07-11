import LazyLoadImage from './LazyLoadImage';
import otcImg from '../assets/otc-products.jpg';

export default function OTCProducts() {
    return (
        <section className='otc section'>
            <div className='section-details'>
                <h2 className='section-title'>01</h2>
                <h3 className='section-subtitle'>Over the Counter Products</h3>
                <p className='section-description'>
                    A wide selection of OTC medications, supplements, and health
                    products.
                </p>
            </div>
            <div className='section-illustration'>
                <LazyLoadImage
                    src={otcImg}
                    alt='Customer looking at OTC products in a pharmacy'
                />
            </div>
        </section>
    );
}

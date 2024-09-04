import Image from './LazyLoadImage';
import onlineOrderingImg from '../assets/online-ordering.jpg';

export default function OnlineOrdering() {
    return (
        <section className='online-ordering section'>
            <div className='section-illustration'>
                <Image
                    image={{
                        src: onlineOrderingImg,
                        alt: 'Customer ordering drugs online through phone app',
                        width: 600,
                    }}
                />
            </div>
            <div className='section-details'>
                <h2 className='section-title'>02</h2>
                <h3 className='section-subtitle'>online refill ordering</h3>
                <p className='section-description'>
                    Convenient on call prescription refills.
                </p>
            </div>
        </section>
    );
}

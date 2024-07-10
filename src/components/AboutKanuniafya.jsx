import aboutImg from '../assets/about-kanuniafya.jpg';

export default function AboutKanuniafya() {
    return (
        <section className='about section'>
            <div className='section-details'>
                <h2 className='section-title'>
                    About <span className='accent'>Kanuniafya</span>
                </h2>
                <p className='section-description'>
                    Welcome to KanuniAfya Pharmacy, your trusted partner in
                    health and wellness. Since our establishment, we have been
                    committed to providing exceptional pharmaceutical care to
                    our community. Our name, KanuniAfya, reflects our core
                    mission: &quot;Health Guaranteed.&quot; We believe that
                    everyone deserves access to high-quality healthcare services
                    and products.
                </p>
            </div>
            <div className='section-illustation'>
                <img
                    src={aboutImg}
                    alt=''
                    className='section-img'
                    width={500}
                />
            </div>
        </section>
    );
}

import Button from './Button';
import LazyLoadImage from './LazyLoadImage';
import aboutImg from '../assets/about-section.jpg';

const About = () => {
    return (
        <section className='about section'>
            <div className='section-illustation'>
                <LazyLoadImage
                    src={aboutImg}
                    alt='shopping bag with some drugs'
                />
            </div>
            <div className='section-details'>
                <h2 className='section-title'>
                    About <span className='accent'>KanuniAfya</span>
                </h2>
                <h3 className='section-subtitle'>
                    Enhancing your health and wellbeing
                </h3>
                <p className='section-description mb-5'>
                    KanuniAfya is a trusted pharmacy, devoted to safe medicine
                    for, and overall well-being of its clients. Our experienced
                    and friendly team will always be readily available to ensure
                    you access requisite healthcare promptly and effectively.
                </p>
                <Button path='/about'>Read More</Button>
            </div>
        </section>
    );
};

export default About;

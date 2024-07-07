import Button from './Button';
import aboutImg from '../assets/about.jpg';

const About = () => {
    return (
        <section className='about'>
            <div className='section-img'>
                <img src={aboutImg} alt='shopping bag with some drugs' />
            </div>
            <div className='section-details'>
                <h2>
                    About <span className='accent'>KanuniAfya</span>
                </h2>
                <p className='subheading'>
                    Investing in your health and wellbeing
                </p>
                <p>
                    KanuniAfya is a trusted pharmacy, devoted to safe medicine
                    and overall well-being of its clients. Our experienced and
                    friendly team is here to ensure you have everything you need
                    to manage your health effectively and conveniently.
                </p>
                <Button path='/about'>Read More</Button>
            </div>
        </section>
    );
};

export default About;

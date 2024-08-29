import Button from './Button';

const Hero = () => {
    return (
        <section className='hero'>
            <h1>
                Welcome to <span className='accent'>KanuniAfya</span>
            </h1>
            <p>
                Your health and wellbeing is our top priority. We are dedicated
                to providing you with the highest quality healthcare through a
                wide range of health and wellness products and services.
            </p>
            <Button path='/services'>View Our Services</Button>
        </section>
    );
};

export default Hero;

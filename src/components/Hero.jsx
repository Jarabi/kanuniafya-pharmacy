import Button from './Button';

const Hero = () => {
    return (
        <section className='hero'>
            <h1>
                Welcome to <span className='accent'>KanuniAfya</span>
            </h1>
            <p>
                Your health is our top priority. We are dedicated to providing
                you with the highest quality care and a wide range of health and
                wellness products.
            </p>
            <Button path='/'>View Our Services</Button>
        </section>
    );
};

export default Hero;

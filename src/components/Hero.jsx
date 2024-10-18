import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className='hero bg-[#146D16] text-white py-20'>
            <div className='container mx-auto text-center'>
                <h1 className='text-4xl font-bold mb-4'>
                    Welcome to KanuniAfya Pharmacy
                </h1>
                <p className='text-xl mb-8'>
                    Your health and wellbeing is our top priority. We are
                    dedicated to providing you with the highest quality
                    healthcare through a wide range of health and wellness
                    products and services.
                </p>
                <Link
                    to='/services'
                    className='bg-[#DBC078] text-[#146D16] px-6 py-3 rounded-full font-semibold hover:bg-opacity-90'
                >
                    View Our Services
                </Link>
            </div>
        </section>
    );
};

export default Hero;

import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <section className='hero'>
                <h1>
                    Welcome to <span className='accent'>KanuniAfya</span>
                </h1>
                <p>
                    Your health is our top priority. We are dedicated to
                    providing you with the highest quality care and a wide range
                    of health and wellness products.
                </p>
                <Link to='/services' className='btn'>
                    View Our Services
                </Link>
            </section>
        </div>
    );
};

export default Home;

import Hero from '../components/Hero';
import About from '../components/AboutSection';

const Home = () => {
    return (
        <div className='container'>
            <div className='home'>
                <Hero />
                <About />
            </div>
        </div>
    );
};

export default Home;

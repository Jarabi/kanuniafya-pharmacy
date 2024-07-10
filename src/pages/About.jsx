import AboutKanuniafya from '../components/AboutKanuniafya';
import OurTeam from '../components/OurTeam';
import OurMission from '../components/OurMission';
import ChooseUs from '../components/ChooseUs';

export default function About() {
    return (
        <div className='container'>
            <div className='about-page'>
                <AboutKanuniafya />
                <OurTeam />
                <OurMission />
                <ChooseUs />
            </div>
        </div>
    );
}

import AboutKanuniafya from '../components/AboutKanuniafya';
import OurTeam from '../components/OurTeam';
import OurMission from '../components/OurMission';
import ChooseUs from '../components/ChooseUs';

export default function About() {
    return (
        <div className='about section-layout'>
            <AboutKanuniafya />
            <OurTeam />
            <OurMission />
            <ChooseUs />
        </div>
    );
}

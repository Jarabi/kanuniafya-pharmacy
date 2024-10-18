import AboutKanuniafya from '../components/AboutKanuniafya';
import OurTeam from '../components/OurTeam';
import OurMission from '../components/OurMission';
import ChooseUs from '../components/ChooseUs';

export default function About() {
    return (
        <div className='container mx-auto py-16'>
            <h1 className='text-4xl font-bold text-center mb-16'>
                About <span className='text-[#146D16]'>Kanuniafya</span>{' '}
                Pharmacy
            </h1>
            <AboutKanuniafya />
            <OurTeam />
            <OurMission />
            <ChooseUs />
        </div>
    );
}

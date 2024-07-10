import missionImg from '../assets/our-mission.jpg';

export default function OurMission() {
    return (
        <section className='about section'>
            <div className='section-details'>
                <h2 className='section-title'>
                    Our <span className='accent'>Mission</span>
                </h2>
                <p className='section-description'>
                    At KanuniAfya Pharmacy, our mission is to enhance the health
                    and well-being of our customers through personalized care
                    and innovative solutions. We strive to create a welcoming
                    environment where everyone feels valued and supported in
                    their health journey.
                </p>
            </div>
            <div className='section-illustation'>
                <img
                    src={missionImg}
                    alt=''
                    className='section-img'
                    width={500}
                />
            </div>
        </section>
    );
}

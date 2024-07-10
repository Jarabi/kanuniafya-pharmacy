import LazyLoadImage from './LazyLoadImage';
import teamImg from '../assets/our-team.jpg';

export default function OurTeam() {
    return (
        <section className='team section'>
            <div className='section-illustation'>
                <LazyLoadImage
                    src={teamImg}
                    alt='Image of four people in a lightbulb'
                />
            </div>
            <div className='section-details'>
                <h2 className='section-title'>
                    Our <span className='accent'>Team</span>
                </h2>
                <p className='section-description'>
                    Our team is dedicated to providing compassionate care and
                    expert advice. We take the time to listen to your needs and
                    offer tailored solutions to help you achieve optimal health.
                    Our commitment to ongoing education ensures we stay
                    up-to-date with the latest advancements in pharmacy
                    practice.
                </p>
            </div>
        </section>
    );
}

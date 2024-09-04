import Image from './LazyLoadImage';
import teamImg from '../assets/our-team.jpg';

export default function OurTeam() {
    return (
        <section className='team section'>
            <div className='section-illustation'>
                <Image
                    image={{
                        src: teamImg,
                        alt: 'Image of four people in a lightbulb',
                        width: 600,
                    }}
                />
            </div>
            <div className='section-details'>
                <h2 className='section-title'>
                    Our <span className='accent'>Team</span>
                </h2>
                <p className='section-description'>
                    Our team is dedicated to providing compassionate care and
                    expert advice. The team takes time to listen to
                    clients&apos; needs and offer tailored solutions to help
                    them achieve optimal health. Our commitment to continuous
                    education ensures the team stays abreast with the latest
                    advancements in pharmacy practice.
                </p>
            </div>
        </section>
    );
}

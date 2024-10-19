import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ image }) => (
    <LazyLoadImage
        alt={image.alt}
        src={image.src}
        className='rounded-md shadow-sm'
        effect='blur'
    />
);

export default Image;

Image.propTypes = {
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }).isRequired,
};

import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ image }) => (
    <LazyLoadImage
        className={image.className}
        alt={image.alt}
        src={image.src}
        width={image.width}
        height={image.height}
        effect='blur'
    />
);

export default Image;

Image.propTypes = {
    image: PropTypes.shape({
        className: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

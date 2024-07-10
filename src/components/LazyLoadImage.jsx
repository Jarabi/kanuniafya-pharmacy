import LazyLoad from 'react-lazy-load';
import PropTypes from 'prop-types';

export default function LazyLoadImage({ src, alt, width = 500, height = 500 }) {
    return (
        <div>
            <LazyLoad width={width}>
                <img
                    src={src}
                    alt={alt}
                    className='section-img'
                    width={width}
                    height={height}
                />
            </LazyLoad>
        </div>
    );
}

LazyLoadImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

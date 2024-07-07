import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ path, children }) => {
    return (
        <Link className='btn-primary' to={path}>
            {children}
        </Link>
    );
};

Button.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

export default Button;

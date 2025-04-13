import React from 'react';
import PropTypes from 'prop-types';

const PropValidation = ({message}) => {
    return (
        <div>
            <p>Message: {message}</p>
        </div>
    )
}

PropValidation.propTypes = {
    message: PropTypes.string.isRequired,
};

export default PropValidation;

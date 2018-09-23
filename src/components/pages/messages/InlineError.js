import React from 'react';
import PropTypes from 'prop-types';

const InlineError = ({text}) => {
  return (
    <span style={{color: 'red'}}>{text}</span>
  );
};

InlineError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineError;

import React, { PropTypes } from 'react';

const LoadingIndicator = ({ show=true }) => (
	<div className={`spinner ${ show ? '' : 'hidden'}`}>
	  <div className="bounce1"></div>
	  <div className="bounce2"></div>
	  <div className="bounce3"></div>
	</div>
);

LoadingIndicator.propTypes = {
	hidden: PropTypes.bool
};

export default LoadingIndicator;
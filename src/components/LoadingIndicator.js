import React, { PropTypes } from 'react';
import image from './../images/anakin.png';

const LoadingIndicator = ({ useTheForce=false }) => {
	if (useTheForce) {
		return (
      <div className="loadingIndicator forceLoading">
        <div>
          <img src={image} alt="Vader Spinning" />
        </div>
      </div>
		);
	}
	return (
		<div className="loadingIndicator loadingDots">
		  <div className="bounce1"></div>
		  <div className="bounce2"></div>
		  <div className="bounce3"></div>
		</div>
		);
};


LoadingIndicator.propTypes = {
	hidden: PropTypes.bool
};

export default LoadingIndicator;
import React, { PropTypes } from 'react';
import image from './../images/banner-1.jpg';

const Banner = ( { season=1 } ) => (
  <div className="container banner">
    <h4><span>NYC X-Wing</span> League</h4>
    <img src={image} alt="NYC X-Wing League" />
  </div>
);

Banner.propTypes = {
  season: PropTypes.number
};

export default Banner;
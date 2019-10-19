import React from "react";

import PropTypes from "prop-types";

const Card = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces
  } = property;

  return (
    <div id={`card-${index}`} className="card">
      <a href={"/"}>
        <img src={picture} alt={city} />

        {/* <a href={"/"}>
        <video width="640" height="480">
          <source src="movie.mp4" type="video/mp4" />
          <source src="movie.ogg" type="video/ogg" />
          Your browser does not support the video tag.
  </video>*/}
      </a>
    </div>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired
};

export default Card;

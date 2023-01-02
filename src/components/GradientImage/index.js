import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { FaChevronRight } from 'react-icons/fa';

const GradientImage = ({ image, children, caption, description, button }) => {
  return (
    <div className="gradient-image" style={{ '--img': `url(${image})` }}>
      {caption && (
        <div className="banner-caption-container">
          <p className="banner-caption">{caption}</p>
          <p className="banner-description">{description}</p>
          <Button
            variant="danger"
            size="lg"
            className="d-flex justify-content-center banner-button"
            onClick={button.action}>
            {button.text} <FaChevronRight className="align-self-center m-1" />
          </Button>
        </div>
      )}
      {children}
    </div>
  );
};

GradientImage.propTypes = {
  image: PropTypes.any,
  children: PropTypes.any,
  caption: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.object
};

export default GradientImage;

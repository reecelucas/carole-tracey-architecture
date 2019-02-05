import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  slideIndexes: PropTypes.arrayOf(PropTypes.number).isRequired
};

const CarouselControls = ({ onClick, slideIndexes }) => {
  return slideIndexes.map(i => {
    return (
      <Button
        key={i}
        onClick={() => onClick(i)}
        aria-label={`Navigate to slide ${i}`}
      >
        Click me!
      </Button>
    );
  });
};

CarouselControls.propTypes = propTypes;

export default CarouselControls;

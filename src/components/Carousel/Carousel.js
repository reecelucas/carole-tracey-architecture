import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CarouselContext from './CarouselContext';

const propTypes = {
  children: PropTypes.any.isRequired
};

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const register = ({ index, active }) => {
    if (active) {
      /**
       * The user has specified that the registering slide
       * should initially be active.
       */
      setActiveIndex(index);
    }

    setSlides(slides => [...slides, index]);
  };

  const unregister = index => {
    if (slides.includes(index)) {
      setSlides(slides => slides.filter(i => i !== index));
    }
  };

  const navigate = index => {
    setActiveIndex(slides[index]);
  };

  return (
    <CarouselContext.Provider
      value={{
        register,
        unregister,
        activeIndex
      }}
    >
      {children({
        navigateToSlide: navigate,
        slideIndexes: slides
      })}
    </CarouselContext.Provider>
  );
};

Slider.propTypes = propTypes;

export default Slider;

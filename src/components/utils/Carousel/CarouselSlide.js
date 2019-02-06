import { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CarouselContext from './CarouselContext';

const propTypes = {
  children: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool
};

const CarouselSlide = ({ children, index, active }) => {
  const { register, unregister, activeIndex } = useContext(CarouselContext);

  useEffect(() => {
    register({
      index,
      active: !!active
    });

    return () => {
      unregister(index);
    };
  }, []);

  return children({
    isActive: index === activeIndex
  });
};

CarouselSlide.propTypes = propTypes;

export default CarouselSlide;

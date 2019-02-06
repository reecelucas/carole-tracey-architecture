import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from '../../helpers/debounce';

const propTypes = {
  children: PropTypes.func.isRequired,
  // Array of React Refs
  spyOn: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
  ).isRequired,
  disable: PropTypes.bool
};

let scrollTicking = false;
let scrollY = null;
let cache = [];

const ScrollSpy = ({ spyOn, disable, children }) => {
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    scrollY = window.pageYOffset;
    cacheElements(spyOn);
    bindEventHandlers();

    return () => {
      unbindEventHandlers();
    };
  }, []);

  useEffect(() => {
    if (disable === true) {
      unbindEventHandlers();
      return;
    }

    if (disable === false) {
      bindEventHandlers();
    }
  }, [disable]);

  const cacheElements = refs => {
    if (!refs || refs.length === 0) return;

    refs.forEach(({ current: element }) => {
      if (!element) return;

      const elementHeight = element.offsetHeight;
      const elementTop = element.offsetTop;
      const cacheEntry = {
        elementId: element.id || '',
        elementTop,
        elementBottom: elementTop + elementHeight
      };

      cache.push(cacheEntry);
    });
  };

  const updateCurrentId = () => {
    cache.forEach(({ elementId, elementTop, elementBottom }) => {
      if (elementTop <= scrollY && elementBottom > scrollY) {
        setCurrentId(elementId);
      }
    });

    scrollTicking = false;
  };

  const onScroll = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateCurrentId);
      scrollY = window.pageYOffset;
    }
  };

  const onResize = debounce(100, () => {
    document.removeEventListener('scroll', onScroll);
    setCurrentId('');

    // Rebind event handlers and update cached sizes and dimensions
    document.addEventListener('scroll', onScroll);
    cacheElements(spyOn);
    updateCurrentId();
  });

  const bindEventHandlers = () => {
    document.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
  };

  const unbindEventHandlers = () => {
    document.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
  };

  return children({ currentId });
};

ScrollSpy.propTypes = propTypes;

export default ScrollSpy;

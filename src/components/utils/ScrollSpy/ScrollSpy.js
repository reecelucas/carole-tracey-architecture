import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from '../../../helpers/debounce';
import isBrowser from '../../../helpers/isBrowser';

/**
 * `instanceOf` causes Gatsby to error during the HTML build
 * step due to some SSR issue.
 */
const propTypes = isBrowser()
  ? {
      children: PropTypes.func.isRequired,
      // Array of React Refs
      spyOn: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.shape({ current: PropTypes.instanceOf(Element) })
        ])
      ).isRequired,
      offset: PropTypes.number,
      disable: PropTypes.bool
    }
  : {};

let lastElement = null;
let scrollTicking = false;
let windowHeight = null;
let scrollY = null;
let htmlScrollTop = null;
let htmlScrollHeight = null;

const ScrollSpy = ({ spyOn, offset, disable, children }) => {
  const [currentId, setCurrentId] = useState('');

  useEffect(() => {
    windowHeight = window.innerHeight;
    setScrollVariables();
    updateCurrentId(); // Set initial currentId

    if (!disable) {
      console.log('!disable');
      /**
       * We currently only listen to the `disable` prop
       * on mount, so can't respond to dynamic changes.
       */
      document.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onResize);
    }

    return () => {
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useEffect(() => {
    lastElement = getLastElement();
  }, [spyOn]);

  const getLastElement = () => spyOn[spyOn.length - 1].current || null;

  const setScrollVariables = () => {
    scrollY = window.pageYOffset;
    htmlScrollTop = document.documentElement.scrollTop;
    htmlScrollHeight = document.documentElement.scrollHeight;
  };

  const atBottom = () => htmlScrollTop + windowHeight === htmlScrollHeight;

  const updateCurrentId = () => {
    if (atBottom() && lastElement) {
      // Set the last item to active
      setCurrentId(lastElement.id);
      scrollTicking = false;
      return;
    }

    spyOn.forEach(({ current: elem }) => {
      if (!elem) {
        scrollTicking = false;
        return;
      }

      /**
       * Get element positions. We do this here becasue they can change as
       * a result of user interaction so we need to ensure we always have
       * fresh values.
       */
      const elemTop = offset ? elem.offsetTop - offset : elem.offsetTop;
      const elemHeight = elem.offsetHeight;
      const elemBottom = elemTop + elemHeight;

      if (elemTop <= scrollY && elemBottom >= scrollY) {
        setCurrentId(elem.id);
      }
    });

    scrollTicking = false;
  };

  const onScroll = () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateCurrentId);
      setScrollVariables();
    }
  };

  const onResize = debounce(100, () => {
    document.removeEventListener('scroll', onScroll);
    setCurrentId('');

    // Rebind event handlers and update scroll variables
    document.addEventListener('scroll', onScroll);
    windowHeight = window.innerHeight;
    setScrollVariables();
    updateCurrentId();
  });

  return children({ currentId });
};

ScrollSpy.propTypes = propTypes;

export default ScrollSpy;

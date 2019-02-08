import { useState, useEffect } from 'react';
import debounce from '../helpers/debounce';

export default (debounceDuration = 100) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const onResize = debounce(debounceDuration, () => {
    setWindowWidth(window.innerWidth);
  });

  return windowWidth;
};

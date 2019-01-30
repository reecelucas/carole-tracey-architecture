import {
  fetchFromLocalStorage,
  saveToLocalStorage
} from './utilities/local-storage';

const loadedClass = 'fonts-loaded';

if (fetchFromLocalStorage(loadedClass)) {
  /**
   * We use a flag in localStorage to infer whether the webfonts are cached.
   * This is obviously not bulletproof because if the font is never cached,
   * or the user clears their cache (but not their local storage), this check
   * will still pass and the `fonts-loaded` class will be applied before the webfont
   * is downloaded. Unfortunatelty, until the Cache API has better support there isn't
   * a lot that can be done about this.
   */
  document.documentElement.classList.add(loadedClass);
} else if ('fonts' in document) {
  Promise.all([
    document.fonts.load("400 1em 'Nunito'"),
    document.fonts.load("700 1em 'Nunito'"),
    document.fonts.load("400 1em 'EB Garamond'")
  ])
    .then(() => {
      document.documentElement.classList.add(loadedClass);
      saveToLocalStorage({
        key: loadedClass,
        value: true,
        expirationDays: 364
      });
    })
    .catch(console.warn);
} else {
  const script = document.createElement('script');
  script.src = '/js/font-loading-fallback.js';
  script.async = true;
  document.head.appendChild(script);
}

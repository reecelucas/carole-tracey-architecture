import { css } from '@emotion/core';

export default css`
  img {
    height: auto;
    font-style: italic;
    max-width: 100%;
    vertical-align: middle;
  }

  img[width],
  img[height] {
    max-width: none;
  }

  img[data-lazyload] {
    opacity: 1;
    transition: opacity 0.4s ease;

    .no-js & {
      display: none;
    }
  }

  img[data-src] {
    opacity: 0;
  }
`;

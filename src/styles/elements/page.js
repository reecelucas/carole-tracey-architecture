import { css } from '@emotion/core';
import { rgba } from 'polished';
import { HEADER_HEIGHT } from '../../constants/global';
import { FONT_FAMILIES, COLOURS, BREAKPOINTS } from '../theme';

export default css`
  html {
    color: ${rgba(COLOURS.black, 0.8)};
    font-family: ${FONT_FAMILIES.fallback};
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.025em;
    min-height: 100%;
    overflow-y: scroll;

    &.fonts-loaded {
      font-family: ${FONT_FAMILIES.sans};
      letter-spacing: initial;
    }

    @media (min-width: ${BREAKPOINTS.lg}) {
      font-size: 19px;
    }
  }

  body {
    background-color: ${COLOURS.white};
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media (min-width: ${BREAKPOINTS.sm}) {
      padding-top: ${HEADER_HEIGHT}px;
    }
  }
`;

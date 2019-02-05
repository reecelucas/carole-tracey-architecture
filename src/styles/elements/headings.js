import { css } from '@emotion/core';
import { COLOURS, FONT_SIZES } from '../theme';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${COLOURS.black};
    font-weight: 400;
  }

  h1 {
    font-size: ${FONT_SIZES[1]};
  }

  h2 {
    font-size: ${FONT_SIZES[2]};
  }

  h3 {
    font-size: ${FONT_SIZES[3]};
  }

  h4 {
    font-size: ${FONT_SIZES[4]};
  }

  h5 {
    font-size: ${FONT_SIZES[5]};
  }

  h6 {
    font-size: ${FONT_SIZES[6]};
  }
`;

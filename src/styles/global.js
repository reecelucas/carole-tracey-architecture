import { css } from '@emotion/core';
import * as generic from './generic';
import * as elements from './elements';
import { COLOURS, FONT_FAMILIES, SPACING } from './theme';

const baseButtonStyles = css`
  all: initial;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  font-family: $font-sans;
  font-family: ${FONT_FAMILIES.fallback};
  font-weight: 600;
  letter-spacing: 0.025em;
  line-height: 1;
  margin: 0;
  padding: ${SPACING.small} ${SPACING.large};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s ease;
  vertical-align: middle;
`;

export const BUTTON_STYLES = {
  primary: css`
    ${baseButtonStyles}
    background-color: ${COLOURS.green8};
    color: ${COLOURS.white};

    &:hover,
    &:active,
    &:focus {
      background-color: ${COLOURS.green6};
    }
  `,
  secondary: css`
    ${baseButtonStyles}
    border: 2px solid ${COLOURS.green8};
    color: ${COLOURS.black};

    &:hover,
    &:active,
    &:focus {
      background-color: ${COLOURS.green8};
      color: ${COLOURS.white};
    }
  `
};

export const GLOBAL_STYLES = css`
  ${generic.boxSizing};
  ${generic.normalize};
  ${generic.reset};
  ${generic.shared};
  ${generic.focusManagement};
  ${generic.fonts};

  ${elements.page};
  ${elements.headings};
  ${elements.images};
`;

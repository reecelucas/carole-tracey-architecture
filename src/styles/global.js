import { css } from '@emotion/core';
import * as generic from './generic';
import * as elements from './elements';
import { COLOURS } from './theme';

export const LINK_STYLES = css`
  border-bottom: 1px solid ${COLOURS.base};
  box-shadow: inset 0 -2px 0 0 ${COLOURS.base};
  position: relative;
  transition: all 0.1s ease;

  &:hover,
  &:active,
  &:focus {
    background-color: ${COLOURS.base};
  }
`;

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

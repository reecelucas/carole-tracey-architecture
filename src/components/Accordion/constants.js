import { css } from '@emotion/core';
import { COLOURS, Z_INDEXES } from '../../styles/theme';

export const ICON_SIZE = '3rem';
export const CONNECTOR_STYLES = css`
  position: relative;

  &:after {
    background-color: ${COLOURS.teal4};
    content: '';
    display: inline-block;
    height: 100%;
    left: calc(${ICON_SIZE} / 2);
    position: absolute;
    top: 0;
    width: 2px;
    z-index: ${Z_INDEXES.beneath};
  }
`;

import React from 'react';
import styled from '@emotion/styled';
import Anchor from '../utils/Anchor/Anchor';
import {
  COLOURS,
  SPACING,
  FONT_FAMILIES,
  FONT_SIZES,
  Z_INDEXES
} from '../../styles/theme';

const borderRadius = '8px';

const StyledLink = styled(Anchor)`
  clip: rect(1px, 1px, 1px, 1px);
  font-family: ${FONT_FAMILIES.fallback};
  font-size: ${FONT_SIZES[6]};
  font-weight: 600;
  height: 1px;
  overflow: hidden;
  outline: none !important;
  padding-top: ${SPACING.tiny};
  padding-bottom: ${SPACING.tiny};
  position: absolute;
  top: 0;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -100%);
  transition: transform 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  white-space: nowrap;
  width: 1px;

  &:focus {
    background-color: ${COLOURS.black};
    border-bottom-right-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
    clip: auto;
    color: ${COLOURS.white};
    height: auto;
    overflow: visible;
    position: fixed;
    transform: translate(-50%, -4px);
    white-space: normal;
    width: 200px;
    z-index: ${Z_INDEXES.skipLink};
  }
`;

const SkipLink = () => (
  <StyledLink id="cta-skiplink" href="#content">
    Skip to content
  </StyledLink>
);

export default SkipLink;

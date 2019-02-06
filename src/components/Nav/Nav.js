import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ScrollSpy from '../utils/ScrollSpy/ScrollSpy';
import { HEADER_HEIGHT } from '../../constants/global';
import {
  BREAKPOINTS,
  COLOURS,
  FONT_FAMILIES,
  FONT_SIZES,
  SPACING
} from '../../styles/theme';

const propTypes = {
  // Array of React Refs
  spyOn: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    ])
  ).isRequired
};

const StyledNav = styled.nav`
  font-family: ${FONT_FAMILIES.fallback};
  font-size: ${FONT_SIZES[7]};
  font-weight: 600;

  &:before,
  &:after {
    background-color: ${COLOURS.gray1};
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    margin: ${SPACING.small} -50vw;
    position: relative;
    right: 50%;
    width: 100vw;
  }

  &:after {
    margin-bottom: 0;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    align-items: center;
    display: flex;
    justify-content: flex-end;

    &:before,
    &:after {
      content: none;
    }
  }
`;

const StyledNavItem = styled.a`
  letter-spacing: 0.025em;
  line-height: 1.4;
  position: relative;
  text-transform: uppercase;

  &:after {
    background-color: ${COLOURS.teal8};
    content: '';
    display: ${({ isActive }) => (isActive ? 'inline-block' : 'none')};
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &:not(:last-child) {
    margin-right: ${SPACING.base};
  }
`;

const Nav = ({ spyOn }) => (
  <ScrollSpy spyOn={spyOn} offset={HEADER_HEIGHT}>
    {({ currentId }) => {
      return (
        <StyledNav>
          <StyledNavItem
            id="nav-item-services"
            href="#services"
            isActive={currentId === 'services'}
          >
            Services
          </StyledNavItem>
          <StyledNavItem
            id="nav-item-testimonials"
            href="#testimonials"
            isActive={currentId === 'testimonials'}
          >
            Testimonials
          </StyledNavItem>
          <StyledNavItem
            id="nav-item-process"
            href="#process"
            isActive={currentId === 'process'}
          >
            Process
          </StyledNavItem>
        </StyledNav>
      );
    }}
  </ScrollSpy>
);

Nav.propTypes = propTypes;

export default Nav;

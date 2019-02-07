import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ScrollSpy from '../utils/ScrollSpy/ScrollSpy';
import Anchor from '../utils/Anchor/Anchor';
import ease from '../../helpers/ease';
import setFocus from '../../helpers/setFocus';
import isBrowser from '../../helpers/isBrowser';
import { HEADER_HEIGHT } from '../../constants/global';
import {
  BREAKPOINTS,
  COLOURS,
  FONT_FAMILIES,
  FONT_SIZES,
  SPACING
} from '../../styles/theme';

/**
 * `instanceOf` causes Gatsby to error during the HTML build
 * step due to some SSR issue.
 */
const propTypes = isBrowser()
  ? {
      items: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string,
          label: PropTypes.string,
          href: PropTypes.string,
          // React Ref
          spyOn: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({ current: PropTypes.instanceOf(Element) })
          ])
        }).isRequired
      )
    }
  : {};

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

const StyledNavItem = styled(Anchor)`
  color: ${COLOURS.black};
  display: inline-block;
  letter-spacing: 0.025em;
  line-height: 2;
  position: relative;
  text-transform: uppercase;

  &:after {
    background-color: ${COLOURS.green8};
    content: '';
    display: ${({ isActive }) => (isActive ? 'inline-block' : 'none')};
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &:not(:last-child) {
    margin-right: ${SPACING.small};
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    line-height: 1.4;

    &:not(:last-child) {
      margin-right: ${SPACING.base};
    }
  }
`;

/**
 * Keep a local reference to the `currentId` property
 * returned from the `ScrollSpy` render function.
 */
let _currentId = null;

const Nav = ({ items }) => {
  const [clickedItemId, setClickedItemId] = useState('');
  const [scrolling, setScrolling] = useState(false);

  const spyOn = items.map(({ spyOn }) => spyOn);

  const onClick = event => {
    event.preventDefault();

    const { target } = event;
    const hash = target.getAttribute('href');
    const id = hash.substring(1); // Strip leading `#`
    const { current: elem } = spyOn.find(({ current }) => current.id === id);

    if (!elem || _currentId === id) return;

    setClickedItemId(id);
    setScrolling(true);

    const elemTop = elem.offsetTop - HEADER_HEIGHT;

    ease({
      startValue: window.pageYOffset,
      endValue: elemTop,
      durationMs: 450,
      onStep: value => window.scroll(0, value),
      onComplete: () => {
        setFocus(elem, { y: elemTop });

        // Reset
        setScrolling(false);
        setClickedItemId('');

        if (window.history && window.history.pushState) {
          // Update url with hash to ensure native anchor behaviour is preserved
          window.history.pushState(null, null, hash);
        }
      }
    });
  };

  const isActive = id =>
    (scrolling && clickedItemId === id) || (_currentId === id && !scrolling);

  return (
    <ScrollSpy spyOn={spyOn} offset={HEADER_HEIGHT}>
      {({ currentId }) => {
        _currentId = currentId;

        return (
          <StyledNav>
            {items.map(({ id, href, label }) => {
              const trimmedHref = href.substring(1);

              return (
                <StyledNavItem
                  key={id}
                  id={id}
                  href={href}
                  isActive={isActive(trimmedHref)}
                  onClick={onClick}
                >
                  {label}
                </StyledNavItem>
              );
            })}
          </StyledNav>
        );
      }}
    </ScrollSpy>
  );
};

Nav.propTypes = propTypes;

export default Nav;

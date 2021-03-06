import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { stripUnit } from 'polished';
import Anchor from '../../components/utils/Anchor/Anchor';
import Button from '../../components/utils/Button/Button';
import Image from '../../components/utils/Image/Image';
import SkipLink from '../../components/SkipLink/SkipLink';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import useWindowWidth from '../../hooks/useWindowWidth';
import ease from '../../helpers/ease';
import setFocus from '../../helpers/setFocus';
import isBrowser from '../../helpers/isBrowser';
import { HEADER_HEIGHT } from '../../constants/global';
import {
  BREAKPOINTS,
  COLOURS,
  FONT_FAMILIES,
  FONT_SIZES,
  SPACING,
  Z_INDEXES
} from '../../styles/theme';

import logo from '../../images/logo.png';

/**
 * `instanceOf` causes Gatsby to error during the HTML build
 * step due to some SSR issue.
 */
const propTypes = isBrowser()
  ? {
      navItems: PropTypes.arrayOf(
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

const StyledHeader = styled.header`
  background-color: ${COLOURS.white};
  box-shadow: 0 1px 2px 0 ${COLOURS.gray1};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${Z_INDEXES.header};
`;

const Inner = styled(Wrapper)`
  @media (min-width: ${BREAKPOINTS.sm}) {
    align-content: center;
    align-items: center;
    display: flex;
    display: grid;
    flex-direction: row;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
  }
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  height: ${HEADER_HEIGHT};
  justify-content: space-between;
`;

const Logo = styled(Anchor)`
  line-height: 1;

  img {
    display: block;
  }
`;

const Hamburger = styled(Button)`
  svg {
    display: block;
    height: 32px;
    fill: ${COLOURS.black};
    pointer-events: none;
    width: 32px;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  }
`;

const StyledNav = styled.nav`
  align-items: flex-start;
  display: ${props => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  font-family: ${FONT_FAMILIES.fallback};
  font-size: ${FONT_SIZES[7]};
  font-weight: 600;
  padding: ${SPACING.base} 0;
  position: relative;

  &:before {
    background-color: ${COLOURS.gray1};
    content: '';
    display: block;
    height: 1px;
    left: 50%;
    margin: 0 -50vw;
    position: absolute;
    right: 50%;
    top: 0;
    width: 100vw;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    align-items: initial;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0;

    &:before {
      content: none;
    }
  }
`;

const NavItem = styled(Anchor)`
  color: ${COLOURS.black};
  letter-spacing: 0.025em;
  line-height: 1.4;
  position: relative;
  text-transform: uppercase;

  &:after {
    background-color: ${COLOURS.base};
    content: '';
    display: ${({ isActive }) => (isActive ? 'inline-block' : 'none')};
    height: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &:not(:last-child) {
    margin-bottom: ${SPACING.base};
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: ${SPACING.base};
    }
  }
`;

const Header = ({ currentId, navItems }) => {
  const headerRef = useRef();
  const firstNavItemRef = useRef();

  const [navIsCollapsible, setNavIsCollapsible] = useState(false);
  const [clickedItemId, setClickedItemId] = useState('');
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setNavIsCollapsible(windowWidth < stripUnit(BREAKPOINTS.sm));
  }, [windowWidth]);

  useEffect(() => {
    if (navIsCollapsible) {
      document.addEventListener('click', onDocumentClick);
    }

    return () => {
      document.removeEventListener('click', onDocumentClick);
    };
  }, [navIsCollapsible]);

  useEffect(() => {
    if (showMenu && firstNavItemRef.current) {
      firstNavItemRef.current.focus();
    }
  }, [showMenu]);

  const onDocumentClick = ({ target }) => {
    if (!headerRef.current.contains(target)) {
      // The click happened outside of the header, so hide the menu
      setShowMenu(false);
    }
  };

  const onHamburgerClick = () => {
    setShowMenu(showMenu => !showMenu);
  };

  const onNavItemClick = event => {
    event.preventDefault();

    const hash = event.target.getAttribute('href');
    const id = hash.replace('#', '');
    const elem = document.querySelector(hash);

    if (!elem || currentId === id) return;

    setClickedItemId(id);
    setScrolling(true);

    if (navIsCollapsible) {
      setShowMenu(false);
    }

    const elemTop = elem.offsetTop - stripUnit(HEADER_HEIGHT);

    ease({
      startValue: window.pageYOffset,
      endValue: elemTop,
      durationMs: 600,
      onStep: value => window.scroll(0, value),
      onComplete: () => {
        setFocus(elem, { y: elemTop });

        /**
         * Reset now that we're done. As it stands this is quite
         * precarious, since we reset the `clickedItemId` before
         * we can be sure that the `currentId` prop has updated to
         * reflect the new current section. If the duration of
         * the easing function is reduced we can see this latency
         * manifest as a brief flicker in the `navItem` active state.
         */
        setScrolling(false);
        setClickedItemId('');

        if (window.history && window.history.pushState) {
          // Update url with hash to preserve native anchor behaviour
          window.history.pushState(null, null, hash);
        }
      }
    });
  };

  const navItemIsActive = id =>
    (scrolling && clickedItemId === id) || (currentId === id && !scrolling);

  return (
    <StyledHeader ref={headerRef}>
      <SkipLink />

      <Inner>
        <Controls>
          <Logo id="cta-site-logo" href="/" aria-label="caroletracey.com">
            <Image src={logo} alt="" />
          </Logo>
          <Hamburger
            id="btn-hamburger"
            onClick={onHamburgerClick}
            aria-label="Menu"
            aria-controls="menu"
            aria-expanded={showMenu ? 'true' : 'false'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
            </svg>
          </Hamburger>
        </Controls>

        <StyledNav
          id="menu"
          aria-labelledby={navIsCollapsible ? 'menu-button' : null}
          aria-hidden={navIsCollapsible ? (showMenu ? 'false' : 'true') : null}
          show={showMenu}
        >
          {navItems.map(({ id, href, label }, i) => {
            const trimmedHref = href.replace('#', '');

            return (
              <NavItem
                ref={i === 0 ? firstNavItemRef : null}
                key={id}
                id={id}
                href={href}
                isActive={navItemIsActive(trimmedHref)}
                onClick={onNavItemClick}
              >
                {label}
              </NavItem>
            );
          })}
        </StyledNav>
      </Inner>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;

export default Header;

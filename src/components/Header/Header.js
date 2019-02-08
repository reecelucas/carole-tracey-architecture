import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Wrapper from '../utils/Wrapper/Wrapper';
import Anchor from '../utils/Anchor/Anchor';
import SkipLink from '../SkipLink/SkipLink';
import { HEADER_HEIGHT } from '../../constants/global';
import { BREAKPOINTS, COLOURS, SPACING, Z_INDEXES } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired
};

const StyledHeader = styled.header`
  padding-top: ${SPACING.base};

  @media (min-width: ${BREAKPOINTS.sm}) {
    align-items: center;
    background-color: ${COLOURS.white};
    box-shadow: 0 1px 2px 0 ${COLOURS.gray1};
    display: flex;
    height: ${HEADER_HEIGHT};
    left: 0;
    position: fixed;
    padding-top: 0;
    top: 0;
    width: 100%;
    z-index: ${Z_INDEXES.header};
  }
`;

const HeaderInner = styled(Wrapper)`
  display: flex;
  flex-direction: column;

  @media (min-width: ${BREAKPOINTS.sm}) {
    align-content: center;
    align-items: center;
    display: grid;
    flex-direction: row;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
  }
`;

const Logo = styled(Anchor)`
  line-height: 1;
  margin-bottom: 0;

  svg {
    display: block;
    height: 30px;
    width: 23px;
  }
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <SkipLink />

      <HeaderInner>
        <Logo id="cta-site-logo" href="/" aria-label="caroletracey.com">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 48">
            <path
              fill="#DEC38B"
              d="M23 0H0v48h41L25.2 29.4C34.2 27.7 41 22 41 14.8 41 6.6 34.2 0 23 0z"
            />
            <path fill="#272B3B" d="M0 48h41L26.5 31 0 0v48z" />
          </svg>
        </Logo>
        {children}
      </HeaderInner>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;

export default Header;

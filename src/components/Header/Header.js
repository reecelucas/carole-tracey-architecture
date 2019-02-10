import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Wrapper from '../utils/Wrapper/Wrapper';
import Anchor from '../utils/Anchor/Anchor';
import SkipLink from '../SkipLink/SkipLink';
import Image from '../utils/Image/Image';
import { HEADER_HEIGHT } from '../../constants/global';
import { BREAKPOINTS, COLOURS, SPACING, Z_INDEXES } from '../../styles/theme';

import logo from '../../images/logo.png';

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

  img {
    display: block;
  }
`;

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <SkipLink />

      <HeaderInner>
        <Logo id="cta-site-logo" href="/" aria-label="caroletracey.com">
          <Image src={logo} alt="" />
        </Logo>
        {children}
      </HeaderInner>
    </StyledHeader>
  );
};

Header.propTypes = propTypes;

export default Header;

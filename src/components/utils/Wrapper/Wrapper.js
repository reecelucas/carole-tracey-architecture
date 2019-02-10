import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import validCSSValue from '../../../helpers/propTypes/validCSSValue';
import { SPACING, WIDTHS } from '../../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  gutter: validCSSValue,
  as: PropTypes.string
};

const StyledWrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${WIDTHS.siteMax};
  padding: 0 ${({ gutter }) => (gutter ? gutter : SPACING.base)};
  width: 100%;
`;

const Wrapper = ({ children, as, ...rest }) => (
  <StyledWrapper as={as} {...rest}>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = propTypes;

export default Wrapper;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SPACING, WIDTHS } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string
};

const StyledWrapper = styled.div`
  display: block;
  margin: 0 auto;
  max-width: ${WIDTHS.siteMax};
  padding: 0 ${SPACING.base};
`;

const Wrapper = ({ children, as, ...rest }) => (
  <StyledWrapper as={as} {...rest}>
    {children}
  </StyledWrapper>
);

Wrapper.propTypes = propTypes;

export default Wrapper;

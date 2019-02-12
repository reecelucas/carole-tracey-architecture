import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { SPACING } from '../../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(...Object.keys(SPACING))
};

const StyledSpacer = styled.div`
  margin-bottom: ${props => SPACING[props.size] || SPACING.base};
`;

const Spacer = ({ children, size, ...rest }) => (
  <StyledSpacer size={size} {...rest}>
    {children}
  </StyledSpacer>
);

Spacer.propTypes = propTypes;

export default Spacer;

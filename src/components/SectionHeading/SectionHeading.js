import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6'])
};

const Heading = styled.h1`
  letter-spacing: 0.025em;
  text-transform: uppercase;
`;

const SectionHeading = ({ children, as }) => (
  <Heading as={as}>{children}</Heading>
);

SectionHeading.propTypes = propTypes;

export default SectionHeading;

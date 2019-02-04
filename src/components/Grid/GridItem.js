import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string
};

const StyledGridItem = styled.div``;

const GridItem = ({ children, as }) => (
  <StyledGridItem as={as} data-grid-item>
    {children}
  </StyledGridItem>
);

GridItem.propTypes = propTypes;

export default GridItem;

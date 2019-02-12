import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { COLOURS, SPACING } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  contrast: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

const sizePaddingMap = {
  sm: '5vmin',
  md: '10vmin',
  lg: '20vmin'
};

const getPadding = ({ size }) =>
  `calc(${sizePaddingMap[size] || sizePaddingMap.md} + ${SPACING.base})`;

const StyledBanner = styled.div`
  background-color: ${props => props.contrast && COLOURS.green0};
  padding: ${props => getPadding(props)} 0;
`;

const Banner = React.forwardRef(function Banner(props, ref) {
  const { children, contrast, size, ...rest } = props;

  return (
    <StyledBanner contrast={contrast} size={size} ref={ref} {...rest}>
      {children}
    </StyledBanner>
  );
});

Banner.propTypes = propTypes;

export default Banner;

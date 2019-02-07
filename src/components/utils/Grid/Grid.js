import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { VALID_CSS_UNITS } from '../../../constants/global';
import { BREAKPOINTS, SPACING } from '../../../styles/theme';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).isRequired,
  gutter: (props, propValue, componentName) => {
    const value = props[propValue];

    if (value && !value.endsWith(VALID_CSS_UNITS.join(` || `))) {
      return new Error(
        `Invalid prop \`${propValue}\` of value \`${value}\` supplied to \`${componentName}\`, expected string to end with a valid CSS unit.`
      );
    }
  },
  from: PropTypes.oneOf([...Object.keys(BREAKPOINTS)]),
  as: PropTypes.string
};

const getGutterValue = ({ gutter }) =>
  gutter ? `${gutter}` : `${SPACING.base}`;

const getColumnStyles = ({ columns, from }) => {
  const bp = BREAKPOINTS[from];
  const columnStyles = `
    grid-template-columns: repeat(${columns}, 1fr);

    > [data-grid-item] {
      flex-basis: calc(100% / ${columns});
    }
  `;

  return bp
    ? `@media (min-width: ${bp}) { ${columnStyles} }`
    : `${columnStyles}`;
};

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${props => `-${getGutterValue(props)}`};

  > [data-grid-item] {
    padding-left: ${props => getGutterValue(props)};
  }

  @supports (display: grid) {
    display: grid;
    grid-column-gap: ${props => getGutterValue(props)};
    margin-left: 0;

    > [data-grid-item] {
      padding-left: 0;
    }
  }

  ${props => getColumnStyles(props)}
`;

const Grid = ({ children, columns, gutter, from, as }) => (
  <StyledGrid columns={columns} gutter={gutter} from={from} as={as}>
    {children}
  </StyledGrid>
);

Grid.propTypes = propTypes;

export default Grid;

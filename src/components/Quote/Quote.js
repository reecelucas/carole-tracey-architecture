import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { FONT_FAMILIES, FONT_SIZES } from '../../styles/theme';

const propTypes = {
  quote: PropTypes.string.isRequired,
  attribution: PropTypes.string
};

const StyledQuote = styled.blockquote`
  font-family: ${FONT_FAMILIES.serif};
  font-size: ${FONT_SIZES[3]};
  margin: 0 auto;
  max-width: 80ch;
  text-align: center;
`;

const StyledAttribution = styled.span`
  display: inline-block;
  font-family: ${FONT_FAMILIES.fallback};
  font-size: ${FONT_SIZES[8]};
  font-weight: 700;
  vertical-align: top;
`;

const Quote = ({ quote, attribution }) => {
  return (
    <StyledQuote>
      <p>&ldquo;{quote}&rdquo;</p>
      {attribution && <StyledAttribution>{attribution}</StyledAttribution>}
    </StyledQuote>
  );
};

Quote.propTypes = propTypes;

export default Quote;

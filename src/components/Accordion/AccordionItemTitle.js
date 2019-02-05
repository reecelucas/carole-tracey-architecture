import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';
import styled from '@emotion/styled';
import { ICON_SIZE, CONNECTOR_STYLES } from './constants';
import { SPACING, COLOURS, FONT_SIZES } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired
};

const Title = styled.h2`
  font-size: ${FONT_SIZES[4]};
  margin-bottom: 0;
  padding-bottom: ${props => (props.expanded ? '0' : `${SPACING.base}`)};

  &:not(:last-of-type) {
    ${CONNECTOR_STYLES}
  }
`;

const TitleButton = styled.button`
  align-items: center;
  display: flex;
  line-height: 1.4;
  width: 100%;
`;

const TitleIcon = styled.span`
  align-items: center;
  background-color: ${props =>
    props.expanded ? `${COLOURS.teal8}` : `${COLOURS.white}`};
  border: 2px solid
    ${props => (props.expanded ? `${COLOURS.teal8}` : `${COLOURS.teal4}`)};
  border-radius: 50%;
  color: ${props => (props.expanded ? `${COLOURS.white}` : `${COLOURS.black}`)};
  display: inline-flex;
  font-size: ${FONT_SIZES[5]};
  flex-shrink: 0;
  height: ${ICON_SIZE};
  justify-content: center;
  line-height: 1;
  margin-right: ${SPACING.base};
  transition: all 0.2s ease;
  width: ${ICON_SIZE};
`;

const AccordionItemTitle = ({ index, children }) => {
  const { expanded, onClick } = useContext(AccordionContext);

  return (
    <Title expanded={expanded}>
      <TitleButton
        aria-expanded={expanded ? 'true' : 'false'}
        onClick={onClick}
      >
        <TitleIcon expanded={expanded}>{index}</TitleIcon>
        {children}
      </TitleButton>
    </Title>
  );
};

AccordionItemTitle.propTypes = propTypes;

export default AccordionItemTitle;

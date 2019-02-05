import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './AccordionContext';
import styled from '@emotion/styled';
import { ICON_SIZE, CONNECTOR_STYLES } from './constants';
import { SPACING } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  as: PropTypes.string
};

const Body = styled.div`
  margin-bottom: 0;
  max-width: 75ch;
  padding-left: calc(${ICON_SIZE} + ${SPACING.base});
  padding-bottom: ${SPACING.base};
  position: relative;

  p {
    margin-bottom: 0;
  }

  &:not(:last-of-type) {
    ${CONNECTOR_STYLES}
  }
`;

const AccordionItemBody = ({ children, as }) => {
  const { expanded } = useContext(AccordionContext);

  return (
    <Body hidden={!expanded} as={as}>
      {children}
    </Body>
  );
};

AccordionItemBody.propTypes = propTypes;

export default AccordionItemBody;

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';
import Button from '../utils/Button/Button';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../utils/Accordion';
import { COLOURS, FONT_SIZES, SPACING, Z_INDEXES } from '../../styles/theme';

const propTypes = {
  items: PropTypes.exact({
    edges: PropTypes.arrayOf(
      PropTypes.exact({
        node: PropTypes.exact({
          id: PropTypes.string.isRequired,
          data: PropTypes.exact({
            order_position: PropTypes.number.isRequired,
            title: PropTypes.exact({
              text: PropTypes.string.isRequired
            }),
            description: PropTypes.exact({
              text: PropTypes.string.isRequired
            })
          })
        })
      })
    )
  }).isRequired
};

const ICON_SIZE = '3rem';
const CONNECTOR_STYLES = css`
  position: relative;
  z-index: ${Z_INDEXES.base};

  &:after {
    background-color: ${COLOURS.green8};
    content: '';
    display: inline-block;
    height: 100%;
    left: calc(${ICON_SIZE} / 2);
    position: absolute;
    top: 0;
    width: 2px;
    z-index: ${Z_INDEXES.beneath};
  }
`;

const Title = styled.h2`
  font-size: ${FONT_SIZES[4]};
  margin-bottom: 0;
  padding-bottom: ${props => (props.expanded ? '0' : `${SPACING.base}`)};

  &:not(:last-of-type) {
    ${CONNECTOR_STYLES}
  }
`;

const TitleButton = styled(Button)`
  align-items: center;
  display: flex;
  line-height: 1.4;
  width: 100%;
`;

const TitleIcon = styled.span`
  align-items: center;
  background-color: ${({ expanded }) =>
    expanded ? `${COLOURS.green8}` : `${COLOURS.gray0}`};
  border: 2px solid ${COLOURS.green8};
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

const Body = styled.div`
  margin-bottom: 0;
  max-width: 80ch;
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

const VerticalSteps = ({ items }) => (
  <Accordion>
    {items.edges.map(({ node }, i) => {
      const { data, id } = node;

      return (
        <AccordionItem key={id} expanded={i === 0}>
          <AccordionItemTitle index={data.order_position}>
            {({ expanded, onClick }) => (
              <Title expanded={expanded}>
                <TitleButton
                  id={`btn-accordion-title-${id}`}
                  aria-expanded={expanded ? 'true' : 'false'}
                  onClick={onClick}
                >
                  <TitleIcon expanded={expanded}>{i}</TitleIcon>
                  {data.title.text}
                </TitleButton>
              </Title>
            )}
          </AccordionItemTitle>
          <AccordionItemBody>
            {({ expanded }) => (
              <Body hidden={!expanded}>
                <p>{preventOrphanedWord(data.description.text)}</p>
              </Body>
            )}
          </AccordionItemBody>
        </AccordionItem>
      );
    })}
  </Accordion>
);

VerticalSteps.propTypes = propTypes;

export default VerticalSteps;

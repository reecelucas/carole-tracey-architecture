import React, { useEffect, useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../../components/utils/Accordion';
import Button from '../../components/utils/Button/Button';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';
import { COLOURS, FONT_SIZES, SPACING, Z_INDEXES } from '../../styles/theme';

const BORDER_WIDTH = '2px';
const ICON_SIZE = '1.5rem';
const CONNECTOR_STYLES = css`
  position: relative;
  z-index: ${Z_INDEXES.base};

  &:after {
    background-color: ${COLOURS.green6};
    content: '';
    display: inline-block;
    height: 100%;
    left: calc(${ICON_SIZE} / 2);
    position: absolute;
    top: ${BORDER_WIDTH};
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
  background-color: ${COLOURS.white};
  border: ${BORDER_WIDTH} solid ${COLOURS.green6};
  border-radius: 50%;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  height: ${ICON_SIZE};
  margin-right: ${SPACING.base};
  width: ${ICON_SIZE};

  &:before {
    background-color: ${COLOURS.base};
    border: 2px solid ${COLOURS.white};
    border-radius: 50%;
    content: '';
    display: ${({ expanded }) => (expanded ? 'inline-block' : 'none')};
    height: 100%;
    width: 100%;
  }
`;

const Body = styled.div`
  margin-bottom: 0;
  max-width: 85ch;
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

const Process = () => {
  const [canToggle, setCanToggle] = useState(false);

  useEffect(() => {
    setCanToggle(true);
  }, []);

  return (
    // The result of the graphql query is passed into the render prop as `data`
    <StaticQuery
      query={graphql`
        query ProcessQuery {
          allPrismicProcessBlock(
            sort: { fields: [data___order_position], order: ASC }
          ) {
            edges {
              node {
                id
                data {
                  order_position
                  title {
                    text
                  }
                  description {
                    text
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allPrismicProcessBlock }) => (
        <Wrapper>
          <h1>Process</h1>

          <Accordion>
            {allPrismicProcessBlock.edges.map(({ node }, i) => {
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
                          <TitleIcon expanded={expanded} />
                          {data.title.text}
                        </TitleButton>
                      </Title>
                    )}
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    {({ expanded }) => (
                      <Body hidden={canToggle && !expanded}>
                        <p>{preventOrphanedWord(data.description.text)}</p>
                      </Body>
                    )}
                  </AccordionItemBody>
                </AccordionItem>
              );
            })}
          </Accordion>
        </Wrapper>
      )}
    />
  );
};

export default Process;

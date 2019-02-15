import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Grid, GridItem } from '../../components/utils/Grid';
import Image from '../../components/utils/Image/Image';
import IntrinsicRatio from '../../components/utils/IntrinsicRatio/IntrinsicRatio';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import { BREAKPOINTS, COLOURS, SPACING, Z_INDEXES } from '../../styles/theme';

const xss = require('xss');

const BORDER_WIDTH = '12px';
const BORDER_OFFSET_TOP = '7.5%';
const BORDER_OFFSET_LEFT = '10%';
const TITLE_SPACING = `calc(10vmin + ${SPACING.huge})`;

const Title = styled.h1`
  max-width: 550px;
  margin-bottom: ${TITLE_SPACING};
`;

const ImageContainer = styled.div`
  margin-bottom: ${SPACING.base};

  @media (min-width: ${BREAKPOINTS.md}) {
    margin-left: ${BORDER_OFFSET_LEFT};
    margin-bottom: 0;
    position: relative;

    &:before,
    &:after {
      content: '';
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-${BORDER_OFFSET_LEFT}, ${BORDER_OFFSET_TOP});
      width: 100%;
      z-index: ${Z_INDEXES.beneath};
    }

    &:before {
      background-image: linear-gradient(
        to top,
        ${COLOURS.green8} 0%,
        ${COLOURS.green2} 100%
      );
    }

    &:after {
      background-color: ${COLOURS.white};
      background-clip: padding-box;
      border: ${BORDER_WIDTH} solid transparent;
    }
  }
`;

const CopyContainer = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    p {
      max-width: 90%;
    }
  }
`;

const Profile = () => (
  // The result of the graphql query is passed into the render prop as `data`
  <StaticQuery
    query={graphql`
      query ProfileQuery {
        allPrismicProfile {
          edges {
            node {
              data {
                title {
                  text
                }
                image {
                  alt
                  url
                }
                description {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={({ allPrismicProfile }) => {
      const { data } = allPrismicProfile.edges[0].node;

      return (
        <Wrapper gutter="0">
          <Wrapper>
            <Title>{data.title.text}</Title>
          </Wrapper>

          <Grid columns={2} gutter="0" from="md">
            <GridItem>
              <Wrapper>
                <ImageContainer>
                  <IntrinsicRatio>
                    <Image src={data.image.url} alt={data.image.alt || ''} />
                  </IntrinsicRatio>
                </ImageContainer>
              </Wrapper>
            </GridItem>

            <GridItem>
              <CopyContainer
                dangerouslySetInnerHTML={{ __html: xss(data.description.html) }}
              />
            </GridItem>
          </Grid>
        </Wrapper>
      );
    }}
  />
);

export default Profile;

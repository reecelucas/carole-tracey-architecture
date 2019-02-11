import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Grid, GridItem } from '../utils/Grid';
import IntrinsicRatio from '../utils/IntrinsicRatio/IntrinsicRatio';
import Image from '../utils/Image/Image';
import Wrapper from '../utils/Wrapper/Wrapper';
import { BREAKPOINTS, COLOURS, SPACING, Z_INDEXES } from '../../styles/theme';

const propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.exact({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  paragraphs: PropTypes.string.isRequired
};

const BORDER_WIDTH = '12px';
const BORDER_OFFSET_TOP = '7.5%';
const BORDER_OFFSET_LEFT = '10%';
const TITLE_SPACING = `calc(10vmin + ${SPACING.huge})`;

const Title = styled.h1`
  max-width: 600px;
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
        ${COLOURS.green8} 20%,
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

const Profile = ({ title, image, paragraphs }) => (
  <Wrapper gutter="0">
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>

    <Grid columns={2} gutter="0" from="md">
      <GridItem>
        <Wrapper>
          <ImageContainer>
            <IntrinsicRatio ratio="3:4">
              <Image src={image.url} alt={image.alt || ''} />
            </IntrinsicRatio>
          </ImageContainer>
        </Wrapper>
      </GridItem>

      <GridItem>
        <CopyContainer dangerouslySetInnerHTML={{ __html: paragraphs }} />
      </GridItem>
    </Grid>
  </Wrapper>
);

Profile.propTypes = propTypes;

export default Profile;

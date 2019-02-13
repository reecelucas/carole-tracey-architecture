import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import IntrinsicRatio from '../utils/IntrinsicRatio/IntrinsicRatio';
import Image from '../utils/Image/Image';
import { COLOURS, FONT_SIZES, SPACING } from '../../styles/theme';

const propTypes = {
  image: PropTypes.exact({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lazyload: PropTypes.bool
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${SPACING.huge};
`;

const Thumbnail = styled.div`
  flex-shrink: 0;
  margin-bottom: ${SPACING.base};
`;

const Title = styled.h3`
  font-size: ${FONT_SIZES[4]};
  margin-bottom: 0;

  &:after {
    background-color: ${COLOURS.green8};
    border-radius: 3px;
    content: '';
    display: block;
    height: 3px;
    margin-top: ${SPACING.tiny};
    margin-bottom: ${SPACING.base};
    width: 2em;
  }
`;

const Description = styled.p`
  margin: 0;
`;

const Card = ({ image, title, description, lazyload }) => (
  <Wrapper>
    <Thumbnail>
      <IntrinsicRatio ratio="4:3">
        <Image
          src={image.url}
          alt={image.alt}
          lazyLoad={lazyload}
          data-lazyload={lazyload ? 'true' : null}
        />
      </IntrinsicRatio>
    </Thumbnail>

    <Title>{title}</Title>
    <Description>{description}</Description>
  </Wrapper>
);

Card.propTypes = propTypes;

export default Card;

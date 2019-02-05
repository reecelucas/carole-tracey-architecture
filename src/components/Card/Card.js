import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import IntrinsicRatio from '../IntrinsicRatio/IntrinsicRatio';
import Image from '../Image/Image';
import { SPACING, FONT_SIZES } from '../../styles/theme';

const propTypes = {
  thumbnail: PropTypes.exact({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
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
  margin-bottom: ${SPACING.tiny};
`;

const Info = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
  }
`;

const Card = ({ thumbnail, title, description }) => (
  <Wrapper>
    <Thumbnail>
      <IntrinsicRatio ratio="4:3">
        <Image src={thumbnail.url} alt={thumbnail.alt} />
      </IntrinsicRatio>
    </Thumbnail>

    <Title>{title}</Title>
    <Info>
      <p>{description}</p>
    </Info>
  </Wrapper>
);

Card.propTypes = propTypes;

export default Card;

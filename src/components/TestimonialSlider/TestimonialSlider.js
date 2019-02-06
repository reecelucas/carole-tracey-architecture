import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import VisuallyHidden from '@reach/visually-hidden';
import Button from '../Button/Button';
import { Carousel, CarouselSlide } from '../utils/Carousel';
import Quote from '../Quote/Quote';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';
import { COLOURS, SPACING } from '../../styles/theme';

const propTypes = {
  testimonials: PropTypes.exact({
    edges: PropTypes.arrayOf(
      PropTypes.exact({
        node: PropTypes.exact({
          id: PropTypes.string.isRequired,
          data: PropTypes.exact({
            order_position: PropTypes.number.isRequired,
            quote: PropTypes.exact({
              text: PropTypes.string.isRequired
            }),
            attribution: PropTypes.exact({
              text: PropTypes.string.isRequired
            })
          })
        })
      })
    )
  }).isRequired
};

const buttonSize = '24px';
const buttonReset = css`
  background: none;
  padding: 0;

  &:hover,
  &:focus {
    background: none;
  }
`;

const CarouselSlides = styled.ul`
  margin-bottom: ${SPACING.large};
`;

const CarouselControls = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
`;

const CarouselControl = styled(Button)`
  ${buttonReset};
  border: 2px solid ${COLOURS.teal4};
  border-radius: 50%;
  flex-shrink: 0;
  height: ${buttonSize};
  position: relative;
  width: ${buttonSize};

  &:before {
    background-color: ${COLOURS.teal8};
    border-radius: 50%;
    content: '';
    display: inline-block;
    height: 80%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%)
      ${({ isActive }) => (isActive ? `scale3d(1, 1, 1)` : `scale3d(0, 0, 1)`)};
    transition: transform 0.15s cubic-bezier(0.55, 0, 0.1, 1);
    width: 80%;
  }

  &:not(:last-child) {
    margin-right: ${SPACING.small};
  }
`;

const TestimonialSlider = ({ testimonials }) => {
  let slideIds = [];

  return (
    <Carousel>
      {({ navigateToSlide, slideIndexes, activeSlideIndex }) => (
        <React.Fragment>
          <CarouselSlides>
            {testimonials.edges.map(({ node }, i) => {
              const { data, id } = node;
              slideIds.push(id);

              return (
                <CarouselSlide key={id} index={i} active={i === 0}>
                  {({ isActive }) =>
                    isActive && (
                      <li>
                        <Quote
                          quote={preventOrphanedWord(data.quote.text)}
                          attribution={data.attribution.text}
                        />
                      </li>
                    )
                  }
                </CarouselSlide>
              );
            })}
          </CarouselSlides>

          <CarouselControls>
            {slideIndexes.map(i => (
              <CarouselControl
                id={slideIds[i]}
                key={slideIds[i]}
                isActive={activeSlideIndex === i}
                onClick={() => navigateToSlide(i)}
                aria-label={`Navigate to slide ${i + 1}`}
              >
                <VisuallyHidden>Navigate to slide {i + 1}</VisuallyHidden>
              </CarouselControl>
            ))}
          </CarouselControls>
        </React.Fragment>
      )}
    </Carousel>
  );
};

TestimonialSlider.propTypes = propTypes;

export default TestimonialSlider;

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import VisuallyHidden from '../../components/utils/VisuallyHidden/VisuallyHidden';
import Button from '../../components/utils/Button/Button';
import { Carousel, CarouselSlide } from '../../components/utils/Carousel';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import Quote from '../../components/Quote/Quote';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';
import { COLOURS, SPACING } from '../../styles/theme';

const buttonSize = '24px';

const CarouselSlides = styled.ul`
  margin-bottom: ${SPACING.large};

  li {
    display: block;
  }

  li[aria-hidden='true'] {
    display: none;
  }
`;

const CarouselControls = styled.ul`
  align-items: flex-start;
  display: flex;
  justify-content: center;

  li {
    display: inline-block;
    line-height: 1;

    &:not(:last-child) {
      margin-right: ${SPACING.small};
    }
  }
`;

const CarouselControl = styled(Button)`
  border: 2px solid ${COLOURS.green6};
  border-radius: 50%;
  flex-shrink: 0;
  height: ${buttonSize};
  position: relative;
  width: ${buttonSize};

  &:before {
    background-color: ${COLOURS.base};
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
`;

const incIndex = index => index + 1;
const getSlideId = index => `testimonial-${incIndex(index)}`;

const Testimonials = () => (
  // The result of the graphql query is passed into the render prop as `data`
  <StaticQuery
    query={graphql`
      query TestimonialsQuery {
        allPrismicTestimonial(
          sort: { fields: [data___order_position], order: ASC }
        ) {
          edges {
            node {
              id
              data {
                order_position
                quote {
                  text
                }
                attribution {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={({ allPrismicTestimonial }) => (
      <Wrapper>
        <Carousel>
          {({ navigateToSlide, slideIndexes, activeSlideIndex }) => (
            <React.Fragment>
              <CarouselSlides>
                {allPrismicTestimonial.edges.map(({ node }, i) => {
                  const { data, id } = node;

                  return (
                    <CarouselSlide key={id} index={i}>
                      {({ isActive }) => (
                        <li
                          id={getSlideId(i)}
                          aria-hidden={isActive ? 'false' : 'true'}
                        >
                          <Quote
                            quote={preventOrphanedWord(data.quote.text)}
                            attribution={data.attribution.text}
                          />
                        </li>
                      )}
                    </CarouselSlide>
                  );
                })}
              </CarouselSlides>

              <CarouselControls>
                {slideIndexes.map(i => (
                  <li key={getSlideId(i)}>
                    <CarouselControl
                      id={`btn-${getSlideId(i)}`}
                      isActive={activeSlideIndex === i}
                      onClick={() => navigateToSlide(i)}
                      aria-controls={getSlideId(i)}
                    >
                      <VisuallyHidden>
                        Navigate to testimonial {incIndex(i)}
                      </VisuallyHidden>
                    </CarouselControl>
                  </li>
                ))}
              </CarouselControls>
            </React.Fragment>
          )}
        </Carousel>
      </Wrapper>
    )}
  />
);

export default Testimonials;

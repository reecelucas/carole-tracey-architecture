import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import preventOrphanedWord from '../helpers/preventOrphanedWord';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import SkipLink from '../components/SkipLink/SkipLink';
import Wrapper from '../components/Wrapper/Wrapper';
import { Grid, GridItem } from '../components/Grid';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../components/Accordion';
import Card from '../components/Card/Card';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import Footer from '../components/Footer/Footer';

const propTypes = {
  data: PropTypes.object.isRequired
};

const IndexPage = ({ data }) => {
  const {
    allPrismicServiceCard: services,
    allPrismicProcessBlock: processBlocks,
    allPrismicTestimonial: testimonials
  } = data;

  return (
    <Layout>
      <SkipLink />

      <main id="content">
        <Banner as="section" contrast>
          <Wrapper>
            <h1>Services</h1>

            <Grid columns={3} from="sm">
              {services.edges.map(({ node }) => {
                const { data, id } = node;

                return (
                  <GridItem key={id}>
                    <Card
                      thumbnail={data.image}
                      title={data.title.text}
                      description={preventOrphanedWord(data.description.text)}
                    />
                  </GridItem>
                );
              })}
            </Grid>
          </Wrapper>
        </Banner>

        <Banner as="section">
          <Wrapper>
            <TestimonialSlider testimonials={testimonials} />
          </Wrapper>
        </Banner>

        <Banner as="section" contrast>
          <Wrapper>
            <h1>Process</h1>

            <Accordion>
              {processBlocks.edges.map(({ node }, i) => {
                const { data, id } = node;

                return (
                  <AccordionItem key={id} expanded={i === 0}>
                    <AccordionItemTitle index={data.order_position}>
                      {data.title.text}
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <p>{preventOrphanedWord(data.description.text)}</p>
                    </AccordionItemBody>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </Wrapper>
        </Banner>
      </main>

      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allPrismicServiceCard(
      sort: { fields: [data___order_position], order: ASC }
    ) {
      edges {
        node {
          id
          data {
            order_position
            image {
              url
              alt
            }
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
`;

IndexPage.propTypes = propTypes;

export default IndexPage;

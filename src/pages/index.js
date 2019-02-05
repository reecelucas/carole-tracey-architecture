import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import preventOrphanedWord from '../helpers/preventOrphanedWord';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import { Grid, GridItem } from '../components/Grid';
import Wrapper from '../components/Wrapper/Wrapper';
import SkipLink from '../components/SkipLink/SkipLink';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../components/Accordion';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

const propTypes = {
  data: PropTypes.object.isRequired
};

const IndexPage = ({ data }) => {
  const {
    allPrismicServiceCard: services,
    allPrismicProcessBlock: processBlocks
  } = data;

  return (
    <Layout>
      <SkipLink />

      <main id="content">
        <Banner as="section" contrast>
          <Wrapper>
            <SectionHeading>Services</SectionHeading>

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
            <SectionHeading>Process</SectionHeading>

            <Accordion>
              {processBlocks.edges.map(({ node }, i) => {
                const { data, id } = node;

                return (
                  <AccordionItem key={id} expanded={i === 0}>
                    <AccordionItemTitle index={data.order_position}>
                      {data.title.text}
                    </AccordionItemTitle>
                    <AccordionItemBody>
                      <p>{data.description.text}</p>
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
    allPrismicTestimonial {
      edges {
        node {
          id
          data {
            quote {
              text
            }
            name {
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

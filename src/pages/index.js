import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import preventOrphanedWord from '../helpers/preventOrphanedWord';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import SkipLink from '../components/SkipLink/SkipLink';
import Wrapper from '../components/Wrapper/Wrapper';
import { Grid, GridItem } from '../components/Grid';
import ScrollSpy from '../components/ScrollSpy/ScrollSpy';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../components/Accordion';
import Card from '../components/Card/Card';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import Footer from '../components/Footer/Footer';

import Anchor from '../components/Anchor/Anchor';

const propTypes = {
  data: PropTypes.object.isRequired
};

const IndexPage = ({ data }) => {
  const sectionOne = React.createRef();
  const sectionTwo = React.createRef();
  const sectionThree = React.createRef();

  const {
    allPrismicServiceCard: services,
    allPrismicProcessBlock: processItems,
    allPrismicTestimonial: testimonials
  } = data;

  return (
    <Layout>
      <SkipLink />

      <ScrollSpy spyOn={[sectionOne, sectionTwo, sectionThree]}>
        {({ currentId }) => {
          console.log({ currentId });

          return (
            <nav
              style={{ position: 'fixed', top: '0', left: '0', width: '100%' }}
            >
              <Anchor id="#services" href="#services">
                Services
              </Anchor>
              <Anchor id="#process" href="#process">
                Process
              </Anchor>
              <Anchor id="#testimonials" href="#testimonials">
                Testimonials
              </Anchor>
            </nav>
          );
        }}
      </ScrollSpy>

      <main id="content">
        <Banner as="section" id="services" ref={sectionOne} contrast>
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

        <Banner id="testimonials" as="section" ref={sectionTwo}>
          <Wrapper>
            <TestimonialSlider testimonials={testimonials} />
          </Wrapper>
        </Banner>

        <Banner id="process" as="section" ref={sectionThree} contrast>
          <Wrapper>
            <h1>Process</h1>

            <Accordion>
              {processItems.edges.map(({ node }, i) => {
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

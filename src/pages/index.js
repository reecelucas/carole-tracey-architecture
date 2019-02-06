import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import preventOrphanedWord from '../helpers/preventOrphanedWord';

import Layout from '../components/Layout/Layout';
import Wrapper from '../components/utils/Wrapper/Wrapper';
import { Grid, GridItem } from '../components/utils/Grid';

import Banner from '../components/Banner/Banner';
import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Card from '../components/Card/Card';
import TestimonialSlider from '../components/TestimonialSlider/TestimonialSlider';
import VerticalSteps from '../components/VerticalSteps/VerticalSteps';
import Footer from '../components/Footer/Footer';

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
      <Header>
        <Nav spyOn={[sectionOne, sectionTwo, sectionThree]} />
      </Header>

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
            <VerticalSteps items={processItems} />
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

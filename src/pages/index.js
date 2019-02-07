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
  const sectionServices = React.createRef();
  const sectionTestimonials = React.createRef();
  const sectionProcess = React.createRef();
  const sectionContact = React.createRef();

  const {
    allPrismicServiceCard: services,
    allPrismicProcessBlock: processItems,
    allPrismicTestimonial: testimonials
  } = data;

  return (
    <Layout>
      <Header>
        <Nav
          items={[
            {
              id: 'cta-nav-services',
              label: 'Services',
              href: '#services',
              spyOn: sectionServices
            },
            {
              id: 'cta-nav-testimonials',
              label: 'Testimonials',
              href: '#testimonials',
              spyOn: sectionTestimonials
            },
            {
              id: 'cta-nav-process',
              label: 'Process',
              href: '#process',
              spyOn: sectionProcess
            },
            {
              id: 'cta-nav-contact',
              label: 'Contact',
              href: '#contact',
              spyOn: sectionContact
            }
          ]}
        />
      </Header>

      <main id="content">
        <Banner as="section" id="services" ref={sectionServices} contrast>
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

        <Banner id="testimonials" as="section" ref={sectionTestimonials}>
          <Wrapper>
            <TestimonialSlider testimonials={testimonials} />
          </Wrapper>
        </Banner>

        <Banner as="section" id="process" ref={sectionProcess} contrast>
          <Wrapper>
            <h1>Process</h1>
            <VerticalSteps items={processItems} />
          </Wrapper>
        </Banner>
      </main>

      <Footer id="contact" ref={sectionContact} />
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

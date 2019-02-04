import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import Wrapper from '../components/Wrapper/Wrapper';
import SkipLink from '../components/SkipLink/SkipLink';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from '../components/Accordion';
import Footer from '../components/Footer/Footer';

const propTypes = {
  data: PropTypes.object.isRequired
};

const IndexPage = ({ data }) => {
  const { allPrismicProjectCard: projects } = data;

  return (
    <Layout>
      <SkipLink />

      <main id="content">
        <Wrapper>
          <section>
            <h1>Process</h1>

            {projects.edges.map(({ node }) => {
              const { data } = node;

              return (
                <div key={data.title.text}>
                  <img src={data.image.url} alt={data.image.alt} />
                  <h2>{data.title.text}</h2>
                  <p>{data.description.text}</p>
                </div>
              );
            })}

            <Accordion>
              <AccordionItem expanded>
                <AccordionItemTitle index={1}>Title One</AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim inventore velit sint quod blanditiis, sapiente
                    voluptatibus, molestiae, dolore ipsam labore quaerat
                    veritatis fuga libero! Explicabo aperiam sapiente optio
                    consectetur placeat.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemTitle index={2}>Title Two</AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim inventore velit sint quod blanditiis, sapiente
                    voluptatibus, molestiae, dolore ipsam labore quaerat
                    veritatis fuga libero! Explicabo aperiam sapiente optio
                    consectetur placeat.
                  </p>
                </AccordionItemBody>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemTitle index={3}>Title Two</AccordionItemTitle>
                <AccordionItemBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim inventore velit sint quod blanditiis, sapiente
                    voluptatibus, molestiae, dolore ipsam labore quaerat
                    veritatis fuga libero! Explicabo aperiam sapiente optio
                    consectetur placeat.
                  </p>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </section>
        </Wrapper>
      </main>

      <Footer />
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allPrismicProjectCard {
      edges {
        node {
          data {
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
    allPrismicTestimonial {
      edges {
        node {
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

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Card from '../../components/Card/Card';
import { Grid, GridItem } from '../../components/utils/Grid';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';

const Services = () => (
  // The result of the graphql query is passed into the render prop as `data`
  <StaticQuery
    query={graphql`
      query ServicesQuery {
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
      }
    `}
    render={({ allPrismicServiceCard }) => (
      <Wrapper>
        <h1>Services</h1>

        <Grid columns={3} from="sm">
          {allPrismicServiceCard.edges.map(({ node }) => {
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
    )}
  />
);

export default Services;

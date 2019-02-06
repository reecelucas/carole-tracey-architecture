import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Wrapper from '../utils/Wrapper/Wrapper';

const Footer = () => (
  // The result of the graphql `query` is passed into the `render` prop as `data`
  <StaticQuery
    query={graphql`
      query FooterQuery {
        allPrismicFooter {
          edges {
            node {
              data {
                title {
                  text
                }
                bio {
                  text
                }
                phone {
                  url
                }
                email {
                  url
                }
                meta {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={({ allPrismicFooter }) => {
      const { title, bio, email, meta } = allPrismicFooter.edges[0].node.data;

      return (
        <footer key={title}>
          <Wrapper>
            <div>
              <Wrapper>
                <h2>{title.text}</h2>
                <p>{bio.text}</p>

                <a href={email.url} title="Send me an email">
                  Say Hello!
                </a>
              </Wrapper>
            </div>

            <div>
              <span>{meta.text}</span>
            </div>
          </Wrapper>
        </footer>
      );
    }}
  />
);

export default Footer;

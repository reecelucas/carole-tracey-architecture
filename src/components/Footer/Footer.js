import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Wrapper from '../utils/Wrapper/Wrapper';
import Anchor from '../utils/Anchor/Anchor';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';
import { BREAKPOINTS, COLOURS, FONT_SIZES, SPACING } from '../../styles/theme';

const StyledFooter = styled.footer`
  padding-top: ${SPACING.tiny};
  padding-bottom: ${SPACING.large};

  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: ${SPACING.base};
    padding-bottom: ${SPACING.huge};
  }
`;

const FooterBox = styled.div`
  align-items: center;
  border: 3px solid ${COLOURS.green8};
  display: flex;
  flex-direction: column;
  margin: ${SPACING.huge} 0;
  padding: ${SPACING.huge} 0;
  text-align: center;
`;

const FooterCopy = styled.p`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${SPACING.large};
  max-width: 60ch;
`;

const FooterBand = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: ${FONT_SIZES[7]};
  line-height: 2;

  @media (min-width: ${BREAKPOINTS.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

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
        <StyledFooter key={title}>
          <Wrapper>
            <FooterBox>
              <Wrapper>
                <h2>{title.text}</h2>
                <FooterCopy>{preventOrphanedWord(bio.text)}</FooterCopy>

                <Anchor
                  id="cta-footer-email"
                  href={email.url}
                  title="Send me an email"
                >
                  Say Hello!
                </Anchor>
              </Wrapper>
            </FooterBox>

            <FooterBand>
              <span>{preventOrphanedWord(meta.text)}</span>
              <span>&copy; {new Date().getFullYear()}, Carole Tracey</span>
            </FooterBand>
          </Wrapper>
        </StyledFooter>
      );
    }}
  />
);

export default Footer;

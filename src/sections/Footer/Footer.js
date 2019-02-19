import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import Wrapper from '../../components/utils/Wrapper/Wrapper';
import Image from '../../components/utils/Image/Image';
import preventOrphanedWord from '../../helpers/preventOrphanedWord';
import { LINK_STYLES } from '../../styles/global';
import { BREAKPOINTS, COLOURS, FONT_SIZES, SPACING } from '../../styles/theme';

import AECBLogo from '../../images/aecb-logo.png';
import ARBLogo from '../../images/arb-logo.png';

const xss = require('xss');

const StyledFooter = styled.footer`
  background-color: ${COLOURS.green0};
  padding-top: ${SPACING.tiny};
  padding-bottom: ${SPACING.large};

  @media (min-width: ${BREAKPOINTS.md}) {
    padding-top: ${SPACING.base};
    padding-bottom: ${SPACING.huge};
  }
`;

const FooterBox = styled.div`
  align-items: center;
  border: 3px solid ${COLOURS.green6};
  display: flex;
  flex-direction: column;
  margin: ${SPACING.huge} 0;
  padding: ${SPACING.huge} 0;
  text-align: center;
`;

const FooterCopy = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 60ch;

  a {
    ${LINK_STYLES}
  }
`;

const FooterBand = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: ${FONT_SIZES[7]};
  line-height: 2;
  margin-bottom: ${SPACING.base};

  @media (min-width: ${BREAKPOINTS.sm}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterLogos = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.sm}) {
    justify-content: flex-start;
  }
`;

const FooterLogo = styled(Image)`
  max-width: 80px;

  &:not(:last-child) {
    margin-right: ${SPACING.small};
  }
`;

const Footer = React.forwardRef(function Footer({ ...nativeAttributes }, ref) {
  return (
    // The result of the graphql query is passed into the render prop as `data`
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
                    html
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
        const { title, bio, meta } = allPrismicFooter.edges[0].node.data;

        return (
          <StyledFooter key={title} ref={ref} {...nativeAttributes}>
            <Wrapper>
              <FooterBox>
                <Wrapper>
                  <h2>{title.text}</h2>
                  <FooterCopy
                    dangerouslySetInnerHTML={{ __html: xss(bio.html) }}
                  />
                </Wrapper>
              </FooterBox>

              <FooterBand>
                <span>{preventOrphanedWord(meta.text)}</span>
                <span>&copy; {new Date().getFullYear()}, Carole Tracey</span>
              </FooterBand>

              <FooterLogos>
                <FooterLogo
                  src={AECBLogo}
                  alt="AECB. The Sustainable Building Association."
                />
                <FooterLogo
                  src={ARBLogo}
                  alt="ARB. Architects Registration Board."
                />
              </FooterLogos>
            </Wrapper>
          </StyledFooter>
        );
      }}
    />
  );
});

export default Footer;

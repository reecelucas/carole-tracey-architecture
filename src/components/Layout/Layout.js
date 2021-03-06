import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { Global } from '@emotion/core';
import lazily from 'lazily.js';
import {
  startErrorTracking,
  logErrorReport
} from '../../error-handling/error-handling';

import { GLOBAL_STYLES } from '../../styles/global';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

/**
 * This serves as a crude `:focus-visible` polyfill. When the
 * user tabs, we take this as an indication that they are
 * using the keyboard to navigate, so we preserve the default
 * focus outline styling.
 */
const onFirstTabPress = ({ key }) => {
  if (key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', onFirstTabPress);
  }
};

const Layout = ({ children }) => {
  useEffect(() => {
    const lazyLoader = lazily({
      selector: '[data-lazyload]',
      loadClass: 'has-loaded',
      errorClass: 'has-error',
      rootMargin: '0px 0px 200px 0px'
    });

    lazyLoader.init();
    window.addEventListener('error', logErrorReport);
    window.addEventListener('keydown', onFirstTabPress);

    startErrorTracking();

    return () => {
      lazyLoader.destroy();
      window.removeEventListener('error', logErrorReport);
      window.removeEventListener('keydown', onFirstTabPress);
    };
  }, []);

  return (
    // The result of the graphql query is passed into the render prop as `data`
    <StaticQuery
      query={graphql`
        query siteMetadata {
          site {
            siteMetadata {
              title
              description
              siteUrl
              socialImage
              webfonts {
                path
              }
            }
          }
        }
      `}
      render={data => {
        const { siteMetadata } = data.site;

        return (
          <React.Fragment>
            <Helmet>
              <title>{siteMetadata.title}</title>
              <meta name="description" content={siteMetadata.description} />
              <link rel="canonical" href={siteMetadata.siteUrl} />

              {siteMetadata.webfonts &&
                siteMetadata.webfonts.map(({ path }) => (
                  <link
                    key={path}
                    rel="preload"
                    href={path}
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                  />
                ))}

              <meta property="og:type" content="website" />
              <meta property="og:url" content={siteMetadata.siteUrl} />
              <meta property="og:title" content={siteMetadata.title} />
              <meta
                property="og:description"
                content={siteMetadata.description}
              />
              <meta
                property="og:image"
                content={`${siteMetadata.siteUrl}${siteMetadata.socialImage}`}
              />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:url" content={siteMetadata.siteUrl} />
              <meta name="twitter:title" content={siteMetadata.title} />
              <meta
                name="twitter:description"
                content={siteMetadata.description}
              />
              <meta
                name="twitter:image"
                content={`${siteMetadata.siteUrl}${siteMetadata.socialImage}`}
              />
            </Helmet>
            <Global styles={GLOBAL_STYLES} />
            {children}
          </React.Fragment>
        );
      }}
    />
  );
};

Layout.propTypes = propTypes;

export default Layout;

import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import getAttributeProps from '../../helpers/getAttributeProps';
import { css } from '@emotion/core';
import { captureInteraction } from '../../error-handling/error-handling';
import { COLOURS } from '../../styles/theme';

const propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  newTab: PropTypes.bool
};

const styles = css`
  border-bottom: 1px solid ${COLOURS.teal8};
  box-shadow: inset 0 -2px 0 0 ${COLOURS.teal8};
  hyphens: auto;
  overflow-wrap: break-word;
  position: relative;
  transition: all 0.1s ease;
  word-wrap: break-word;
  word-break: break-word;

  &:hover,
  &:active,
  &:focus {
    background-color: ${COLOURS.teal8};
    color: ${COLOURS.white};
  }
`;

const Anchor = ({ children, href, id, title, className, newTab, ...rest }) => {
  const sharedProps = {
    css: [styles, className],
    title: title || null,
    ...getAttributeProps(rest)
  };

  // Any internal link will start with one slash
  const internal = /^\/(?!\/)/.test(href);

  const renderExternalLink = () => (
    <a
      href={href}
      target={newTab ? '_blank' : null}
      rel={newTab ? 'noopener noreferrer' : null}
      {...sharedProps}
    >
      {children}
    </a>
  );

  const renderInternalLink = () => (
    // For interal links we record user interaction (for error tracking)
    <Link
      to={href}
      data-interaction-id={id}
      onClick={captureInteraction}
      {...sharedProps}
    >
      {children}
    </Link>
  );

  return internal ? renderInternalLink() : renderExternalLink();
};

Anchor.propTypes = propTypes;

export default Anchor;

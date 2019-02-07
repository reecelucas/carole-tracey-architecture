import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { captureInteraction } from '../../../error-handling/error-handling';

const propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  newTab: PropTypes.bool
};

const Anchor = ({ children, href, id, title, newTab, ...rest }) => {
  const sharedProps = {
    title: title || null,
    ...rest
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

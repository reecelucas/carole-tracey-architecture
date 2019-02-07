import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { captureInteraction } from '../../../error-handling/error-handling';
import getAttributeProps from '../../../helpers/getAttributeProps';

const propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClick: PropTypes.func,
  newTab: PropTypes.bool
};

const Anchor = ({ children, href, id, title, onClick, newTab, ...rest }) => {
  const sharedProps = {
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
      onClick={onClick}
      {...sharedProps}
    >
      {children}
    </a>
  );

  const renderInternalLink = () => (
    <Link
      to={href}
      data-interaction-id={id}
      onClick={e => {
        // For interal links we record user interaction for error tracking
        captureInteraction(e);
        onClick(e);
      }}
      {...sharedProps}
    >
      {children}
    </Link>
  );

  return internal ? renderInternalLink() : renderExternalLink();
};

Anchor.propTypes = propTypes;

export default Anchor;

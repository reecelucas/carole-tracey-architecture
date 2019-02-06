import React from 'react';
import PropTypes from 'prop-types';
import getAttributeProps from '../../helpers/getAttributeProps';
import styled from '@emotion/styled';
import { captureInteraction } from '../../error-handling/error-handling';
import { css } from '@emotion/core';
import { COLOURS, SPACING } from '../../styles/theme';

const propTypes = {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

const reset = css`
  appearance: none;
  background: none;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
`;

const StyledButton = styled.button`
  ${reset};
  align-items: center;
  background-color: ${COLOURS.teal8};
  color: ${COLOURS.white};
  display: inline-flex;
  font-weight: 600;
  line-height: 1;
  padding: ${SPACING.small} ${SPACING.base};

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const Button = ({ id, onClick, disabled, children, className, ...rest }) => {
  const attributes = getAttributeProps(rest);
  const clickHandler = event => {
    captureInteraction(event);
    onClick(event);
  };

  if (disabled) {
    attributes['aria-disabled'] = true;
    attributes.disabled = true;
  }

  return (
    <StyledButton
      type="button"
      onClick={clickHandler}
      className={className}
      data-interaction-id={id}
      {...attributes}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = propTypes;

export default Button;
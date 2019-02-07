import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { captureInteraction } from '../../../error-handling/error-handling';
import getAttributeProps from '../../../helpers/getAttributeProps';
import { BUTTON_STYLES } from '../../../styles/global';

const propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
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

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const StyledButton = styled.button`
  ${reset};
  ${props => BUTTON_STYLES[props.appearance]};
`;

const Button = ({ id, onClick, children, appearance, ...rest }) => {
  const clickHandler = event => {
    captureInteraction(event);
    onClick(event);
  };

  return (
    <StyledButton
      type="button"
      onClick={clickHandler}
      appearance={appearance}
      data-interaction-id={id}
      {...getAttributeProps(rest)}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = propTypes;

export default Button;
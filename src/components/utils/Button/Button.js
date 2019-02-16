import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { captureInteraction } from '../../../error-handling/error-handling';
import getAttributeProps from '../../../helpers/getAttributeProps';

const propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']),
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

const StyledButton = styled.button`
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

const Button = React.forwardRef(function Button(props, ref) {
  const { id, onClick, children, appearance, ...rest } = props;

  const onButtonClick = event => {
    captureInteraction(event);
    onClick(event);
  };

  return (
    <StyledButton
      onClick={onButtonClick}
      appearance={appearance}
      data-interaction-id={id}
      ref={ref}
      {...getAttributeProps(rest)}
    >
      {children}
    </StyledButton>
  );
});

Button.propTypes = propTypes;

export default Button;

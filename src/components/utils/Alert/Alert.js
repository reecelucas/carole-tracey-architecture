import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { SPACING, FONT_SIZES } from '../../../styles/theme';

import successIcon from '../../images/alert-icon--success.svg';
import warningIcon from '../../images/alert-icon--warning.svg';
import errorIcon from '../../images/alert-icon--error.svg';

const propTypes = {
  children: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
  className: PropTypes.string
};

const alertIconSize = '24px';
const themes = {
  success: {
    text: '#3c763d',
    bg: '#dff0d8',
    border: '#d6e9c6'
  },
  warning: {
    text: '#8a6d3b',
    bg: '#fcf8e3',
    border: '#faebcc'
  },
  error: {
    text: '#a94442',
    bg: '#f2dede',
    border: '#ebccd1'
  }
};

const themeIcons = {
  success: successIcon,
  warning: warningIcon,
  error: errorIcon
};

const Container = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => themes[theme].bg};
  border: ${({ theme }) => `1px solid ${themes[theme].border}`};
  border-radius: 2px;
  color: ${({ theme }) => themes[theme].text};
  display: flex;
  font-size: ${FONT_SIZES[6]};
  padding: ${SPACING.small};

  &:before {
    content: '';
    background-color: transparent;
    background-image: ${({ theme }) => `url(${themeIcons[theme]})`};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: inline-block;
    flex-shrink: 0;
    height: ${alertIconSize};
    margin-right: ${SPACING.small};
    width: ${alertIconSize};
  }
`;

const CloseButton = styled.button`
  align-self: center;
  color: currentColor;
  font-size: ${FONT_SIZES[6]};
  font-weight: 600;
  margin-left: auto;
  text-transform: uppercase;
`;

const Alert = ({ children, theme, className }) => {
  const [show, setShow] = useState(true);

  const dismiss = () => {
    setShow(false);
  };

  const renderAlert = () => (
    <Container
      className={className}
      theme={theme}
      role="alert"
      aria-live="assertive"
    >
      {children}
      <CloseButton onClick={dismiss}>Dismiss</CloseButton>
    </Container>
  );

  return show ? renderAlert() : null;
};

Alert.propTypes = propTypes;

export default Alert;

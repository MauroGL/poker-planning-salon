import React from 'react';
import styled from 'styled-components';

const DefaultButton = ({ children, onClick = () => {} }) => {
  return (
    <button
      className={'w3-btn w3-border w3-text-white'}
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
};

export default DefaultButton;

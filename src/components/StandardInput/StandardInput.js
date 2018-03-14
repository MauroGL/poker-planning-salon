import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  color: grey;
  margin: 10px 0;
`;

const StandardInput = ({ onChange, userName }) => {
  return (
    <Input
      className={'w3-input'}
      type={'text'}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      defaultValue={userName}
    />
  );
};

StandardInput.propTypes = {
  onChange: PropTypes.func,
  userName: PropTypes.string
};

export default StandardInput;

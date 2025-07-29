import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;

  label {
    margin-top: 0.5rem;
    padding: 0.5rem 0;
    font-weight: 500;
    color: #0d1b2a;
    background-color: transparent;
  }

  input {
    padding: 0.5rem 0;
    margin-top: 0.2rem;
    border: 1px solid transparent;
    background-color: transparent;
  }
`;

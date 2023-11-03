import styled from 'styled-components';

export const TextArea = styled.textarea`
  padding: 15px 20px;
  border-radius: 15px;
  background: #f9f9f9;
  width: 100%;
  outline: none;
  border: 0;
  font-family: 'Poppins', sans-serif;
  resize: none;
  height: 30vh;
  margin: 14px 0px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

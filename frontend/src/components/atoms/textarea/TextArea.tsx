import styled from 'styled-components';

export const TextArea = styled.textarea`
  background: rgba(196, 196, 196, 0.1);
  padding: 10px;
  width: 100%;
  outline: none;
  color: white;
  border: 0;
  font-family: 'Poppins', sans-serif;
  resize: none;
  height: 30vh;
  margin: 10px 0px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

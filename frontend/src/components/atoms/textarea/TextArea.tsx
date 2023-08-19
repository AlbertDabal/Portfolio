import styled from 'styled-components';

export const TextArea = styled.textarea`
  padding: 15px 20px;
  border-radius: 15px;
  background: #f5f5f7;
  width: 100%;
  outline: none;
  border: 0;
  font-family: 'Poppins', sans-serif;
  resize: none;
  height: 30vh;
  margin: 10px 0px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

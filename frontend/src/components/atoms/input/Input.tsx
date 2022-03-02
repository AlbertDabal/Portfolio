import styled from 'styled-components';

export const Input = styled.input`
  background: rgba(196, 196, 196, 0.1);
  padding: 10px;
  width: 100%;
  outline: none;
  color: white;
  border: 0;
  font-family: 'Poppins', sans-serif;
  margin: 10px 0px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 15px;
  padding: 15px 20px;
  background: #f5f5f7;
  width: 70%;
  outline: none;
  border: 0;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

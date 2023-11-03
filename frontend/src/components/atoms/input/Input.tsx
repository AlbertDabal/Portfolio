import styled from 'styled-components';

export const Input = styled.input`
  border-radius: 15px;
  padding: 15px 20px;
  width: 100%;
  outline: none;
  border: 1px solid #ececec;
  font-family: 'Poppins', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 14px;
`;

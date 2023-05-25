import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 2px solid #edeff1;
  background-color: #f9fbfc;
  justify-items: space-between;
  border-radius: 10px;
  height: 50px;
  width: ${({ width }) => width || "50px"};
  align-items: center;
  padding: 10px;
    &:focus,
    &:active{
      color:red;
    }
  input {
  }
  img {
    display: flex;
    width: 30px;
    width: 30px;
    align-self: end;
  }
  @media (max-width: 800px) {
    width: 100vw;
      img{
        display:none;
      }
  }
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  justify-self: center;
  background-color: #f9fbfc;
  font-size: 20px;
  color: #1b284a;
  font-weight: bold;
  width: ${({ inputWidth }) => inputWidth || "50px"};
  text-align: center;
  @media (max-width: 767px) {
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  /* width: 80vw; */
  height: 70vh;
  /* background: orange; */

  @media (max-width: 1025px) {
    width:100vw;
    margin-bottom: 50px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
`;
export const Label = styled.label`
  font-size: 20px;
  color: #1b284a;
  font-weight: bold;
`;

export const EditButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f62f5;
  font-size: 5;
  p {
    margin-left: 5px;
  }
  :hover {
    text-decoration: underline;
  }
`;

export const Description = styled.p`
  font-weight: bold;
  font-size: 15px;
  color: #a0a7b7;
`;

export const Input = styled.input`
  border: 2px solid #edeff1;
  border-radius: 5px;
  height: 50px;
  width: ${({ width }) => width};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items:flex-start;
  }
`;

export const InnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 200px;
  p {
    font-size: 20px;
    color: #1b284a;
    font-weight: bold;
    margin-left: 0px 20px;
    /* background: purple; */
    width: 30px;
    text-align: center;
  }
`;
export const LabelContainer = styled.div`
  /* margin-top: 20px; */
`;

export const Button = styled.button`
  border: none;
  background: #0f62f5;
  width: 99%;
  height: 50px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  margin-top: 55px;
  &:hover {
    opacity: 0.9;
  }
`;

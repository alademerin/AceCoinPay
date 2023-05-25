import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: white;
  height: 70vh;
  width: 80vw;
  padding: 50px 30px;
  @media (max-width: 1025px) {
    flex-direction: column;
    height:100vh;
    width:100vw;
    padding-left:0;
    padding-bottom:100px;
    /* overflow: scroll; */
  }
`;

export const FormContainer = styled.div`
  width: 60%;
  margin-right: 20px;
  @media (max-width: 1025px) {
    padding:20px;
    width: 98vw;
    height:40vh;
  }
  @media (max-width: 768px) {
    width: 100vw;
    height:100vh;
  }
`;
export const ReceiptContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  position:relative;
  padding-left:50px;

  @media (max-width: 1025px) {
    width: 100%;
    margin-top:150px;
  }
`;

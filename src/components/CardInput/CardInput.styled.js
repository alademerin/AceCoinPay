import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border: 2px solid #edeff1;
  background-color: #f9fbfc;
  border-radius: 10px;
  height: 50px;
  justify-content: space-between;
  max-width: ${({ width }) => width};
  align-items: center;
  padding: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
  p {
    margin-left: 20px;
    color: #a0a7b7;
    /* background: orange; */
    width: 400px;
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const CardLogo = styled.img`
  width: 30px;
  height: 30px;
`;

export const VerificationLogo = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 50px;
`;

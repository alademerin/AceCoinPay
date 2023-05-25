import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1025px) {
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 10px;
    /* margin-right: 20px; */
    font-size: 30px;
    color: #1e2c4e;
  }
`;

export const IconCircle = styled.div`
  background: #0f62f5;
  height: 40px;
  width: 40px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 2px; */

  img {
    width: 30px;
    height: 30px;
    transform: rotate(-30deg);
  }
`;

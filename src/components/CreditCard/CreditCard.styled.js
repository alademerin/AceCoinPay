import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  width: 200px;
  height: 250px;
  padding: 20px 5px;
  border-radius: 10px;
  opacity: 0.8;
  position: absolute;
  z-index: 1;
  transform: translateX(25%);
  border: 1px solid black;
    
  @media (max-width: 1025px) {
    top:-50px;
  left:50%;
  transform:translate(-50%)
`;

export const CardChipContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
`;
export const CardChipImg = styled.img`
  width: 30px;
  height: 35px;
`;
export const WifiImg = styled.img`
  width: 30px;
  height: 35px;
`;

export const UserDetailsContainer = styled.div`
  margin-top: 80px;
  margin-left: 20px;
`;

export const UserName = styled.p`
  color: #1e2c4e;
`;

export const CardNumber = styled.p`
  font-size: 20px;
  color: #1e2c4e;
  font-weight: bold;
  margin: 0;
`;

export const ExpiryDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  p {
    font-size: 15px;
    font-weight: bold;
    color: #1e2c4e;
  }
`;

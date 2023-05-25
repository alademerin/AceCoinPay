import styled from "styled-components";

export const Receipt = styled.div`
  background: #eff5f9;
  width: 300px;
  height: 450px;
  border-radius: 10px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-top: 300px;
  margin-top: 65px;
 @media(max-width:1025px) {
    /* background:red; */
    width:100vw;
    margin-top:0;
  }
`;

export const ReceiptRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  /* background: red; */
`;

export const Detail = styled.p`
  font-size: 15px;
  color: #868ea1;
`;

export const Value = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #1e2c4e;
  margin-left: 10px;
`;

export const Border = styled.hr`
outline:none;
  border-top: 3px dashed #868ea1;
  height: 5px;
  width: 100%;
`;
export const Container = styled.div`
  position relative;
`;

export const Bold = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #1e2c4e;
`;

export const Currency = styled.span`
  font-size: 21px;
  color: #868ea1;
`;

export const BorderRow = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #1e2c4e;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 12px;
    height: 12px;
  }
`;
export const LeftTicketArc = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  position: absolute;
  transform: translate(-110%);
  margin-right: 20px;
`;
export const RightTicketArc = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  position: absolute;
  /* right:0 */
  transform: translate(260px);
  margin-right: 20px;
  @media(max-width:1025px){
  right:0;
  transform: translateX(200%);
  }
`;

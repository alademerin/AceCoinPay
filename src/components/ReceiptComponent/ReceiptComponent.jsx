import React from "react";
import CreditCard from "../CreditCard/CreditCard";
import {
  Bold,
  Border,
  BorderRow,
  Container,
  Currency,
  Detail,
  LeftTicketArc,
  LogoContainer,
  Receipt,
  ReceiptRow,
  RightTicketArc,
  TicketArc,
  Value,
} from "./ReciptComponent.styled";
import ReceiptIcon from "../../assets/receipt icon.svg";
import AppleIcon from "../../assets/apple-14.svg";
const ReceiptComponent = () => {
  return (
    <Container>
      <CreditCard />
      <Receipt>
        <ReceiptRow>
          <Detail>Company</Detail>
          <div style={{ display: "flex", alignItems: "center" }}>
            <LogoContainer>
              <img src={AppleIcon} alt="itemLogo" />
            </LogoContainer>
            <Value>Macbook Air</Value>
          </div>
        </ReceiptRow>{" "}
        <ReceiptRow>
          <Detail>Order Number</Detail>
          <Value>1266201</Value>
        </ReceiptRow>
        <ReceiptRow>
          <Detail>Product</Detail>
          <Value>Apple</Value>
        </ReceiptRow>
        <ReceiptRow>
          <Detail>VAT(20%)</Detail>
          <Value>$100.00</Value>
        </ReceiptRow>
        <BorderRow>
          <LeftTicketArc />
          <Border />
          <RightTicketArc />
        </BorderRow>
        <ReceiptRow>
          <div>
            <Detail>You have to pay</Detail>
            <p>
              <Bold>549</Bold>.99 <Currency>USD</Currency>
            </p>
          </div>
          <img src={ReceiptIcon} style={{ width: "30px", height: "30px" }} />
        </ReceiptRow>
      </Receipt>
    </Container>
  );
};

export default ReceiptComponent;

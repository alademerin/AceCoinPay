import React from "react";
import { Container, IconCircle, IconContainer } from "./Logo.styled";
import CreditCard from "../../assets/CardImage.svg";
const Logo = () => {
  return (
    <Container>
      <IconContainer>
        <IconCircle>
          <img src={CreditCard} />
        </IconCircle>
        <p>
          <strong>AceCoin</strong>Pay
        </p>
      </IconContainer>
    </Container>
  );
};

export default Logo;

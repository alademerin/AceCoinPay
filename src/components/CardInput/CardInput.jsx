import React from "react";
import { CardLogo, Container, VerificationLogo } from "./CardInput.styled";
import MasterCardImg from "../../assets/Mastercard-Logo.svg";
import VerifiedIcon from "../../assets/Verified-Icon.svg";
const CardInput = ({ width }) => {
  return (
    <Container width={width}>
      <CardLogo src={MasterCardImg} />
      <p>2412 - 7512 - 3412 - 3456</p>
      <VerificationLogo src={VerifiedIcon} />
    </Container>
  );
};

export default CardInput;

import React from "react";
import {
  CardChipContainer,
  CardChipImg,
  CardNumber,
  Container,
  ExpiryDateContainer,
  UserDetailsContainer,
  UserName,
} from "./CreditCard.styled";
import CardChip from "../../assets/CardChip.svg";
import WifiImg from "../../assets/wifi-svgrepo-com.svg";
import MasterCardLogo from "../../assets/mastercard-logo-2.svg";

const CreditCard = () => {
  return (
    <Container>
      <CardChipContainer>
        <CardChipImg src={CardChip} />
        <CardChipImg src={WifiImg} />
      </CardChipContainer>

      <UserDetailsContainer>
        <UserName>Jonathan Michael</UserName>
        <CardNumber>•••• 3456</CardNumber>
      </UserDetailsContainer>

      <ExpiryDateContainer>
        <p>09/22</p>
        <img src={MasterCardLogo} style={{ width: "40px", height: "40px" }} />
      </ExpiryDateContainer>
    </Container>
  );
};

export default CreditCard;

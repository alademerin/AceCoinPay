import React from "react";
import Logo from "../Logo/Logo";
import { Container } from "./Header.styled";
import TimeComponent from '../TimeComponent/TimeComponent'

const Header = () => {
  return (
    <Container>
      <Logo />
      <TimeComponent />
    </Container>
  );
};

export default Header;

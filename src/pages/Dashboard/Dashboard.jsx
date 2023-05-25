import React from "react";
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import ReceiptComponent from "../../components/ReceiptComponent/ReceiptComponent";
import { Container, FormContainer, ReceiptContainer } from "./Dashboard.styled";

const Dashboard = () => {
  return (
    <Container>
      <FormContainer>
        <Header />
        <Form />
      </FormContainer>
      <ReceiptContainer>
        <ReceiptComponent />
      </ReceiptContainer>
    </Container>
  );
};

export default Dashboard;

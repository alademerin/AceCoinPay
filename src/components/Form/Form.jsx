import { useState } from "react";
import CardInput from "../CardInput/CardInput";
import FormInput from "../FormInput/FormInput";
import {
  Button,
  Container,
  Description,
  EditButton,
  InnerRow,
  Label,
  LabelContainer,
  Row,
  FormContainer,
} from "./Form.styled";
import { HiPencil } from "react-icons/hi";

const Form = () => {

  const [cvv, setCvv] = useState('327')
  const [expiryMonth, setExpiryMonth] = useState('09')
  const [expiryYear, setExpiryYear] = useState('22')
  const [password, setPassword] = useState('password')

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleExpiryMonthChange = (event) => {
    setExpiryMonth(event.target.value);
  };

  const handleExpiryYearChange = (event) => {
    setExpiryYear(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Container>
      <FormContainer>
        <Row>
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Description>Enter the 16-digit card number on the card</Description>
          </div>
          <EditButton>
            <HiPencil />
            <p>Edit</p>
          </EditButton>
        </Row>
        <CardInput width="100%" />
        <Row>
          <LabelContainer>
            <Label htmlFor="cvvNumber">CVV Number</Label>
            <Description>Enter the 3 or 4 digit number on the card</Description>
          </LabelContainer>
          <FormInput width="200px" img maxLength={4} inputWidth="145px" value={cvv} handleTextInputChange={handleCvvChange}/>
        </Row>
        <Row>
          <LabelContainer>
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Description>Enter the expiration date of the card</Description>
          </LabelContainer>
          <InnerRow>
            <FormInput width="85px" maxLength={2} inputWidth="70px" value={expiryMonth} handleTextInputChange={handleExpiryMonthChange}/>
            <p> / </p>
            <FormInput width="85px" maxLength={2} inputWidth="70px" value={expiryYear} handleTextInputChange={handleExpiryYearChange}/>
          </InnerRow>
        </Row>
        <Row>
          <LabelContainer>
            <Label htmlFor="password">Password</Label>
            <Description>Enter dynamic password</Description>
          </LabelContainer>
          <FormInput width="200px" img type="password" inputWidth="145px"value={password} handleTextInputChange={handlePasswordChange}/>
        </Row>

        <Button>Pay Now</Button>
      </FormContainer>
    </Container>
  );
};

export default Form;

import { Container, InputField } from "./FormInput.styled";
import GridIcon from "../../assets/grid-icon.svg";

const FormInput = ({ img, width, type, maxLength, inputWidth ,value, handleTextInputChange}) => {
  return (
    
    <Container width={width}>
      <div>
        <InputField type={type} maxLength={maxLength} inputWidth={inputWidth} value={value} onChange={handleTextInputChange}/>
      </div>
      <div>{img && <img src={GridIcon} />}</div>
    </Container>
  );
};

export default FormInput;

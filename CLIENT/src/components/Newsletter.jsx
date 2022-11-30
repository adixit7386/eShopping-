import Styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import { mobile } from "../responsive.js";

const Container = Styled.div`
height:60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;
const Title = Styled.h1`
font-size:70px;
margin-bottom:20px;
`;
const Description = Styled.div`
font-size:24px;
font-weight:300;
margin-bottom:20px;
${mobile({ textAlign: "center" })}`;
const InputContainer = Styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
padding-left:20px;
${mobile({ width: "80%" })}`;
const Input = Styled.input`
border:none;
flex:8;
`;
const Button = Styled.button`
flex:1;
border:none;
background-color:teal;
color:white;`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your favourite Products.</Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;

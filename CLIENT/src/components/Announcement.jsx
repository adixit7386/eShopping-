import Styled from "styled-components";
const Container = Styled.div`
height:30px;
background-color:teal;
color:white;
display :flex; 
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500`;
const Announcement = () => {
  return <Container>50% off on all the clothes! hurry!!!</Container>;
};

export default Announcement;

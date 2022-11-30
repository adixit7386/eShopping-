import Styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import { mobile } from "../responsive.js";
import { Link } from "react-router-dom";

const Container = Styled.div`
display:flex;
${mobile({ flexDirection: "column" })}`;
const Left = Styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;`;
const Center = Styled.div`
flex:1;
padding:20px;
${mobile({ display: "none" })}`;
const Right = Styled.div`
flex:1;
padding:20px;
${mobile({ backgroundColor: "#eee" })}`;

const Logo = Styled.h1``;
const Description = Styled.p`
margin:20px 0px;`;
const SocialContainer = Styled.div`
display:flex;`;
const SocialIcon = Styled.div`
height:40px;
width:40px;
border-radius:50%;
color:white;
background-color:#${(props) => props.color};
display:flex;
align-items:center;
justify-content:center;
margin:10px;
`;

const Title = Styled.h3`
margin-bottom:30px;`;
const List = Styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;`;
const ListItem = Styled.li`
width:50%;
margin-bottom:10px;`;

const ContactItem = Styled.div`
display:flex;
margin-bottom:20px;
align-items:center;`;

const Payment = Styled.img`
width:50px;
height:30px;
margin-right:10px;`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Shop.</Logo>
        <Description>
          You might have come across many e-Shopping sites around but this one
          is different. It is known for high quality products as well as safely
          delivery of products within the time.
        </Description>
        <SocialContainer>
          <a href="https://facebook.com">
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
          </a>
          <a href="https://instagram.com">
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
          </a>
          <a href="https://twitter.com">
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wish List</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          SRM IST ,Potheri, Chennai
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +91 5676867232
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} />
          srmist.edu@gmail.com
        </ContactItem>

        <Payment src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png?20140711182052" />
        <Payment src="https://logos-world.net/wp-content/uploads/2020/05/Visa-Logo-700x394.png" />
        <Payment src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/800px-Rupay-Logo.png?20200811062726" />
      </Right>
    </Container>
  );
};

export default Footer;

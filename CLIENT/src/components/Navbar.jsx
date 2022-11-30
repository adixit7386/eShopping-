import React, { useState } from "react";
import Styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = Styled.div`
height :60px;
${mobile({ height: "50px" })}
`;
const Wrapper = Styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({ padding: "10px 0px" })}
`;

const Left = Styled.div`
flex:1;
display:flex;
align-items:center;`;
const Center = Styled.div`
flex:1;
text-align:left;
padding-left:10px;`;
const Right = Styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({ justifyContent: "center", flex: "2" })};
`;

// const Language = Styled.span`
// font-size:14px;
// cursor:pointer;
// ${mobile({ display: "none" })};

// `;
const SearchContainer = Styled.div`
flex:1;
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:2px;


`;

const Input = Styled.input`
border:none;
flex:8;
height:30px;

${mobile({ width: "50px" })}
`;
const Logo = Styled.h1`
font-weight:bold;


${mobile({ fontSize: "24px" })}`;

const MenuItem = Styled.div`
font-size:14px;
cursor:pointer;
margin-right:25px;

${mobile({ fontSize: "12px", marginRight: "10px" })}
`;

const Navbar = () => {
  const [categories, setCategories] = useState("");
  const [link, setLink] = useState("");
  const quantity = useSelector((state) => state.cart.quantity);
  const handleChange = (e) => {
    setCategories(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setLink(categories);
  };
  console.log(quantity);
  return (
    <div>
      <Container>
        <Wrapper>
          <Center>
            <Logo>eShopping</Logo>
          </Center>
          <Left>
            <SearchContainer>
              <Input onChange={handleChange} placeholder="Search"></Input>
              <Link to={`/products/${link}`}>
                <SearchIcon
                  onClick={handleClick}
                  style={{
                    color: "gray",
                    fontSize: "16px",
                    flex: "1",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </SearchContainer>
          </Left>
          <Right>
            <Link to="/login">
              <MenuItem>Register</MenuItem>
            </Link>
            <Link to="/login">
              <MenuItem>Sign In</MenuItem>
            </Link>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
              </Badge>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;

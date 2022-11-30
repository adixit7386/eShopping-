import React from "react";
import Styled from "styled-components";
import { mobile } from "../responsive.js";
import { Link } from "react-router-dom";

const Container = Styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;`;
const Image = Styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({ height: "30vh" })}`;
const Info = Styled.div`
position:absolute;
top:0;
left:0;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
width:100%;
height:100%;`;
const Title = Styled.h1`
color:white;
margin-bottom:20px`;
const Button = Styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;`;

const CategoryItems = ({ item }) => {
  console.log(item.category);
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop Now</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItems;

import React from "react";
import Styled from "styled-components";
import { categories } from "../data.js";
import CategoryItem from "../components/CategoryItems";
import { mobile } from "../responsive.js";
const Container = Styled.div`
display:flex;
padding:20px;
justify-content:space-between;
${mobile({ flexDirection: "column", padding: "none" })}`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;

import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Header from "./Header";

function Home() {
  return (
    <>
      <Container>
        <Header />
        <Section
          title="Model S"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          arrow="true"
        />
        <Section
          title="Model Y"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          arrow="true"
        />
        <Section
          title="Model 3"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          arrow="true"
        />
        <Section
          title="Model X"
          description="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
          arrow="true"
        />

        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnText="Order Now"
          rightBtnText="Learn More"
          arrow="true"
        />

        <Section
          title="Accesories"
          description=""
          backgroundImg="accessories.jpg"
          leftBtnText="Shop Now"
        />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;

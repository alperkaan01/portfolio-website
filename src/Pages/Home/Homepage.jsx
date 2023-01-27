import React from "react";
import {
  Container,
  Github,
  InnerStyleContainer,
  LinkedIn,
  PortfolioMainImage,
} from "./HomepageElements";
import c_img from "../../img/s.png";
import avatar from "../../img/avatar.png";
import tl from "../../img/tl.png";

const Homepage = () => {
  return (
    <Container>
      <img
        src={c_img}
        alt="comp"
        style={{ position: "fixed", width: "56rem", left: "19%", top: "10%" }}
      ></img>
      <InnerStyleContainer></InnerStyleContainer>
      <PortfolioMainImage></PortfolioMainImage>
      <img
        src={avatar}
        alt="avatar"
        style={{
          position: "fixed",
          left: "54rem",
          top: "12.7rem",
          width: "13rem",
        }}
      ></img>

      <img
        src={tl}
        alt="avatar"
        style={{
          position: "fixed",
          left: "46px",
          top: "30px",
          width: "2rem"
        }}
      ></img>
    </Container>
  );
};

export default Homepage;

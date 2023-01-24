import React, { useState } from "react";

import { SocialIcon } from "react-social-icons";

import {
  Container,
  Github,
  InfoSectionContainer,
  InnerStyleContainer,
  InnerStyleContainerSocial,
  InnerTitle,
  LinkedIn,
  RadioButtons,
  Twitter,
} from "./HomepageElements";
import { PortfolioMainImage } from "./HomepageElements";

import portfolioImage from "../../img/portfolio.png";

import { Button } from "reactstrap";

const Homepage = () => {
  const [rSelected, setRSelected] = useState(null);

  return (
    <Container>
      <InnerStyleContainer></InnerStyleContainer>
      <InnerStyleContainerSocial></InnerStyleContainerSocial>
      <InnerTitle>
        Welcome To the <br />{" "}
        <span style={{ color: "#674188", textDecoration: "underline" }}>
          Dev
        </span>{" "}
        Portal
      </InnerTitle>
      <InfoSectionContainer></InfoSectionContainer>

      <Github url="https://github.com/alperkaan01"></Github>
      <LinkedIn url="https://www.linkedin.com/in/alper-kaan-odaba%C5%9Fo%C4%9Flu-90919b195/"></LinkedIn>
      <Twitter url="https://twitter.com/AlperKa46377607"></Twitter>

      <RadioButtons>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(1)}
          active={rSelected === 1}
        >
          Radio 1
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(2)}
          active={rSelected === 2}
        >
          Radio 2
        </Button>
        <Button
          color="primary"
          outline
          onClick={() => setRSelected(3)}
          active={rSelected === 3}
        >
          Radio 3
        </Button>
      </RadioButtons>

      <PortfolioMainImage
        src={portfolioImage}
        alt="portfolio Image"
      ></PortfolioMainImage>
    </Container>
  );
};

export default Homepage;

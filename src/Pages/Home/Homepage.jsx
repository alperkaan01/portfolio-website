import React from "react";

import { SocialIcon } from 'react-social-icons';

import { Container, Github, InfoSectionContainer, InnerStyleContainer, InnerStyleContainerSocial, InnerTitle, LinkedIn, Twitter } from "./HomepageElements";
import { PortfolioMainImage } from "./HomepageElements";

import portfolioImage from "../../img/portfolio.png";

const Homepage = () => {
  return (
    <Container>
      <InnerStyleContainer></InnerStyleContainer>
      <InnerStyleContainerSocial></InnerStyleContainerSocial>
      <InnerTitle>Welcome To the <br /> <span style={{color: "#674188", textDecoration: "underline"}}>Dev</span> Portal</InnerTitle>
      <InfoSectionContainer></InfoSectionContainer>

      <Github url="https://github.com/alperkaan01"></Github>
      <LinkedIn url="https://www.linkedin.com/in/alper-kaan-odaba%C5%9Fo%C4%9Flu-90919b195/"></LinkedIn>
      <Twitter url="https://twitter.com/AlperKa46377607"></Twitter>

      <PortfolioMainImage
        src={portfolioImage}
        alt="portfolio Image"
      ></PortfolioMainImage>
    </Container>
  );
};

export default Homepage;

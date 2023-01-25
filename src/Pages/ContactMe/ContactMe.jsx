import React from "react";
import { Container, Github, InnerStyleContainer, InnerStyleContainerSocial, LinkedIn, PortfolioMainImage, Twitter } from "../Home/HomepageElements";

import portfolioImage from "../../img/portfolio.png";
import { ComingSoon } from "../Projects/ProjectsElements";

const ContactMe = () => {
  return (
    <Container>
        <InnerStyleContainer>
        <InnerStyleContainerSocial></InnerStyleContainerSocial>
        <PortfolioMainImage
            src={portfolioImage}
            alt="portfolio Image"
        ></PortfolioMainImage>
        </InnerStyleContainer>
        <ComingSoon>Coming Soon</ComingSoon>
        <Github url="https://github.com/alperkaan01"></Github>
        <LinkedIn url="https://www.linkedin.com/in/alper-kaan-odaba%C5%9Fo%C4%9Flu-90919b195/"></LinkedIn>
        <Twitter url="https://twitter.com/AlperKa46377607"></Twitter>
    </Container>
  )
}

export default ContactMe
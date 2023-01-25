import React from "react";
import { Container, InnerStyleContainer, PortfolioMainImage } from "../Home/HomepageElements";

import portfolioImage from "../../img/portfolio.png";
import { ComingSoon } from "./ProjectsElements";

const Projects = () => {
  return (
    <Container>
      <InnerStyleContainer>
        <PortfolioMainImage
          src={portfolioImage}
          alt="portfolio Image"
        ></PortfolioMainImage>
      </InnerStyleContainer>
      <ComingSoon>Coming Soon</ComingSoon>
    </Container>
  );
};

export default Projects;

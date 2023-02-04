import React from "react";
import {
  Container,
  Github,
  InnerStyleContainer,
  InnerStyleContainerSocial,
  LinkedIn,
  PortfolioMainImage,
  Twitter,
} from "../About/AboutElements";

import portfolioImage from "../../img/portfolio.png";
import { ComingSoon } from "../Projects/ProjectsElements";
import VerticalLineWrapper from "../../Components/Navbar/Navbar/Timeline/VerticalWrapper";
import VerticalLineContent from "../../Components/Navbar/Navbar/Timeline/VerticalContent";
import { EduContainer, Wrapper } from "./EducationElements";

const Education = () => {
  return (
    <Container>
      {/* <h1>EDUCATION</h1> */}
      {/* <Education>Education</Education>  */}
      <EduContainer></EduContainer>
      <Wrapper>
        <VerticalLineWrapper>
          <VerticalLineContent position="left">
            <strong style={{ "font-size": "1.5rem" }}>
              Sabancı University
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              <strong
                style={{
                  "font-size": "1rem",
                  fontFamily: "Sans-serif",
                  color: "grey",
                }}
              >
                3.95/4.00
              </strong>{" "}{" "}
              ● 2019 - Expected Jun 2024 ● Istanbul, Turkey
            </p>
            <p
              style={{
                fontFamily: "Sans-serif",
                color: "#555",
                "font-size": "1.2rem",
              }}
            >
              B.S in Computer Science and Engineering, Faculty of Engineering
              and Natural Sciences (Junior)
            </p>
            <p
              style={{
                "font-size": "1rem",
                "padding-left": "2rem",
                fontFamily: "Sans-serif",
                color: "#555",
              }}
            >
              {" "}
              <strong>Course Highlights:</strong> Advanced Programming with C++,
              Data Science, Mobile Application Development, Data Structures,
              Algorithms, Software Development, Database Systems, Computer
              Networks, Probability, Statistical Modelling, Discrete
              Mathematics, Introduction to Quantum Physics and Particle behavior
            </p>
          </VerticalLineContent>
          <VerticalLineContent position="right">
            <strong style={{ "font-size": "1.5rem" }}>
              Bahcesehir Antalya Anadolu HighSchool
            </strong>
            <p
              style={{
                "font-size": "0.7rem",
                fontFamily: "Sans-serif",
                color: "grey",
              }}
            >
              2015 - 2019 ● Antalya, Turkey
            </p>
          </VerticalLineContent>
        </VerticalLineWrapper>
      </Wrapper>
    </Container>
  );
};

export default Education;

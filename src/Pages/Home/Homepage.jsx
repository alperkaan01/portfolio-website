import React from "react";
// import {
//   Container,
//   DownloadX,
//   GithubButton,
//   InfoSectionContainer,
//   InnerStyleContainer,
//   InnerStyleContainerSocial,
//   InnerTitleInfo,
//   PortfolioMainImage,
//   TypicalText,
// } from "./HomepageElements";
// import c_img from "../../img/s.png";
// import avatar from "../../img/avatar.png";
// import tl from "../../img/tl.png";

// import Typical from "react-typical";
// import { FaArrowDown } from "react-icons/fa";

// import resume from "../../img/resume.pdf"
import About from "../About/About";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Prof from "../ProfessionalSkills/Prof";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Homepage = () => {
  return (
    <>
      <About></About>
      <Skills></Skills>
      <Prof></Prof>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </>
  );
};

export default Homepage;

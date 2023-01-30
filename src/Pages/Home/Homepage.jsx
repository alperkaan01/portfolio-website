import React from "react";
import {
  Container,
  DownloadX,
  GithubButton,
  InfoSectionContainer,
  InnerStyleContainer,
  InnerStyleContainerSocial,
  InnerTitleInfo,
  PortfolioMainImage,
  TypicalText,
} from "./HomepageElements";
import c_img from "../../img/s.png";
import avatar from "../../img/avatar.png";
import tl from "../../img/tl.png";

import Typical from "react-typical";
import { FaArrowDown } from "react-icons/fa";

import resume from "../../img/resume.pdf"

const Homepage = () => {
  return (
    <Container>
      <img
        src={c_img}
        alt="comp"
        style={{ position: "fixed", width: "56rem", left: "19%", top: "10%" }}
      ></img>
      <InnerStyleContainer></InnerStyleContainer>
      <InnerStyleContainerSocial>
        <InnerTitleInfo>Hi, I'm Alper Kaan</InnerTitleInfo>
        <br></br>
        <TypicalText>
          <Typical loop={Infinity} wrapper="b" steps={[
          'I\'m a junior computer scientist \n in Sabancı University 🏫_',
          1300,
          'I\'m a developer 💻 _',
          1300,
          'I\'m an athlete 🏃🏼 _',
          1300,
          'I\'m a musician 🎸 _',
          1300,
          'I\'m a singer 🎤 _',
          1300,
        ]}/>
        </TypicalText>
      </InnerStyleContainerSocial>
      <PortfolioMainImage></PortfolioMainImage>
      <InfoSectionContainer>
        <DownloadX href={resume} download="Alper Kaan Odabaşoğlu CV">
          <FaArrowDown style={{
            position: "relative",
            left: "-5px",
            width: "1rem"
          }}>
            Download Resume
          </FaArrowDown>
          <span style={{
            position: "relative",
            left: "0.5rem",
            fontSize: "15px",
          }}>Download Resume</span>
        </DownloadX>
      </InfoSectionContainer>
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
          width: "2rem",
        }}
      ></img>
    </Container>
  );
};

export default Homepage;

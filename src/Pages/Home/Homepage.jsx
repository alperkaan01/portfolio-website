import React, { useEffect, useState } from "react";

import { SocialIcon } from "react-social-icons";

import {
  CContainer,
  CImage,
  Container,
  CppCodeSample,
  EngButton,
  Github,
  InfoSectionContainer,
  InnerStyleContainer,
  InnerStyleContainerSocial,
  InnerTitle,
  InnerTitleInfo,
  JsImage,
  LangImage,
  LanguageContainer,
  LImage,
  LinkedIn,
  PortfolioMainImageMobile,
  PyImage,
  PythonImage,
  RadioButtons,
  Twitter,
} from "./HomepageElements";
import { PortfolioMainImage } from "./HomepageElements";

import portfolioImage from "../../img/portfolio.png";
import faceImage from "../../img/face.png";

import { Button } from "reactstrap";

const Homepage = () => {
  const [data, setData] = useState("C++");
  const [isClicked, setClicked] = useState(false);
  var [code, setCode] = useState(
    <h4 style={{ position: "relative", left: "1rem" }}>
      <br></br>
      <span style={{ position: "relative", left: "1rem", color: "blue" }}>
        void
      </span>
      <span style={{ position: "relative", left: "1.5rem", color: "green" }}>
        Hello_Network_Surfer( ){" "}
      </span>
      <br></br>
      <br></br>
      <span style={{ position: "relative", left: "3rem", color: "blue" }}>
        {" "}
        printf(
        <span style={{ position: "relative", color: "brown" }}>
          "Lets go and explore my world"
        </span>
        );{" "}
      </span>
    </h4>
  );

  useEffect(() => {
    if (isClicked) {
      if (data === "C++") {
        console.log("C++");
        setCode(
          <h4 style={{ position: "relative", left: "1rem" }}>
            <br></br>
            <span style={{ position: "relative", left: "1rem", color: "blue" }}>
              void
            </span>
            <span
              style={{ position: "relative", left: "1.5rem", color: "green" }}
            >
              Hello_Network_Surfer( ){" "}
            </span>
            <br></br>
            <br></br>
            <span style={{ position: "relative", left: "3rem", color: "blue" }}>
              {" "}
              printf(
              <span style={{ position: "relative", color: "brown" }}>
                "Lets go and explore my world"
              </span>
              );{" "}
            </span>
          </h4>
        );
      } else if (data === "Py") {
        console.log("Py");
        setCode(
          <h4 style={{ position: "relative", left: "1rem" }}>
            <br></br>
            <span style={{ position: "relative", left: "1rem", color: "blue" }}>
              def
            </span>
            <span
              style={{ position: "relative", left: "1.5rem", color: "green" }}
            >
              Hello_Network_Surfer( ):{" "}
            </span>
            <br></br>
            <br></br>
            <span style={{ position: "relative", left: "3rem", color: "blue" }}>
              {" "}
              print(
              <span style={{ position: "relative", color: "brown" }}>
                "Lets go and explore my world"
              </span>
              ){" "}
            </span>
          </h4>
        );
      } else {
        console.log("Js");
        setCode(
          <h4 style={{ position: "relative", left: "1rem" }}>
            <br></br>
            <span style={{ position: "relative", left: "1rem", color: "blue" }}>
              function
            </span>
            <span
              style={{ position: "relative", left: "1.5rem", color: "green" }}
            >
              Hello_Network_Surfer( ){" "}
            </span>
            <br></br>
            <br></br>
            <span style={{ position: "relative", left: "3rem", color: "blue" }}>
              {" "}
              window.alert(
              <span style={{ position: "relative", color: "brown" }}>
                "Lets go and explore my world"
              </span>
              );{" "}
            </span>
          </h4>
        );
      }
    }
    setClicked(false);
  });

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
      <InnerTitleInfo>
        Hi Web Surfer,
        <br /> My Name is{" "}
        <span style={{ color: "#674188", textDecoration: "underline" }}>
          Alper Kaan
        </span>
        <br /> and I am a passionate <br />
        <span
          style={{
            color: "#674188",
            textDecoration: "underline",
            fontSize: "20px",
          }}
        >
          Code Monster
        </span>
        <br />
        <br /> Lets Explore My World together
      </InnerTitleInfo>
      <InfoSectionContainer>
        <CppCodeSample>{code}</CppCodeSample>
      </InfoSectionContainer>

      <Github url="https://github.com/alperkaan01"></Github>
      <LinkedIn url="https://www.linkedin.com/in/alper-kaan-odaba%C5%9Fo%C4%9Flu-90919b195/"></LinkedIn>
      <Twitter url="https://twitter.com/AlperKa46377607"></Twitter>

      <CImage
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg"
        onClick={() => {
          setData("C++");
          setClicked(true);
        }}
      />
      <PyImage
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        onClick={() => {
          setData("Py");
          setClicked(true);
        }}
      />
      <JsImage
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        onClick={() => {
          setData("Js");
          setClicked(true);
        }}
      />

      <PortfolioMainImage
        src={portfolioImage}
        alt="portfolio Image"
      ></PortfolioMainImage>

      <PortfolioMainImageMobile
        src={faceImage}
        alt="portfolio Image"
      ></PortfolioMainImageMobile>
    </Container>
  );
};

export default Homepage;

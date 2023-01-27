import { SocialIcon } from "react-social-icons";
import { Button } from "reactstrap";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: white;
`;

export const InnerStyleContainer = styled.div`
    position: fixed;
    top: 23%;
    border-radius: 100%;
    width: 16rem;
    height: 35%;
    left: 52rem;
    background: #8c52ff;
`;

export const InnerStyleContainerSocial = styled.div`
  position: fixed;
  width: 7rem;
  height: 27rem;
  right: 41px;
  background: white;
  top: 15%;

  background: #fffbf5;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InnerTitle = styled.h1`
  position: fixed;
  display: inline-block;
  top: 29%;
  left: 10%;
  font-family: cursive, fantasy;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InnerTitleInfo = styled.h4`
  position: fixed;
  display: inline-block;
  top: 49%;
  left: 10%;
  font-family: cursive, fantasy;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InfoSectionContainer = styled.div`
  position: absolute;
  top: 34%;
  left: 37%;
  width: 26rem;
  height: 20rem;
  background: #fffbf5;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Github = styled(SocialIcon)`
  position: fixed;
  left: 92%;
  top: 26%;


`;

export const LinkedIn = styled(SocialIcon)`
  position: fixed;
  left: 88.9%;
  top: 42%;
`;

export const Twitter = styled(SocialIcon)`
  position: fixed;
  left: 85.8%;
  top: 58%;

`;

export const PortfolioMainImage = styled.img`
  position: fixed;
  width: 10rem;
  right: 17%;
  top: 16%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PortfolioMainImageMobile = styled.img`

  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    display: inline-block;
    width: 10rem;
    left: 35%;
    top: 16%;
  }
`;

export const CImage = styled.img`
  position: fixed;
  width: 3.8rem;
  height: 4rem;

  top: 24%;
  left: 40.5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const PyImage = styled.img`
  position: fixed;
  width: 3.8rem;
  height: 4rem;

  top: 24%;
  left: 48.5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const JsImage = styled.img`
  position: fixed;
  width: 3.8rem;
  height: 4rem;

  top: 24%;
  left: 56.5%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CppCodeSample = styled.h4`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

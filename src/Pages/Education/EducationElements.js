import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 7rem;
  width: 50rem;
  left: 10rem;
`;

export const EduContainer = styled.div`
  position: absolute;
  top: 29%;
  border-radius: 100%;
  width: 16rem;
  height: 35%;
  left: 70rem;
  background: #8c52ff;
`;

export const Education = styled.h1`
  display: inline-block;
  top: 26.5rem;
  position: relative;
  left: 70rem;
  font-family: "Vollkorn SC";
  font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

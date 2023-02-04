import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  padding: 0;
  margin: 0;

  top: 0;
  left: 0;

  width: 100%;
  height: 46rem;
  background: white;
`;

export const ProfContainer = styled.div`
  position: absolute;
  top: 27.5%;
  border-radius: 100%;
  width: 14rem;
  height: 14rem;
  left: 5rem;
  background: #8c52ff;
`;

export const ProfSkill = styled.h1`
display: inline-block;
    top: 26.5rem;
    position: relative;
    left: 5rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProfSkillS = styled.h1`
    position: absolute;
    display: inline-block;
    top: 29.5rem;
    position: relative;
    left: -5.5rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const Com = styled.h2`
    position: absolute;
    display: inline-block;
    top: 16.1rem;
    position: relative;
    left: 13.1rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Team = styled.h2`
    position: absolute;
    display: inline-block;
    top: 16.1rem;
    position: relative;
    left: 22.2rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Proj = styled.h2`
    position: absolute;
    display: inline-block;
    top: 37.1rem;
    position: relative;
    left: 1.8rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Creativity = styled.h2`
    position: absolute;
    display: inline-block;
    top: 34.1rem;
    position: relative;
    left: 13.5rem;
    font-family: "Vollkorn SC";
    font-weight: normal;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProgressCom = styled.div`
  width: 200px;
  position: absolute;
  left: 35rem;
  top: 5.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProgressTeam = styled.div`
  width: 200px;
  position: absolute;
  left: 65rem;
  top: 5.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProgressProj = styled.div`
  width: 200px;
  position: absolute;
  left: 35rem;
  top: 25.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ProgressCreativity = styled.div`
  width: 200px;
  position: absolute;
  left: 65rem;
  top: 25.4rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
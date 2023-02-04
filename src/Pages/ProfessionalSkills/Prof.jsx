import React from "react";
import {
  Com,
  Container,
  Creativity,
  ProfContainer,
  ProfSkill,
  ProfSkillS,
  ProgressCom,
  ProgressCreativity,
  ProgressProj,
  ProgressTeam,
  Proj,
  Team,
} from "./ProfElements";

import ProgressBar from "react-animated-progress-bar";

import cool from "../../img/cool.png";
import Projects from "../Projects/Projects";

const Prof = () => {
  const myRef = document.querySelector(".scrollable-div");
  return (
    <Container>
      <ProfSkill>PROFESSIONAL</ProfSkill>
      <ProfSkillS>SKILLS</ProfSkillS>
      <ProfContainer></ProfContainer>
      <img
        src={cool}
        alt="avatar"
        style={{
          position: "absolute",
          left: "5.5rem",
          top: "13.7rem",
          width: "11rem",
        }}
      ></img>
      <Com>Communication</Com>
      <ProgressCom>
        <ProgressBar
          width="350px"
          height="10px"
          fontColor="black"
          trackWidth="15"
          percentage="93"
          trackPathColor="#494f56"
          trackBorderColor="transparent"
          hollowBackgroundColor="white"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#0fd60f",
            poor: "red",
          }}
          scrollArea={myRef}
        />
      </ProgressCom>
      <Proj>Project <br></br> Management</Proj>
      <ProgressProj>
        <ProgressBar
          width="350px"
          height="10px"
          fontColor="black"
          trackWidth="15"
          percentage="95"
          trackPathColor="#494f56"
          trackBorderColor="transparent"
          hollowBackgroundColor="white"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#0fd60f",
            poor: "red",
          }}
          scrollArea={myRef}
        />
      </ProgressProj>
      <Team>Team Work</Team>
      <ProgressTeam>
      <ProgressBar
          width="350px"
          height="10px"
          fontColor="black"
          trackWidth="15"
          percentage="98"
          trackPathColor="#494f56"
          trackBorderColor="transparent"
          hollowBackgroundColor="white"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#0fd60f",
            poor: "red",
          }}
          scrollArea={myRef}
        />
      </ProgressTeam>
      <Creativity>Creativity</Creativity>
      <ProgressCreativity> 
      <ProgressBar
          width="350px"
          height="10px"
          fontColor="black"
          trackWidth="15"
          percentage="100"
          trackPathColor="#494f56"
          trackBorderColor="transparent"
          hollowBackgroundColor="white"
          defColor={{
            fair: "orangered",
            good: "yellow",
            excellent: "#0fd60f",
            poor: "red",
          }}
          scrollArea={myRef}
        />
      </ProgressCreativity>
    </Container>
  );
};

export default Prof;

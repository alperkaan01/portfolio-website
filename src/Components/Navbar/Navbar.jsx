import React from "react";
import {FaBars, FaGithub, FaLinkedin} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  GithubLink,
  LinkedInLink,

} from "./NavbarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/portfolio-website">ALPER KAAN</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/portfolio-website/projects">Skills</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-website/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-website/education">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-website/contact-me">Contact Me</NavLinks>
            </NavItem>
          </NavMenu>
          <GithubLink onClick={ () => window.location.href = "https://github.com/alperkaan01"}></GithubLink>
          <LinkedInLink onClick={ () => window.location.href = "https://www.linkedin.com/in/alper-kaan-odaba%C5%9Fo%C4%9Flu-90919b195/"}></LinkedInLink>
        </NavbarContainer>
      </Nav>
    </>
  );
};

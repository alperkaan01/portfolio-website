import React from "react";
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/portfolio-website">ALPER KAAN</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/portfolio-website/projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-website/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-website/education">Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio-website/contact-me">Contact Me</NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

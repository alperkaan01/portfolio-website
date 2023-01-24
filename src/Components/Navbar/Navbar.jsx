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
          <NavLogo to="/">ALPER KAAN</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Education</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/">Contact Me</NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

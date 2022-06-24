import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
} from "./NavbarElements";
import icon from "../../assets/images/icon.svg";
import nGenilLogoa from "../../assets/images/NGENInewlogo.svg"

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img src={nGenilLogoa} alt="Logo" width="200px" />
          </NavLogo>
          <MobileIcon>
            <img
              src={icon}
              alt="icon"
              width="40px"
              className="icon"
              onClick={toggle}
            />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;

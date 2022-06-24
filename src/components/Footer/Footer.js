import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterLeft,
  FooterRight,
  FooterRows
} from "./FooterElements";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterRows>
          <FooterLeft>
            <Link to="/terms">Privacy Policy | Terms of use | Disclaimer</Link>
          </FooterLeft>
          <FooterRight>
            © 2022 PW-V7UYADP2 - NGENI IO LIMITED | All Rights Reserved
          </FooterRight>
        </FooterRows>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
  
import React from "react";
import nairobi from "../../assets/images/nairobiart.png";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";
import phoneicon from "../../assets/images/phoneicon.svg";

import {
  ServicesContainer,
  ServiceContent,
  ServiceOne,
  ServiceTwo,
  ServiceImg,
  Servp,
  ServiceBodyOne,
  ServiceBtn,
  ServiceModal,
  Phone,
  Phone1,
  Phone2,
} from "./ServicesElements";
import { FaTwitter, FaGithubSquare } from "react-icons/fa";
import substack from "../../assets/images/Icons/substack.svg";
import Linktree from "../../assets/images/Icons/Linktree.svg";
function Services() {
  return (
    <ServicesContainer>
      <ServiceContent>
        <ServiceOne>
          <ServiceImg>
            <ExternalLink href="https://bit.ly/3lJ4rAs">
              <img src={nairobi} alt="engineer" width="600"/>
            </ExternalLink>
            <br />
            <Servp>
              <ExternalLink href="https://twitter.com/ngenidevs">
                <FaTwitter />
              </ExternalLink>
              <ExternalLink href="https://github.com/devNgeni">
                <FaGithubSquare />
              </ExternalLink>
              <ExternalLink href="https://ngeni.substack.com">
                <img src={substack} alt="icon" style={{ paddingTop: "23px" }} />
              </ExternalLink>
              <ExternalLink href="https://linktr.ee/ngeni">
                <img src={Linktree} alt="icon" width="35px" height="80px" style={{ paddingTop: "23px" }}/>
              </ExternalLink>
            </Servp>
            Kitale lane off Dennis Pritt Road, Nairobi, Kenya
            <br />
            <Phone>
              <Phone2>
                <img src={phoneicon} alt="icon" width="30px" />
              </Phone2>
              <Phone1>+254 792 284 449</Phone1>
            </Phone>
          </ServiceImg>
        </ServiceOne>

        <ServiceTwo>
          <ServiceBodyOne>
            <ServiceBtn>
              <Link to="/contacts">Hire Us&nbsp;&nbsp;↗️</Link>
            </ServiceBtn>
            <ServiceModal></ServiceModal>
          </ServiceBodyOne>
        </ServiceTwo>
      </ServiceContent>
    </ServicesContainer>
  );
}

export default Services;

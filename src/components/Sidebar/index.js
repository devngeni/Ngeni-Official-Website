import React from "react";
import {
  SidebarContainer,
  Icon,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoutes,
  SidebarMenu,
  SidebarIcons,
} from "./SidebarElements";
import close from "../../assets/images/close.svg";
import home from "../../assets/images/home.svg";
import twitter from "../../assets/images/Icons/twitterIcon.svg";
import githubIcon from "../../assets/images/githubIcon.svg";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <img src={close} alt="close" width="30px" className="close" />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            <Link to="/">
              <img src={home} alt="close" width="50px" className="close" />
            </Link>
          </SidebarLink>
          <SidebarLink to="/whatwedo" onClick={toggle}>
            <Link to="/whatwedo">WHAT WE DO</Link>
          </SidebarLink>
          <SidebarLink to="/whywerock" onClick={toggle}>
            <Link to="/whywerock">WHY WE ROCK</Link>
          </SidebarLink>
          <SidebarLink to="/focus" onClick={toggle}>
            <Link to="/focus">FOCUS AREAS</Link>
          </SidebarLink>
          <SidebarLink to="/techstack" onClick={toggle}>
            <Link to="/techstack">TECH STACK</Link>
          </SidebarLink>
          <SidebarLink to="/team" onClick={toggle}>
            <Link to="/team">TEAM</Link>
          </SidebarLink>
          <SidebarLink to="/onboarding" onClick={toggle}>
            <Link to="/onboarding">ONBOARDING PROCESS</Link>
          </SidebarLink>
          <SidebarIcons>
            <SidebarLink
              style={{padding: "20px"}}
              onClick={() =>
                window.open("https://twitter.com/ngenidevs", "_blank")
              }
            >
              <a href="https://twitter.com/ngenidevs">
                <img src={twitter} alt="icon"/>
              </a>
            </SidebarLink>
            <SidebarLink
              style={{padding: "20px"}}
              onClick={() =>
                window.open("https://github.com/devNgeni", "_blank")
              }
            >
              <a href="https://github.com/devNgeni">
                <img src={githubIcon} alt="icon" width="45px"/>
              </a>
            </SidebarLink>
          </SidebarIcons>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoutes>
            <Link to="/contacts">START YOUR PROJECT</Link>
          </SidebarRoutes>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;

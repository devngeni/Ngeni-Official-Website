import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  background-color: black;
  padding: 0 24px;
  margin-top: 2em;
  max-width: 1300px;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  cursor: pointer;
  justify-self: start;
  font-size: 1.5rem;
  padding-right: 12px;
  display: flex;
  align-items: center;
  margin-left: 0px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  position: absolute;
  color: #fff;
  top: 0;
  right: 0;
  transform: translate(-100%, 40%);
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
    transform: translate(-100%, 30%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: none;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid grey;
  }
`;

export const NavBtn = styled.nav`
  display: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #006097;
  white-space: nowrap;
  padding: 10px 22px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: black;
  }
`;

import React from "react";
import {
  TechContainer,
  TechRow,
  TechHeader,
  TechTitle,
  TechBody,
  TechIcons,
  TechImage,
  TechName,
  Techwrapper,
} from "./TechElements";

import Fade from "react-reveal/Fade";
import { ExternalLink } from "react-external-link";

//logos
import diag from "../../assets/images/techstack/diag.svg";
import github from "../../assets/images/techstack/github.svg";
import javascript from "../../assets/images/techstack/javascript.svg";
import kotlin from "../../assets/images/techstack/kotlin.svg";
import linux from "../../assets/images/techstack/linux.svg";
import nodejs from "../../assets/images/techstack/nodejs.svg";
import python from "../../assets/images/techstack/python.svg";
import react from "../../assets/images/techstack/react.svg";
import flutter from "../../assets/images/techstack/flutter.svg";
import sql from "../../assets/images/techstack/sql.svg";
import typescript from "../../assets/images/techstack/typescript.svg";
import vue from "../../assets/images/techstack/vue.svg";
import javalogo from "../../assets/images/techstack/Javalogo.svg";
import vscodelogo from "../../assets/images/techstack/vscodelogo.svg";
import rustlogo from "../../assets/images/techstack/rustlogo.svg";
import devopslogo from "../../assets/images/techstack/devopslogo.svg";
import mongodblogo from "../../assets/images/techstack/mongodblogo.svg";
import golang from "../../assets/images/techstack/golang.svg";
import waxp from "../../assets/images/techstack/waxp.svg";

function Tech() {
  return (
    <>
      <TechContainer>
        <TechRow>
          <Fade up>
            <TechHeader>
              <TechTitle>
                oUR <span>tECH</span> sTACK
              </TechTitle>
              <TechBody>
                We are Engineering robust, user-focused Web3 solutions driving
                breakthrough efficiency and bottom-line results, Our skill spans
                to experts in translating project requirements into technical
                solutions, and fanatical about quality, usability, security and
                scalability.
              </TechBody>
            </TechHeader>
          </Fade>

          <TechIcons>
            <Fade up>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.javascript.com/">
                    <img src={javascript} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Javascript</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.python.org/">
                    <img src={python} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Python</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://vuejs.org/">
                    <img src={vue} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Vue JS</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://reactjs.org/">
                    <img src={react} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>React JS</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://nodejs.org/en/">
                    <img src={nodejs} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Node JS</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://kotlinlang.org/">
                    <img src={kotlin} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Kotlin</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://github.com/">
                    <img src={github} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Github</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.linux.org/">
                    <img src={linux} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Linux</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.typescriptlang.org/">
                    <img src={typescript} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Typescript</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.mysql.com/">
                    <img src={sql} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>SQL</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://docs.soliditylang.org/en/v0.8.9/">
                    <img src={diag} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Solidity</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.oracle.com/java/">
                    <img src={javalogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Java</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.rust-lang.org/">
                    <img src={rustlogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Rust</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://code.visualstudio.com/">
                    <img src={vscodelogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>VS Code</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://azure.microsoft.com/en-us/overview/what-is-devops/">
                    <img src={devopslogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Devops</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://flutter.dev/">
                    <img src={flutter} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Flutter</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://www.mongodb.com/">
                    <img src={mongodblogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>mongoDb</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://go.dev/">
                    <img src={golang} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>GoLang</TechName>
              </Techwrapper>
              <Techwrapper>
                <TechImage>
                  <ExternalLink href="https://on.wax.io/wax-io/">
                    <img src={waxp} alt="engineer" width="80px" />
                  </ExternalLink>
                </TechImage>
                <TechName>Wax Protocol</TechName>
              </Techwrapper>
            </Fade>
          </TechIcons>
        </TechRow>
      </TechContainer>
    </>
  );
}

export default Tech;

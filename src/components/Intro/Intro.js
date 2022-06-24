import React from "react";
import engineer from "../../assets/images/engineer.svg";
import Emoji from "../Emoji/Emoji";
import {
  IntroContainer,
  IntroContent,
  IntroImg,
  IntroHeading,
  IntroBody,
  IntroContentTwo,
  IntroContentThree,
  IntroRow,
  Teaheader,
  TeaColOne,
  TeaColTwo,
  Teabody,
  Picha,
  CarouselDiv,
  CarouselBody,
} from "./IntroSection";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import CarouselTeam from "../carousel/Carousel";
import { ExternalLink } from "react-external-link";
/* <img src={engineer} alt="engineer" width="200px" /> */

function Intro() {
  return (
    <IntroContainer>
      <Picha>
        <img src={engineer} alt="engineer" />
      </Picha>
      <IntroRow>
        <Fade up>
          <IntroContent>
            <IntroHeading>
              <IntroImg></IntroImg>
              mEET. <span>The</span> N<span>G</span>ENI <span>Engineers</span>
            </IntroHeading>
            <IntroBody>
              A wildly talented and clever bunch of Web3 whisperers fresh out of
              East Afrika 🌍, led by our founder, an insanely-driven
              crypto-whisperer himself -{" "}
              <ExternalLink href="https://about.me/jjoel">
                {"Jo3l ₿"}
              </ExternalLink>
            </IntroBody>
          </IntroContent>
          <IntroContentTwo>
            <Zoom up>
              <TeaColOne>
                <Teaheader>
                  <Emoji symbol="🚶🏿‍♂️" label="face" role="img" />
                  hIS STORY.
                </Teaheader>
                <Teabody>₿itcoining since 2013.</Teabody>
              </TeaColOne>
            </Zoom>
          </IntroContentTwo>
          <IntroContentThree>
            <Zoom up>
              <TeaColTwo>
                <Teaheader>
                  <Emoji symbol="👩🏾" label="face" role="img" />
                  oUR STORY
                  <Emoji symbol="👦🏿" label="face" role="img" />
                </Teaheader>
                <Teabody>BUILDING. SHAPING. MOVING.</Teabody>
              </TeaColTwo>
            </Zoom>
          </IntroContentThree>
        </Fade>
        <CarouselBody>
          <CarouselDiv>
            <CarouselTeam />
          </CarouselDiv>
        </CarouselBody>
      </IntroRow>
    </IntroContainer>
  );
}

export default Intro;

//👀

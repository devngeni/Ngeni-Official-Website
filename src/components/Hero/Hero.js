import React from "react";
import Video from "../../assets/videos/video.mp4";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroText,
  HeroImg,
  TextBtn,
} from "./HeroElements";
import { ExternalLink } from "react-external-link";
import hero from "../../assets/images/NGENIC.svg";

function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroText>
          <HeroH1>
            Behind every <span>Web3</span> and <span>Blockchain</span> Success,
            You have a Die Hard Team of Software <span>Engineers!</span>
          </HeroH1>
          <TextBtn>
            <ExternalLink href="https://ngeni.substack.com/">
              <button className="obato">LiFE @ NGENI</button>
            </ExternalLink>
          </TextBtn>
        </HeroText>
        <HeroImg>
          <img src={hero} alt="Icon" width="900px" />
        </HeroImg>
      </HeroContent>
      {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} /> */}
    </HeroContainer>
  );
}

export default Hero;

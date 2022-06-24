import React from "react";
import {
  WhatwedoContainer,
  WhatwedoRow,
  WhatwedoHeader,
  Title,
  Mainbody,
  FooterRow,
  FooterContent,
  FooterImage,
  FooterHeader,
  Code,
  Tldr,
  Hello,
  Tab,
  FooterContentOne
} from "./WhatwedoElements";
// import Slide from "react-reveal/Slide"; // Importing Zoom effect
import Fade from "react-reveal/Fade";
import { ExternalLink } from "react-external-link";
import { BiMap } from "react-icons/bi";
import Zoom from "react-reveal/Zoom";
import code from "../../assets/images/code.svg";
import fyber from "../../assets/images/fyber.jpeg";

function Whatwedo() {
  return (
    <WhatwedoContainer>
      <WhatwedoRow>
        <Fade up>
          <WhatwedoHeader>
            <Title>
              wHAT <span>wE dO</span>
            </Title>
            <Mainbody>
              <Tldr>
              <Code>
              <img src={code} alt="engineer" width="300px"/>
              </Code>
              <Tab>
              <ExternalLink href="https://www.dictionary.com/browse/tldr">
                <span>TLDR ▼▼▼</span>
              </ExternalLink>
              </Tab>
              </Tldr>
              <Hello>
              Next generation <span>FULLSTACK WEB3 DEVELOPERS & TECH </span>
              strategists <span>building ComPlex</span>  and cross-platform 
              <span>&nbsp;Applications, Bots & dApps for Blockchain, Fintech, Cryptocurrencies & Markets Trading</span> 
              . We develop across the <span>Entire ECOSYSTEM</span> & 💗{" "}
              <span>&nbsp;COMPLEXITY! </span>
              Mobile Payments, API & DeFi bridges, Digital wallets...? We got THIS. It's in{" "}
              <span>OUR BLOOD</span> 😍 We’re <span>GENERATION M-Pesa</span>👨👨👦👦 
              moving money <span>Digitally</span> since <span>2007</span>🔥
              </Hello>
            </Mainbody>
          </WhatwedoHeader>
        </Fade>
      </WhatwedoRow>
      <FooterRow>
        <Zoom up>
          <FooterContent>
            <FooterImage>
              <ExternalLink href="https://www.safaricom.co.ke/personal/">
                📢
              </ExternalLink>
            </FooterImage>

            <FooterHeader>Shout-out to M-Pesa 💖</FooterHeader>
          </FooterContent>
        </Zoom>
        <Zoom up>
          <FooterContent>
            <FooterImage>
              <ExternalLink href="https://bit.ly/3lJ4rAs">
                <BiMap />
              </ExternalLink>
            </FooterImage>
            <FooterHeader>Our Location: Nairobi, Kenya</FooterHeader>
          </FooterContent>
        </Zoom>
        <Zoom up>
          <FooterContentOne>
            <FooterImage>
              <ExternalLink href="/">
              <img src={fyber} alt="icon" width="100px" className="icon" />
              </ExternalLink>
            </FooterImage>
            <FooterHeader>Proudly sat above a big & super fast fibre optic cable. Consuming 3.2 TB p/d  feeding our Ethereum & BNB Chain nodes.</FooterHeader>
          </FooterContentOne>
        </Zoom>
      </FooterRow>
    </WhatwedoContainer>
  );
}

export default Whatwedo;

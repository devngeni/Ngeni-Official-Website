import React from "react";
import CountUp from "react-countup";
import {
  CryptoContainer,
  CryptoRows,
  CryptoColOne,
  CryptoColTwo,
  CryptoContent,
  CryptoBox,
  CryptoImg,
  CryptoCounter,
  CryptoHeader,
  Cryptop,
  Imahinario,
  Cryptoset,
  Cryptores,
  CryptoHeaderTwo,
  CryptoBody,
} from "./CryptoElements";
import Fade from "react-reveal/Fade";
import ether from "../../assets/images/ethereum-01.svg";
import binance from "../../assets/images/binance-01.svg";
import t3 from "../../assets/images/t3-01.svg";
import slogo from "../../assets/images/slogo-01.svg";
import { Link } from "react-router-dom";
import werock from "../../assets/images/werock.svg";
import { ExternalLink } from "react-external-link";
import solanalogo from "../../assets/images/solana.svg";
import algorand from "../../assets/images/techstack/algorand.svg";
import cosmos from "../../assets/images/techstack/cosmos.svg";
import github from "../../assets/images/techstack/github.svg";

function Crypto() {
  return (
    <CryptoContainer>
      <CryptoContent>
        <Imahinario>
          <img src={werock} alt="team" width="600px" />
        </Imahinario>
        <CryptoRows>
          <Fade up>
            <CryptoColOne>
              <CryptoHeader>
                 wHY<span>wE</span> rOCK!
              </CryptoHeader>
              <ExternalLink href="https://github.com/devNgeni"><img src={github} alt="icon" width="60" /></ExternalLink>
              <Cryptop> Since, <span>DeFi Summer 2020, </span> NGENI Engineers have developed over 34 🤖 dApps. YES 34! </Cryptop>
              <Link to="/focus"></Link>
            </CryptoColOne>
          </Fade>
          <CryptoBody>
          <CryptoHeaderTwo>🚢 ALREADY SHIPPED</CryptoHeaderTwo>
          <CryptoColTwo>
            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://ethereum.org/en/">
                    <img src={ether} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>Ethereum</CryptoCounter>
                  <Cryptores>
                    <CountUp end={16} duration={2} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://www.binance.com/en">
                    <img src={binance} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>BNB Chain{""}</CryptoCounter>
                  <Cryptores>
                    <CountUp end={12} duration={1} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://solana.com/">
                    <img src={solanalogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>Solana {""}</CryptoCounter>
                  <Cryptores>
                    <CountUp end={2} duration={1} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://www.secretswap.io/">
                    <img src={slogo} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>SecretSwap {""}</CryptoCounter>
                  <Cryptores>
                    <CountUp end={1} duration={1} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://tezos.com/">
                    <img src={t3} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>Tezos {""}</CryptoCounter>
                  <Cryptores>
                    <CountUp end={2} duration={1} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://www.algorand.com/">
                    <img src={algorand} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>Algorand {""}</CryptoCounter>
                  <Cryptores>
                    <CountUp end={1} duration={1} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>

            <CryptoBox>
              <Fade up>
                <CryptoImg>
                  <ExternalLink href="https://cosmos.network/">
                    <img src={cosmos} alt="engineer" width="80px" />
                  </ExternalLink>
                </CryptoImg>
                <Cryptoset>
                  <CryptoCounter>Cosmos {""}</CryptoCounter>
                  <Cryptores>
                    <CountUp end={1} duration={1} />
                  </Cryptores>
                </Cryptoset>
              </Fade>
            </CryptoBox>
          </CryptoColTwo>
          </CryptoBody>
        </CryptoRows>
      </CryptoContent>
    </CryptoContainer>
  );
}

export default Crypto;

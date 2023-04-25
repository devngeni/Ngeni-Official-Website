import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  WerockContainer,
  WerockContents,
  WerockHeader,
  CryptoBox,
  CryptoBoxone,
  CryptoBoxtwo,
  CryptoImgtwo,
  CryptoCounter,
  CryptoColumn,
  CryptoBoxEx,
  Eyes,
  CryptoColumnLeft,
} from "./WhywerockElements";
import avalance from "../../assets/images/techstack/avalance.svg";
import cardano from "../../assets/images/techstack/cardano.svg";
import polygon from "../../assets/images/techstack/polygon.svg";
import internetProtocol from "../../assets/images/techstack/Internetcomputerprotocol.svg";
import filecoin from "../../assets/images/techstack/filecoin.svg";
import Emoji from "../Emoji/Emoji";
import waxp from "../../assets/images/techstack/waxp.svg";
import stellar from "../../assets/images/techstack/stellar.svg";

function Whywerock() {
  return (
    <WerockContainer>
      <Fade direction="up">
        <WerockContents>
          <CryptoColumn>
            <WerockHeader>DEVELOPING ON</WerockHeader>
            <CryptoBox>
              <CryptoBoxone>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={cardano} alt="engineer" width="100px" />
                    <CryptoCounter>Cardano</CryptoCounter>
                  </CryptoImgtwo>
                </Fade>
              </CryptoBoxone>

              <CryptoBoxone>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={avalance} alt="engineer" width="100px" />
                    <CryptoCounter>Avalanche</CryptoCounter>
                  </CryptoImgtwo>
                </Fade>
              </CryptoBoxone>

              <CryptoBoxone>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={filecoin} alt="engineer" width="100px" />
                  </CryptoImgtwo>
                  <CryptoCounter>File Coin</CryptoCounter>
                </Fade>
              </CryptoBoxone>

              <CryptoBoxone>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={polygon} alt="engineer" width="100px" />
                  </CryptoImgtwo>
                  <CryptoCounter>Polygon</CryptoCounter>
                </Fade>
              </CryptoBoxone>

              <CryptoBoxone>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={waxp} alt="engineer" width="100px" />
                  </CryptoImgtwo>
                  <CryptoCounter>Wax Protocol</CryptoCounter>
                </Fade>
              </CryptoBoxone>

              <CryptoBoxone>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={stellar} alt="engineer" width="100px" />
                  </CryptoImgtwo>
                  <CryptoCounter>Stellar Protocol</CryptoCounter>
                </Fade>
              </CryptoBoxone>
            </CryptoBox>
          </CryptoColumn>

          <CryptoColumnLeft>
            <WerockHeader>RESEARCHING & TESTING</WerockHeader>
            <CryptoBoxEx>
              <CryptoBoxtwo>
                <Fade direction="up">
                  <CryptoImgtwo>
                    <img src={internetProtocol} alt="engineer" width="100px" />
                  </CryptoImgtwo>
                  <CryptoCounter>Internet Computer Protocol</CryptoCounter>
                </Fade>
              </CryptoBoxtwo>
            </CryptoBoxEx>
          </CryptoColumnLeft>
          <Eyes>
            Watch <Emoji symbol="👀" role="img" /> <span>This</span> Space!!
          </Eyes>
        </WerockContents>
      </Fade>
    </WerockContainer>
  );
}

export default Whywerock;

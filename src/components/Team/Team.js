import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  TeamContainer,
  TeamContent,
  TeamHeader,
  TeamRows,
  TeamH1,
  Teamp,
  TeamDev,
  Teambtn,
  TeamDes,
  TeamWrapper,
  Emoji,
  HeaderOne,
  TeamAdviser,
} from "./TeamElements";
// import data from "./data.json";
import Slide from "react-reveal/Slide"; // Importing Zoom effect
import Fade from "react-reveal/Fade";
import team from "../../assets/images/teams.svg";
import yeng from "../../assets/images/femals_dev.jpg";
import jamaa from "../../assets/images/male_dev.jpg";
// import betty from "../../assets/images/staff/betty.kirii.jpg";
import "react-tabs/style/react-tabs.css";

function Team() {
  const [isView, setIsView] = useState(false);
  const [isViewTwo, setIsViewTwo] = useState(false);
  const [isViewThree, setIsViewThree] = useState(false);
  const [isViewFour, setIsViewFour] = useState(false);
  const [isViewFive, setIsViewFive] = useState(false);
  const [isViewSix, setIsViewSix] = useState(false);
  const [isViewSeven, setIsViewSeven] = useState(false);
  const [isViewEight, setIsViewEight] = useState(false);
  const [isViewNine, setIsViewNine] = useState(false);
  const [isViewTen, setIsViewTen] = useState(false);
  const [isViewEleven, setIsViewEleven] = useState(false);
  const [isViewTwelve, setIsViewTwelve] = useState(false);
  const [isViewThirteen, setIsViewThirteen] = useState(false);
  const [isViewFourteen, setIsViewFourteen] = useState(false);
  const [isViewFifteen, setIsViewFifteen] = useState(false);
  const [isViewSixteen, setIsViewSixteen] = useState(false);

  const [isViewB, setIsViewB] = useState(false);
  const [isViewOneB, setIsViewOneB] = useState(false);
  const [isViewTwoB, setIsViewTwoB] = useState(false);
  const [isViewThreeB, setIsViewThreeB] = useState(false);
  const [isViewFourB, setIsViewFourB] = useState(false);
  const [isViewFiveB, setIsViewFiveB] = useState(false);
  const [isViewSixB, setIsViewSixB] = useState(false);
  const [isViewSevenB, setIsViewSevenB] = useState(false);
  const [isViewEightB, setIsViewEightB] = useState(false);
  const [isViewNineB, setIsViewNineB] = useState(false);
  const [isViewTenB, setIsViewTenB] = useState(false);
  const [isViewTenC, setIsViewTenC] = useState(false);
  const [isViewTenD, setISViewTenD] = useState(false);
  const [isViewEllevenD, setISViewEllevenD] = useState(false);


  const [isView1, setIsView1] = useState(false);
  const [isView2, setIsView2] = useState(false);
  const [isView3, setIsView3] = useState(false);
  const [isView4, setIsView4] = useState(false);
  const [isView5, setIsView5] = useState(false);
  const [isView6, setIsView6] = useState(false);

  return (
    <>
      <TeamContainer>
        <TeamContent>
          <Slide>
            <TeamWrapper>
              <TeamH1>
                &nbsp;OUR <span>TEAM</span>
              </TeamH1>
              <Teamp>
                <TeamHeader>
                  <img src={team} alt="team" width="900px" />
                </TeamHeader>
                Building prominent Web3 applications, dApps, automation tools,
                plugins, bridges/gateways & bots for the world's hottest
                Blockchain Protocols, Professional Market Traders, FinTech
                platforms and Cryptocurrency projects. 😎.{" "}
                <span>{"{console.log}"}</span>
              </Teamp>
            </TeamWrapper>
          </Slide>
          <HeaderOne>ENGINEERS</HeaderOne>
          <TeamRows>
            {/* A */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewSixteen(true)}
                onMouseLeave={() => setIsViewSixteen(false)}
              >
                {isViewSixteen && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="team"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">⚡</Emoji>

                <Teambtn>ALEX</Teambtn>
                <TeamDes>FaBriCator</TeamDes>
              </TeamDev>
            </Fade>
            {/* B */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView(true)}
                onMouseLeave={() => setIsView(false)}
              >
                {isView && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="team"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>👑</Emoji>

                <Teambtn>BETTY</Teambtn>
                <TeamDes>NFT Queen</TeamDes>
              </TeamDev>
            </Fade>
            {/* C */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView4(true)}
                onMouseLeave={() => setIsView4(false)}
              >
                {isView4 && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>🧭</Emoji>

                <Teambtn>COLLINS</Teambtn>
                <TeamDes>Tech Jesus</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewTwo(true)}
                onMouseLeave={() => setIsViewTwo(false)}
              >
                {isViewTwo && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>👨‍💻</Emoji>

                <Teambtn>CORNELIUS</Teambtn>
                <TeamDes>Mobile Chief</TeamDes>
              </TeamDev>
            </Fade>
            {/* D */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewThree(true)}
                onMouseLeave={() => setIsViewThree(false)}
              >
                {isViewThree && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>💣</Emoji>

                <Teambtn>DENNIS</Teambtn>
                <TeamDes>dAPPsKing</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewFour(true)}
                onMouseLeave={() => setIsViewFour(false)}
              >
                {isViewFour && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">👑</Emoji>
                <Teambtn>DENNOH </Teambtn>
                <TeamDes>Rust’edSoul</TeamDes>
              </TeamDev>
            </Fade>
            {/* E */}

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewFive(true)}
                onMouseLeave={() => setIsViewFive(false)}
              >
                {isViewFive && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🛠️</Emoji>
                <Teambtn>ENOCK </Teambtn>
                <TeamDes>NodesG</TeamDes>
              </TeamDev>
            </Fade>
            {/* G */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewSix(true)}
                onMouseLeave={() => setIsViewSix(false)}
              >
                {isViewSix && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">⚡</Emoji>
                <Teambtn>GEORGE </Teambtn>
                <TeamDes>AvalancheKing</TeamDes>
              </TeamDev>
            </Fade>
            {/* H */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewSeven(true)}
                onMouseLeave={() => setIsViewSeven(false)}
              >
                {isViewSeven && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">👨🏽‍🎤 </Emoji>
                <Teambtn>HENRY</Teambtn>
                <TeamDes>PinkBot</TeamDes>
              </TeamDev>
            </Fade>
            {/* J */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewEight(true)}
                onMouseLeave={() => setIsViewEight(false)}
              >
                {isViewEight && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">😎</Emoji>
                <Teambtn>JO3L</Teambtn>
                <TeamDes>Insanity </TeamDes>
              </TeamDev>
            </Fade>
            
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewNine(true)}
                onMouseLeave={() => setIsViewNine(false)}
              >
                {isViewNine && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">💥</Emoji>
                <Teambtn>JAY</Teambtn>
                <TeamDes>EthersJay</TeamDes>
              </TeamDev>
            </Fade>
            
            {/* L */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView5(true)}
                onMouseLeave={() => setIsView5(false)}
              >
                {isView5 && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">✡️</Emoji>
                <Teambtn>LORNA</Teambtn>
                <TeamDes>MsReact </TeamDes>
              </TeamDev>
            </Fade>
            {/* N */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewThirteen(true)}
                onMouseLeave={() => setIsViewThirteen(false)}
              >
                {isViewThirteen && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🌐</Emoji>
                <Teambtn>NICOLAS</Teambtn>
                <TeamDes>Tinker</TeamDes>
              </TeamDev>
            </Fade>
            {/* O */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewTen(true)}
                onMouseLeave={() => setIsViewTen(false)}
              >
                {isViewTen && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🐍</Emoji>
                <Teambtn>OMAMBIA</Teambtn>
                <TeamDes>Pyther</TeamDes>
              </TeamDev>
            </Fade>
            {/* P */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewFourteen(true)}
                onMouseLeave={() => setIsViewFourteen(false)}
              >
                {isViewFourteen && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">💹</Emoji>
                <Teambtn>PIUS</Teambtn>
                <TeamDes>Investor</TeamDes>
              </TeamDev>
            </Fade>
            {/* R */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewEleven(true)}
                onMouseLeave={() => setIsViewEleven(false)}
              >
                {isViewEleven && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">💎</Emoji>
                <Teambtn>RENNY</Teambtn>
                <TeamDes>0xPub.dev</TeamDes>
              </TeamDev>
            </Fade>
            {/* T */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewFifteen(true)}
                onMouseLeave={() => setIsViewFifteen(false)}
              >
                {isViewFifteen && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🪙</Emoji>
                <Teambtn>TAYLOR</Teambtn>
                <TeamDes>TDjango</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView6(true)}
                onMouseLeave={() => setIsView6(false)}
              >
                {isView6 && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">⚙️</Emoji>
                <Teambtn>TIMOTHY</Teambtn>
                <TeamDes>d'Terminator</TeamDes>
              </TeamDev>
            </Fade>
            {/* V */}
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewTwelve(true)}
                onMouseLeave={() => setIsViewTwelve(false)}
              >
                {isViewTwelve && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">👨‍⚖️</Emoji>
                <Teambtn>VINCENT</Teambtn>
                <TeamDes>DevOps4Life</TeamDes>
              </TeamDev>
            </Fade>
          </TeamRows>

          <HeaderOne>Aspiring Engineers, Helping Engineers Engineer</HeaderOne>
          <TeamRows>
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewB(true)}
                onMouseLeave={() => setIsViewB(false)}
              >
                {isViewB && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="team"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>🐓</Emoji>

                <Teambtn>BEATRICE</Teambtn>
                <TeamDes>🐤 🐤 🐤 </TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewTwoB(true)}
                onMouseLeave={() => setIsViewTwoB(false)}
              >
                {isViewThreeB && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>🔥</Emoji>

                <Teambtn>JEREMY</Teambtn>
                <TeamDes>sh🔥tcoin Snipper</TeamDes>
              </TeamDev>
            </Fade>
            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewOneB(true)}
                onMouseLeave={() => setIsViewOneB(false)}
              >
                {isViewTwoB && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>🎨</Emoji>

                <Teambtn>JOHN</Teambtn>
                <TeamDes>UX Evangelist</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewThreeB(true)}
                onMouseLeave={() => setIsViewThreeB(false)}
              >
                {isViewOneB && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🚙</Emoji>
                <Teambtn>KEVIN </Teambtn>
                <TeamDes>Master🚙 Transporter</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewFourB(true)}
                onMouseLeave={() => setIsViewFourB(false)}
              >
                {isViewFourB && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">☎️</Emoji>
                <Teambtn>LOYC3👩‍💻 </Teambtn>
                <TeamDes>D’Voyce</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewFiveB(true)}
                onMouseLeave={() => setIsViewFiveB(false)}
              >
                {isViewFiveB && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">📽️</Emoji>
                <Teambtn>MARGARET</Teambtn>
                <TeamDes>CopyDat</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setISViewEllevenD(true)}
                onMouseLeave={() => setISViewEllevenD(false)}
              >
                {isViewEllevenD && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">❄️</Emoji>
                <Teambtn>MARYANN</Teambtn>
                <TeamDes></TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewSixB(true)}
                onMouseLeave={() => setIsViewSixB(false)}
              >
                {isViewSixB && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🧛</Emoji>
                <Teambtn>MIKE</Teambtn>
                <TeamDes>Mr. DeX</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewSevenB(true)}
                onMouseLeave={() => setIsViewSevenB(false)}
              >
                {isViewSevenB && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🎭</Emoji>
                <Teambtn>PAUL</Teambtn>
                <TeamDes>Mr CeX</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewEightB(true)}
                onMouseLeave={() => setIsViewEightB(false)}
              >
                {isViewEightB && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="yeng"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">👁️</Emoji>
                <Teambtn>ROSE</Teambtn>
                <TeamDes>D’Eye</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewNineB(true)}
                onMouseLeave={() => setIsViewNineB(false)}
              >
                {isViewNineB && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">👩‍🔬</Emoji>
                <Teambtn>SHERI</Teambtn>
                <TeamDes>NumeRator</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewTenB(true)}
                onMouseLeave={() => setIsViewTenB(false)}
              >
                {isViewTenB && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🧑‍🍳</Emoji>
                <Teambtn>SIMIYU</Teambtn>
                <TeamDes>FoodG</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsViewTenC(true)}
                onMouseLeave={() => setIsViewTenC(false)}
              >
                {isViewTenC && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🌸</Emoji>
                <Teambtn>SYLVIA</Teambtn>
                <TeamDes>MsBizDev4Life</TeamDes>
              </TeamDev>
            </Fade>
          </TeamRows>

          <HeaderOne>NGENI Advisers</HeaderOne>
          <TeamAdviser>
            <Fade up>
              <TeamDev
                onMouseEnter={() => setISViewTenD(true)}
                onMouseLeave={() => setISViewTenD(false)}
              >
                {isViewTenD && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">👨🏿</Emoji>
                <Teambtn>TOM</Teambtn>
                <TeamDes>Adviser</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView1(true)}
                onMouseLeave={() => setIsView1(false)}
              >
                {isView1 && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji>🔌</Emoji>
                <Teambtn>YVONNE</Teambtn>
                <TeamDes>The Plug</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView2(true)}
                onMouseLeave={() => setIsView2(false)}
              >
                {isView2 && (
                  <Fade up>
                    <img
                      src={yeng}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🔥</Emoji>
                <Teambtn>ERIN</Teambtn>
                <TeamDes>d`Blazer</TeamDes>
              </TeamDev>
            </Fade>

            <Fade up>
              <TeamDev
                onMouseEnter={() => setIsView3(true)}
                onMouseLeave={() => setIsView3(false)}
              >
                {isView3 && (
                  <Fade up>
                    <img
                      src={jamaa}
                      alt="jamaa"
                      width="100%"
                      className="animate"
                    />
                  </Fade>
                )}
                <Emoji className="animate">🤘</Emoji>
                <Teambtn>NASSIM</Teambtn>
                <TeamDes>Blockchain OG</TeamDes>
              </TeamDev>
            </Fade>
          </TeamAdviser>
        </TeamContent>
      </TeamContainer>
    </>
  );
}

export default Team;

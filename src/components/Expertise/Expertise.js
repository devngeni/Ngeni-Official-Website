import React, { useState } from "react";

import {
  ExpertiseContainer,
  ExpertiseContents,
  ExpertiseRows,
  Expertsp,
  ExpertsH1,
  ExpertsBoxOne,
  ExpertsItems,
  Expertione,
  ExpertLogo,
  ExpertName,
  ExpertsBoxTwo,
  ExpertsBoxThree,
  Images,
  Content,
  Expertheading,
  ExpertTitle,
  ExpertBodyNew,
} from "./ExpertiseElements";
import { Fade } from "react-awesome-reveal";
import trading from "../../assets/images/trading/trading.b8f25ebe.svg";
// import search from "../../assets/images/trading/explorer.9dceb5de.svg";
import chain from "../../assets/images/trading/analytic.dab44a04.svg";
import custom from "../../assets/images/trading/custom.36d6bb6c.svg";
import mining from "../../assets/images/trading/mining.8ce73641.svg";
import wallet from "../../assets/images/trading/wallet.0cabcb6c.svg";
import smart from "../../assets/images/trading/smart.4f9b0448.svg";
import processing from "../../assets/images/trading/processing.ffaf9648.svg";
import ecommerce from "../../assets/images/trading/ecomerce.5db11373.svg";

import flat from "../../assets/images/trading/flatprocessing.svg";
import card from "../../assets/images/trading/cardprocessing.svg";
import integration from "../../assets/images/trading/integrated.svg";
import psd from "../../assets/images/trading/psd.svg";

import blockchain from "../../assets/images/blockchain.svg";
import fintech from "../../assets/images/fintech.svg";
import market from "../../assets/images/market.svg";
import blockchainexplorer from "../../assets/images/trading/BlockchainExplorer.svg";
import IdentityKYC from "../../assets/images/trading/identitykyc.svg";
import BotsDevelopment from "../../assets/images/trading/BotsDevelopment.svg";
import nftmarketplaces from "../../assets/images/trading/nftmarketplaces.svg";
import Nodesdeployment from "../../assets/images/trading/Nodesdeployment.svg";
import SideChainDevelopment from "../../assets/images/trading/SideChainDevelopment.svg";
import P2PTransactions from "../../assets/images/trading/P2PTransactions.svg";
import Defisolutions from "../../assets/images/trading/Defisolutions.svg";
import Creditscoring from "../../assets/images/trading/Creditscoring.svg";
import Marketplaces from "../../assets/images/trading/Marketplaces.svg";
import Bespokeblockchainplatform from "../../assets/images/trading/Bespokeblockchainplatform.svg";
import productivitytools from "../../assets/images/trading/productivitytools.svg";
import Arbitrage from "../../assets/images/Icons/Arbitrage.svg";
import automatingtradingalgorithms from "../../assets/images/Icons/automatingtradingalgorithms.svg";
import datacollectionorganisation from "../../assets/images/Icons/datacollectionorganisation.svg";
import highfrequencytrading from "../../assets/images/Icons/highfrequencytrading.svg";
import largescalebacktesting from "../../assets/images/Icons/largescalebacktesting.svg";
import multitasking from "../../assets/images/Icons/multitasking.svg";
import portfoliomanagement from "../../assets/images/Icons/portfoliomanagement.svg";
import quantitativetrading from "../../assets/images/Icons/quantitativetrading.svg";
import tradingautomation from "../../assets/images/Icons/tradingautomation.svg";
import specialsituations from "../../assets/images/trading/specialsituations.svg";
import artificialintelligence from "../../assets/images/trading/artificialintelligence.svg";
import Socialmedia from "../../assets/images/trading/Socialmedia.svg";
import deeplearning from "../../assets/images/trading/deeplearning.svg";
import chainanalysis from "../../assets/images/chainanalysis.svg";
import fiatpayments from "../../assets/images/fiatpayments.svg";
import web3 from "../../assets/images/webF.svg";

function Expertise() {
  const [isShown, setIsShown] = useState(false);
  const [isShowntwo, setIsShowntwo] = useState(false);
  const [isShownthree, setIsShownthree] = useState(false);
  const [isShownfour, setIsShownfour] = useState(false);

  return (
    <ExpertiseContainer>
      <ExpertiseContents>
        <Expertheading>
          <ExpertTitle>
            fOCUS <span>aREAS</span>
          </ExpertTitle>
          <ExpertBodyNew>
            <Expertsp>
              Building prominent applications, dApps, automation tools, plugins,
              bridges/gateways, wallets & bots for the world's hottest
              Blockchain Protocols, Institutional & Professional Markets
              Traders, FinTech platforms, and Cryptocurrency projects.
            </Expertsp>
          </ExpertBodyNew>
        </Expertheading>
        <ExpertiseRows>
          <ExpertsBoxThree style={{ borderTop: "0.1rem #202020 solid" }}>
            <Content>
              <ExpertsH1>Web3</ExpertsH1>
              <Expertsp>
                Web 3.0, often referred to as the decentralized web powering new
                and exciting industries such as Play-2-Earn, Metaverse &
                Cryptocurrencies, is the next evolution of the internet that
                leverages blockchain technology and is built on decentralized
                digital infrastructure and utilized by powerful distributed
                applications (dApps). As a Web3 Developer & Software Engineering
                Studio, the largest in East Afrika, we develop across four core
                areas FinTech, Blockchain, Markets & Exchange trading (Algorithm
                & Automation driven trades execution), and DeFi. Here at NGENI,
                we have been building dApps for Blockchain & Web3 since the
                'DeFi Summer' (2020) that aren't limited to a single cloud
                server but, are instead distributed on decentralized P2P
                networks & across nodes.
              </Expertsp>
            </Content>
            <Images>
              <img src={web3} alt="icon" width="120px" />
            </Images>
          </ExpertsBoxThree>

          <ExpertsBoxOne>
            <Images>
              <img src={blockchain} alt="icon" width="120px" />
            </Images>
            <Content>
              <ExpertsH1>BlockChain Development</ExpertsH1>
              <Expertsp>
                Blockchain is an innovative system for storing and transmitting
                information in the form of consecutive chains of transaction
                blocks. Blocks are included in a single database, which is
                automatically updated when each new transaction is committed.
                Think of it as a database that simultaneously runs on thousands
                of computers (known as nodes),ensuring that each of them has the
                most up-to-date information. Blockchain transforms familiar
                solutions into something entirely new, bringing powerful
                opportunities to enhance performance, reliability, user’s trust
                and loyalty, along with building a unique ecosystem for
                launching cutting edge tech that has never been done before .
              </Expertsp>
              <button
                style={{
                  backgroundColor: "#EC5646",
                  color: "white",
                  borderRadius: "14px",
                  padding: "5px",
                  border: "1px solid #EC5646",
                }}
                onClick={() => setIsShown(!isShown)}
              >
                {isShown ? "Close" : "More"}
              </button>
              {isShown && (
                <ExpertsItems>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={trading} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>CryptoCurrency Trading</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={processing} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>CryptoCurrency Processing</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={blockchainexplorer}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>BlockChain Explorer</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={smart} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Smart-Contract Development</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={mining} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Mining pool</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={wallet} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Wallets</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={ecommerce} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>E-commerce Crypto</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={chainanalysis} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Chain Analysis</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={fiatpayments} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Fiat Payment On-Off Ramps</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={Bespokeblockchainplatform}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Bespoke Blockchain Platform</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={BotsDevelopment}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Bots Development</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={Nodesdeployment}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Nodes Development</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={nftmarketplaces}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>NFT Marketplaces</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={SideChainDevelopment}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Side-Chain Development</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={Defisolutions} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>DeFi Solutions</ExpertName>
                    </Expertione>
                  </Fade>
                </ExpertsItems>
              )}
            </Content>
          </ExpertsBoxOne>

          <ExpertsBoxThree>
            <Content>
              <ExpertsH1>Markets Trading</ExpertsH1>
              <Expertsp>
                In today's markets trading world, buying or selling an asset is
                usually based on algorithms that analyze and interpret market
                data: trading volumes, number of orders, prices, and time. This
                is generally carried out on trading platforms which are online
                software applications that allow investors and traders to place
                orders for specific financial assets (equities/stocks, bonds,
                commodities, forex, CFDs, options) or digital assets
                (cryptocurrencies, non-fungible tokens &, etc.)
                <br />
                Developers (like ourselves), mathematicians, and analysts have
                provided the market trading industry with a helpful tool —
                trading bots that carry out operations automatically and at high
                speeds using embedded algorithms and provided data.
                Institutional & Professional Traders, brokers, Advance Retail,
                and investment funds can no longer go without bot developers
                because people cannot trade with small spreads at high speeds
                and concentration. Some people create strategies, others write
                algorithms, and bots trade using them — this is how trading
                works in the 21st century. At NGENI, we break down the
                complexities of investing and trading with intuitive tools that
                add automation, efficiency, simplicity, and merry seamlessly
                with alpha-generating trading logic.
              </Expertsp>
              <button
                style={{
                  backgroundColor: "#EC5646",
                  color: "white",
                  borderRadius: "14px",
                  padding: "5px",
                  border: "1px solid #EC5646",
                }}
                onClick={() => setIsShownthree(!isShownthree)}
              >
                {isShownthree ? "Close" : "More"}
              </button>
              {isShownthree && (
                <ExpertsItems>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={highfrequencytrading}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>High-Frequency Trading </ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={chain} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Decentralized Exchange Trading</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={custom} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Centralized Exchange Trading</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={Arbitrage} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Arbitrage</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={tradingautomation}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Trading Automation</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={portfoliomanagement}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Portfolio Management</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={datacollectionorganisation}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Data collection & organization</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={automatingtradingalgorithms}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Automating trading algorithms</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={largescalebacktesting}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Large-scale backtesting</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={quantitativetrading}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Quantitative trading</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={multitasking} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Multitasking</ExpertName>
                    </Expertione>
                  </Fade>
                </ExpertsItems>
              )}
            </Content>
            <Images>
              <img src={market} alt="icon" width="120px" />
            </Images>
          </ExpertsBoxThree>

          <ExpertsBoxTwo style={{ borderBottom: "0.1rem #202020 solid" }}>
            <Images>
              <img src={fintech} alt="icon" width="120px" />
            </Images>
            <Content>
              <ExpertsH1>FinTech Development</ExpertsH1>
              <Expertsp>
                Financial technology (FinTech) is the industry where financial
                companies and banks around the globe using innovative
                technologies operate, and conventional financial organizations
                cooperate with tech platforms and stacks. FinTech is a term that
                usually refers to software, mobile applications, and other
                technologies created to improve and automate traditional forms
                of finance. At NGENI, we can assist big enterprises with
                large-scale mobile banking & payments solutions or agile
                startups driven to transform mobile payments, stock trading,
                remittances, and the wider industry. Whatever it is, we are your
                partner on the journey of disruption.{" "}
              </Expertsp>
              <button
                style={{
                  backgroundColor: "#EC5646",
                  color: "white",
                  borderRadius: "14px",
                  padding: "5px",
                  border: "1px solid #EC5646",
                }}
                onClick={() => setIsShowntwo(!isShowntwo)}
              >
                {isShowntwo ? "Close" : "More"}
              </button>
              {isShowntwo && (
                <ExpertsItems>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={flat} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Fiat Processing</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={card} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Card Processing</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={IdentityKYC} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Identity (KYC) </ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={P2PTransactions}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>P2P Transactions</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={Creditscoring} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Credit Scoring</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={Marketplaces} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>MarketPlaces</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={wallet} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Digital/Mobile Wallet</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={psd} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>PSD2</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={integration} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Core Banking Intergration</ExpertName>
                    </Expertione>
                  </Fade>
                </ExpertsItems>
              )}
              More
            </Content>
          </ExpertsBoxTwo>

          <ExpertsBoxThree>
            <Content>
              <ExpertsH1>Special Situations</ExpertsH1>
              <Expertsp>
                Internal and personal projects. Basically, things we like. Check
                out our Git Repositories to have a peek at some cool stuff.
                That's it!
              </Expertsp>
              <button
                style={{
                  backgroundColor: "#EC5646",
                  color: "white",
                  borderRadius: "14px",
                  padding: "5px",
                  border: "1px solid #EC5646",
                }}
                onClick={() => setIsShownfour(!isShownfour)}
              >
                {isShownfour ? "Close" : "More"}
              </button>
              {isShownfour && (
                <ExpertsItems>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={Socialmedia} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Social Media</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={deeplearning} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Deep Learning</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={artificialintelligence}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Artificial Intelligence</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img src={custom} alt="engineer" width="40px" />
                      </ExpertLogo>
                      <ExpertName>Metaverse</ExpertName>
                    </Expertione>
                  </Fade>
                  <Fade direction="up">
                    <Expertione>
                      <ExpertLogo>
                        <img
                          src={productivitytools}
                          alt="engineer"
                          width="40px"
                        />
                      </ExpertLogo>
                      <ExpertName>Productivity Tools</ExpertName>
                    </Expertione>
                  </Fade>
                </ExpertsItems>
              )}
            </Content>
            <Images>
              <img src={specialsituations} alt="icon" width="120px" />
            </Images>
          </ExpertsBoxThree>
        </ExpertiseRows>
      </ExpertiseContents>
    </ExpertiseContainer>
  );
}

export default Expertise;

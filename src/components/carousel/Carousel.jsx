import React from "react";
import Styled from "./CarouselElement";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import Jay from "../../assets/images/carousel/Jay.jpg";
import Betty from "../../assets/images/carousel/Betty.JPG";
import Dennoh from "../../assets/images/carousel/Dennoh.jpg";
import George from "../../assets/images/carousel/george.JPG";
import Omambia from "../../assets/images/carousel/omambia.jpg";
import vincent from "../../assets/images/carousel/vincent.jpg";
import Enock from "../../assets/images/carousel/Enock.jpg";
import Dennis from "../../assets/images/carousel/Dennis.JPG";
import Henry from "../../assets/images/carousel/Henry.JPG";
import Renny from "../../assets/images/carousel/Renny.jpg";
import Cornelious from "../../assets/images/carousel/cornelius.JPG";
import nick from "../../assets/images/carousel/nick.JPG";
import taylor from "../../assets/images/carousel/taylor.jpg";
import Alex from "../../assets/images/carousel/Alex.jpg";
import pius from "../../assets/images/carousel/pius.JPG";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/effect-fade/effect-fade";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function CarouselTeam() {
  return (
    <Styled.CarouselContainer>
      <Styled.CarouselBody>
        <Swiper
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Jay} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              JAMES.<span>EthersJay💥</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Python, Django, Solidity, NodeJS <span>&</span> Web3.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Betty} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              BETTY.<span>NFT Queen👑</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Java, Node JS, Javascript, Solidity <span>&</span> ReactJS.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Dennoh} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              DENNIS.<span>Rust’edSoul🪙</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Python, Solidity, Teal, Rust, PineScript, Typescript, Javascript,
              Java, Elixir <span>&</span> Reach.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={George} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              GEORGE.<span>AvalancheKing⚡</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Typescript, Node JS, Flutter, Web3, Rust <span>&</span> Solidity.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Omambia} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              OMAMBIA.<span>Pyther🐍</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Javascript, Typescript, Python, Golang, Solidity <span>&</span>{" "}
              Flutter.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={vincent} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              VINCENT.<span>DevOps4Life🕸️</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Python, JavaScript, solidity, web 3, C <span>&</span> C++.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Dennis} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              DENNIS.<span>dAPPsKing🤖</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Typescript, Reactjs, Nodejs, web3.0, Python, Solidity, PineScript{" "}
              <span>&</span> AppScript
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Enock} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              ENOCK.<span>NodesG🛠️</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Nodejs, Web3, Typescript, Solidity, EOSIO, GraphQL <span>&</span>{" "}
              MongoDb.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Henry} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              HENRY.<span>PinkBot👨🏽‍🎤</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Typescript, NodeJS, Javascript, Web3 <span>&</span> Solidity.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Renny} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              RENNY.<span>0xPub.dev💎</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Flutter, Dart, JavaScript, React, Node JS, Java, Kotlin,
              TypeScript, Web3 <span>&</span> Solidity.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Cornelious} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              CORNELIUS.<span>Mobile Chief📲</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Flutter, JavaScript, React, Node JS, Ionic, Typescript, Web3{" "}
              <span>&</span>
              Solidity.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={nick} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              NICOLAS.<span>Tinker🌐</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Javascript, Typescript, Python <span>&</span> Solidity.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={taylor} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              TAYLOR.<span>TDjango🚀</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Python, React, Node, Typescript <span>&</span> Solidity.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={Alex} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              ALEX.<span>FaBriCator🗓️</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Python, Django, Javascript, React JS <span>&</span> Material UI.
            </Styled.CarouselText>
          </SwiperSlide>

          <SwiperSlide>
            <Styled.CarouselImage>
              <img src={pius} alt="Styled.carousel" />
            </Styled.CarouselImage>
            <Styled.CarouselHeader>
              PIUS.<span>Investor💹</span>
            </Styled.CarouselHeader>
            <Styled.CarouselText>
              Python, Solidity, React JS, Typescript <span>&</span> MongoDB.
            </Styled.CarouselText>
          </SwiperSlide>
        </Swiper>
      </Styled.CarouselBody>
    </Styled.CarouselContainer>
  );
}

export default CarouselTeam;

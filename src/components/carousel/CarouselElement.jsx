import styled from "styled-components";

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;
const CarouselBody = styled.div`
  width: 100%;
  height: 20em;
  display: flex;
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    justify-content: center;
  }
  @media screen and (min-width: 768px) {
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 425px) {
    justify-content: center;
    display: grid;
  }
`;
const CarouselDiv = styled.div`
  width: 328px;
  background-color: #000;
  border-radius: 16px;
  border: 1px solid #ec5646;
  padding: 20px;
  @media screen and (min-width: 768px) {
    width: 470px;
    height: 10em;
    padding: 20px;
  }
`;
const CarouselHeader = styled.div`
  font-size: 18px;
  font-family: Poppins;
  font-weight: 800;
  color: #ec5646;
  span {
    color: #fbcc5c;
  }
`;
const CarouselLabel = styled.div`
  font-family: Poppins;
`;
const CarouselMain = styled.div`
  font-family: Poppins;
`;
const CarouselText = styled.div`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 600;
  color: #fff;
  span {
    color: #ec5646;
  }
`;
const CarouselImage = styled.div`
  width: 100%;
`;
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  CarouselContainer,
  CarouselBody,
  CarouselDiv,
  CarouselHeader,
  CarouselLabel,
  CarouselMain,
  CarouselText,
  CarouselImage,
};

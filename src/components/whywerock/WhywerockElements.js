import styled from "styled-components";

export const WerockContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: space-between;
  align-items: bottom;
  border-bottom: 0.1rem #202020 solid;
`;

export const WerockContents = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 2fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-bottom: 3rem;
  color: white;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 1rem;
  }
`;

export const WerockHeader = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  padding-bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;

`;

export const WerockH1 = styled.h1``;

export const Werockp = styled.p``;

export const CryptoColTwo = styled.div``;

export const CryptoBox = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-bottom: 3rem;
  color: white;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: minmax(auto, 1fr);
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 1rem;
  }
`;

export const CryptoBoxEx = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-bottom: 3.5rem;
  color: white;
  border-left: 1px solid #202020;
  padding-left: 3rem;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: minmax(auto, 1fr);
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 1rem;
    border-left: none;
    padding-left: 0rem;
  }
`;

export const CryptoBoxtwo = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 150px;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    padding-top: 1rem;
    border-left: none;
    padding-left: 0rem;
  }
`;
export const CryptoBoxone = styled.div`
align-items: center;
height: 100px;
`;

export const CryptoImg = styled.div``;

export const CryptoCounter = styled.div`
  padding-left: 1rem;

  @media screen and (max-width: 960px) {
    border-left: none;
    padding-left: 0rem;
  }
`;

export const WerockHeaderTwo = styled.div``;

export const CryptoColThree = styled.div``;

export const CryptoImgtwo = styled.div``;

export const CryptoColumn = styled.div`
width: 100%;
`;
export const CryptoColumnLeft = styled.div`
width: 100%
`;

export const Eyes = styled.div`
  font-weight: 800;
  font-size: 2rem;
  position: center !important;
  span {
    color: #EC5646;
  }
`;

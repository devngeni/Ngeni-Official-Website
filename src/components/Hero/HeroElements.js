import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: 80px;
  color: #fff;
  /* border-bottom: 0.1rem #202020 solid; */

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.5) 0%,
        rgba(0, 0, 0, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.4) 100%);
  }

  @media screen and (max-width: 960px) {
    height: 80vh;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 0.1rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: 1300px;
  z-index: 3;
  padding: 0 1rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    margin: 0.25rem;
  }
`;

export const HeroText = styled.div`
  display: grid;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-with: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: start;
    align-items: start;
    text-align: start;
    justify-content: start;
  }
`;

export const HeroH1 = styled.div`
  color: white;
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  text-align: left;
  line-height: 4rem;

  span {
    color: #EC5646;
  }

  button {
    background-color: #EC5646;
  }

  @media screen and (max-width: 960px) {
    /* display: flex; */
    /* flex-direction: column-reverse; */
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
    font-size: 2.25rem;
  }
`;

export const HeroImg = styled.div`
width: 80%;
height: 75%;
display: flex;
font-family: Poppins;
flex-direction: column-reverse;
align-content: right;
align-items: right;
text-align: right;
justify-content: right;
justify-self: flex-end;
  :hover {
    transform: scale(1.2);
    transition: all ease-in-out 0.5s;
  }

  img {
    width: 100%;
    text-align: right;
    align-items: right;
    align-content: right;
    justify-self: flex-end;
    z-index: 1;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;

    img {
      width: 100%;
      border-raidus: 50%;
      margin: 1rem;
    }
  }
`;

export const TextBtn = styled.div`
display: grid;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
color: white;

button {
        background-color: #EC5646;
        border-radius: 6px
        color: #ffff;
      }


@media screen and (max-with: 960px) {
  display: flex;
  flex-direction: column-reverse;
}
`;

import styled from "styled-components";
import bg from "../../assets/images/bg.svg";

export const IntroContainer = styled.div`
  margin-bottom: 3rem;
  margin-top: 3rem;
  background: url(${bg});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 3rem;
  /* border-top: 1px #d21f3c solid; */
  /* border-width: thin; */

  @media screen and (max-width: 960px) {
    padding: 1rem;
    /* display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    margin: 1rem; */
    /* height: 100vh; */
    /* background: url(${bg});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat; */
  }
`;
export const Picha = styled.div`
  text-align: left;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: 1300px;
  padding: 0 24px;
  z-index: 3;
  align-content: center;
  img {
    width: 330px;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    padding: 0 24px;

    img{
      width: 350px;
    }
  }
`;

export const IntroContent = styled.div`
  text-align: left;
  align-items: center;
  justify-content: center;
  justify-items: center;
  max-width: 1300px;
  padding: 0 24px;
  z-index: 3;
  align-content: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    padding: 0 24px;
  }
`;

export const IntroImg = styled.div`
  align-items: center;
  text-align: left;
  justify-content: center;

  :hover {
    transform: scale(1.1);
    transition: all ease-in-out 0.5s;
  }
`;

export const IntroHeading = styled.h1`
  color: #EC5646;
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  line-height: 2rem;
  /* display: flex; */
  /* flex-direction: column-reverse;
  align-content: center;
  align-items: center; */
  text-align: left;
  justify-content: center;

  span {
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;

export const IntroBody = styled.p`
  color: white;
  font-size: 1.25rem;
  line-height: 1.8rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  align-content: center;
  align-items: center;
  text-align: left;
  padding-top: 1rem;
  a {
    color: #EC5646;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
    display: contents;
    text-decoration: underline dotted red;
  }

  a:hover {
    color: #fff;
  }

  span {
    font-weight: 900;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const IntroContentTwo = styled.div``;
export const IntroContentThree = styled.div``;
export const IntroRow = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1.5fr 1.25fr 1.25fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: 3rem;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
  }
`;

export const IntroFooter = styled.p`
  /* background-color: #d21f3c; */
  font-size: 1.4rem;
  font-weight: 600;
  color: #EC5646;
  text-align: left;

  a {
    color: #EC5646;
    text-decoration: underline dotted red;
  }

  a:hover {
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    padding: 0px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #EC5646;
    text-align: left;
    display: flex;
  }
`;

export const TeaColOne = styled.div`
  color: white;
  text-align: center;
  border: 1px solid #EC5646;
  border-radius: 10px;
  padding: 2rem;
  background-color: #000;

  :hover {
    background-color: #EC5646;
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;

export const Teaheader = styled.h1`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
`;

export const Teabody = styled.h1`
  font-size: 1.25rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  width: fit-content;

  span {
    font-size: 1.25rem;
  }
`;

export const TeaColTwo = styled.div`
  color: white;
  text-align: center;
  border: 1px solid #EC5646;
  border-radius: 10px;
  padding: 2rem;
  background-color: #000;

  :hover {
    background-color: #EC5646;
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;
export const CarouselDiv = styled.div`
  width: 330px;
  height: 75%;
  display: grid;
  font-family: Poppins;
  justify-content: center;
  text-align-last: center;
  transition: ease-in-out;
  img {
    width: 140px;
    height: 150px;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    align-content: center;
    z-index: 1;
  }
  img:before
  {
      display:block;
      content:'';
      position:absolute;
      width:100%;
      height:100%;
      -moz-box-shadow:inset 0px 0px 6px 6px rgba(255, 255, 255, 0.135);
      -webkit-box-shadow:inset 0px 0px 6px 6px rgba(255, 255, 255, 0.135);
      box-shadow:inset 0px 0px 6px 6px rgba(255, 255, 255, 0.135);
  }
`;

export const CarouselBody = styled.div`
width: 100%;
display: flex;
justify-content: center;
@media screen and (min-width: 768px) {
  justify-content: start;
  padding: 20px;
}
`;

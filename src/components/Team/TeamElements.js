import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  margin-top: 5rem;

  @media screen and (max-width: 960px) {
    margin-top: 2rem;
  }
`;

export const TeamContent = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;
`;
export const TeamHeader = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;

  img {
    width: 800px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    justify-items: left;

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
    }
  }
`;
export const TeamAdviser = styled.div`
display: grid;
grid-gap: 3rem;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
margin-top: 3rem;
margin-bottom: 3rem;
color: white;
width: 100%;
transition: all ease-in-out 0.5s;
border: 1px solid red;
padding: 3rem;
border-radius: 1rem;

@media screen and (max-width: 960px) {
  display: grid;
  grid-gap: 1rem;
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
export const TeamWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  color: white;
  width: 100%;
  padding-bottom: 2rem;
  border-bottom: 0.1rem #202020 solid;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
`;

export const TeamRows = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: white;
  width: 100%;
  transition: all ease-in-out 0.5s;
  border: 1px solid red;
  padding: 3rem;
  border-radius: 1rem;

  @media screen and (max-width: 960px) {
    display: grid;
    grid-gap: 1rem;
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

export const TeamH1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  /* color: white; */
  line-height: 3.7rem;
  color: #EC5646;
  transition: ease-in-out all 5s;

  span {
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    font-size: 6rem;
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    font-weight: 900;
    font-size: 3rem;

    span {
      font-family: "Poppins", sans-serif;
      font-weight: 900;
      font-size: 3rem;
      color: #fff;
    }
  }
`;

export const Teamp = styled.p`
  color: white;
  transition: ease-in-out all 5s;
  font-size: 1.1rem;
  font-weight: 300;

  span {
    font-weight: 800;
    color: grey;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 960px) {
    font-weight: 200;
    font-size: 1rem;
    text-align: center;
  }
`;
export const TeamDev = styled.div`
  /* padding: 1rem; */
  /* color: #000;
  font-size: 1.2rem;
  font-weight: 200; */
  img {
    transition: all ease-in-out 0.5s;
  }

  /* :hover {
    background-color: #d21f3c;

    cursor: pointer;
    transition: all ease-in-out 0.5s;

    color: #000;
  } */

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const Teambtn = styled.div`
  color: white;
  text-align: left;
  font-weight: 600;
  font-size: 1.2rem;
  /* padding: 0.5rem; */
  color: #fff;

  @media screen and (max-width: 960px) {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    font-weight: 200;
    font-size: 1rem;
    text-align: center;
  }
`;

export const TeamDes = styled.div`
  color: grey;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 200;

  :hover {
    color: #fff;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    font-weight: 200;
    font-size: 1rem;
    text-align: center;
  }
`;

export const Emoji = styled.div`
  font-size: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    font-weight: 200;
    font-size: 1rem;
    text-align: center;
  }
`;

export const HeaderOne = styled.div`
  font-size: 1.5rem;
  color: #fff;

  span {
    color: #EC5646;
    font-weight: 900;
  }

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
    font-weight: 200;
    font-size: 1.2rem;
    text-align: center;
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


@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column-reverse;
} 
`;
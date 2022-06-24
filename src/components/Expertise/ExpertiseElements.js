import styled from "styled-components";

export const ExpertiseContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: bottom;
  margin-top: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 960px) {
    margin-top: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ExpertiseContents = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;
`;

export const ExpertiseRows = styled.div`
  width: 100%;
  /* max-width: 1300px; */
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
  align-items: bottom;
`;

export const ExpertsH1 = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 2rem;
  color: #EC5646;
  transition: ease-in-out all 1s;
  span {
    padding: 5px;
  }

  span1 {
    color: white;
  }
`;
export const Expertsp = styled.div`
  color: white;
  transition: ease-in-out all 1s;
  font-weight: 150;

  span {
    color: #EC5646;
    font-weight: 900;
    font-size: 1.5rem;
    padding-left: 0.5rem;
  }
`;
export const ExpertsBoxOne = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 0.5fr 3.5fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-bottom: 0.1rem #202020 solid;
  padding-bottom: 3rem;
  padding-top: 3rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    margin: 0.25rem;
  }
  margin-bottom: 2rem;
`;

export const ExpertsBoxTwo = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 0.5fr 3.5fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding-bottom: 3rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: center;
    border-bottom: 0.1rem #202020 solid;
  }
  margin-bottom: 2rem;
`;

export const ExpertsBoxThree = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 3.5fr 0.5fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  justify-content: center;
  justify-items: center;
  border-bottom: 0.1rem #202020 solid;
  padding-bottom: 3rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-content: center;
    align-items: center;
    text-align: left;
    justify-content: left;
    margin: 0.25rem;
  }
  margin-bottom: 2rem;
`;

export const Images = styled.div``;

export const Content = styled.div``;

export const ExpertsIcons = styled.div`
  :hover {
    /* transform: scale(1.075); */
    transition: ease-in-out all 1s;
    margin-bottom: 3rem;

    /* border-radius: 0.5rem; */
    text-align: left;
  }
`;

export const ExpertsItems = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-bottom: 1rem;
  color: white;
  transition: ease-in-out all 2s;
  padding-bottom: 2rem;

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
    transition: ease-in-out all 2s;
  }
`;

export const Expertione = styled.div``;
export const ExpertLogo = styled.div``;
export const ExpertName = styled.div``;
export const ExpertImase = styled.div`
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: bottom;
  align-content: center;
  width: 100%;
  max-width: 500px;
`;

export const ExpertiseIntroduction = styled.div`
  margin-top: 2rem;
  width: 100%;
  /* max-width: 1000px; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;
  margin-bottom: 3rem;
  /* border-bottom: solid 1px #EC5646; */

  img {
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: bottom;
    align-content: center;
    width: 100%;
    max-width: 600px;
  }
`;
export const ExpertiseHeaderIntro = styled.div`
  color: #EC5646;
  font-size: 3rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: left;
  justify-content: center;
  text-align: center;
  padding-top: 3rem;

  @media screen and (max-width: 960px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;
export const ExpertiseBodyIntro = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: left;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const Expertheading = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 3fr;
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
  }
`;
export const ExpertTitle = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  /* color: white; */
  line-height: 3.5rem;
  color: #EC5646;
  transition: ease-in-out all 1s;

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
export const ExpertBodyNew = styled.div`
  color: white;
  transition: ease-in-out all 1s;
  font-size: 1.1rem;
  font-weight: 200;
`;

export const ExpertTech = styled.div`
  /* width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: bottom;
  margin-top: 3rem;
  border: 1px solid #EC5646; */
`;
// export const ExpertTechIcon = styled.div`
//   :hover {
//     transition: all ease-in-out 0.5s;
//     transform: scale(1.5);
//   }
// `;

// export const ExpertTechHolder = styled.div`
//   padding-top: 2rem;
//   display: grid;
//   grid-gap: 2rem;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   grid-auto-columns: minmax(auto, 1fr);
//   align-items: center;
//   margin-bottom: 1rem;
//   color: white;
//   transition: ease-in-out all 2s;
//   padding-bottom: 2rem;
//   text-align: center;

//   @media screen and (max-width: 960px) {
//     display: grid;
//     grid-gap: 2rem;
//     grid-template-columns: 1fr 1fr;
//     grid-auto-columns: minmax(auto, 1fr);
//     align-content: center;
//     align-items: center;
//     text-align: center;
//     justify-content: center;
//     margin-right: auto;
//     margin-left: auto;
//     width: 100%;
//     transition: ease-in-out all 2s;
//   }
// `;
// export const ExpertTechTitle = styled.div`
//   font-weight: 100;
//   font-size: 2rem;
//   color: #fff;
//   text-align: center;
//   padding: 2rem;
// `;

export const ExpertPara = styled.div`
  /* color: #fff;
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  display: flex;
  flex-direction: column-reverse;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
    margin-top: 1rem;
  } */
`;

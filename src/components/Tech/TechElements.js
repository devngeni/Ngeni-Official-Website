import styled from "styled-components";

export const TechContainer = styled.div`
  align-items: center;
  justify-content: center;
  justify-items: space-evenly;
  align-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export const TechRow = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const TechHeader = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 3fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem #202020 solid;
  margin-bottom: 3rem;

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

export const TechTitle = styled.div`
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

export const TechBody = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  font-size: 1.25rem;
  color: #fff;
`;

export const TechIcons = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  color: white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.1rem #202020 solid;
  margin-bottom: 3rem;

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

export const TechImage = styled.div`
  padding-right: 1rem;
`;

export const TechName = styled.div`
`;

export const Techwrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: flex;
`;

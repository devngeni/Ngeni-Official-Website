import styled from "styled-components";

export const ProcessContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 1rem 1rem;
`;
export const ProcessDiv = styled.div`
  display: grid;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  padding-top: 3rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
  }
`;
export const ProcessText = styled.div`
  display: grid;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1em;
  margin-bottom: 1em;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-gap: 0.1rem;
    grid-template-columns: 1fr 2fr;
    grid-auto-columns: minmax(auto, 1fr);
    margin-left: 3em;
    margin-right: 2em;
    margin-top: 3em;
    margin-bottom: 2em;
  }
`;
export const ProcessImage = styled.div`
  width: 100%;
  justify-content: center;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-top: 3em;
  }
`;
export const ProcessHeader = styled.div`
  color: white;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  line-height: 2rem;
  padding-bottom: 20px;
  justify-content: center;
  text-align-last: center;
  padding-top: 5px;
  display: flow-root;
  span {
    color: #ec5646;
  }

  button {
    background-color: #ec5646;
  }

  @media screen and (min-width: 768px) {
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
    font-size: 2.25rem;
  }
`;

export const ProcessH1 = styled.div`
  font-size: 16px;
  font-weight: 200;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    line-height: 2rem;
    justify-content: center;
    font-size: 18px;
  }
`;

export const ProcessBody = styled.div`
padding-top: 30px;
`;

export const ProcessCard = styled.div`
font-family: Poppins;
color: #fff;
a {
    color: #EC5646;
    font-size: 18px;
    font-weight: 800;
}
`;
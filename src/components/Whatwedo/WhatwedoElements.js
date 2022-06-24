import styled from "styled-components";
import bg from "../../assets/images/bg.svg";

export const WhatwedoContainer = styled.div`
  /* background: url(${bg}); */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 0.1rem #202020 solid;
  margin-top: 2rem;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  margin-top: 1rem;
`;

export const Tab  = styled.div`
align-self: end;
span {
  font-weight: 600;
}
`;
export const Code = styled.div`
padding-right: 4px;
`;
export const Tldr = styled.div`
display: inline-flex;

ExternalLink {
  paddind-top: 13px;
}
`;
export const Hello = styled.div``;
export const WhatwedoRow = styled.div`
  /* width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  margin-top: 1rem; */
`;  

export const WhatwedoHeader = styled.div`
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
  /* border-bottom: 1px dotted #EC5646; */

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

export const Title = styled.div`
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

export const Mainbody = styled.div`
  color: white;
  transition: ease-in-out all 1s;
  font-size: 1rem;
  font-weight: 200;

  small {
    font-size: 0.75rem;
    cursor: pointer;
  }

  span {
    font-weight: 800;
    color: white;
    font-size: 1rem;
  }


  @media screen and (max-width: 960px) {
    font-weight: 200;
    font-size: 1rem;
  }
`;

export const ContentBody = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: top;
  justify-content: center;
  justify-items: center;
  z-index: 3;

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
export const ContentOne = styled.div`
  color: white;
  transition: ease-in-out all 1s;
  font-size: 1rem;
  font-weight: 200;
`;
export const ContentOneImage = styled.div`
  margin-bottom: 1rem;
`;
export const ContentOneHeader = styled.div`
  color: #EC5646;
  transition: ease-in-out all 1s;
  font-size: 2rem;
  font-weight: 900;
  line-height: 2rem;
  padding-bottom: 1.5rem;
`;
export const ContentOneBody = styled.div``;
export const ContentOneButton = styled.div`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 900;
  line-height: 1rem;
  margin-top: 1rem;
`;

export const FooterRow = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  color: white;
  width: 100%;
  padding-bottom: 2rem;
  /* border-bottom: 1px dotted #EC5646; */

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
export const FooterContent = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: left;
  justify-content: center;
  border: 1px solid #EC5646;
  padding: 1rem;
  border-radius: 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  :hover {
    background-color: #EC5646;
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;

export const FooterContentOne = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: left;
  justify-content: center;
  border: 1px solid #EC5646;
  padding: 1rem;
  border-radius: 1rem;

  @media screen and (max-width: 960px) {
    text-align: center;
    width: 330px;
  }

  :hover {
    background-color: #EC5646;
    transition: all ease-in-out 0.5s;
    transform: scale(1.2);
  }
`;
export const FooterImage = styled.div`
  font-size: 3rem;
  color: #EC5646;
  margin-bottom: 1rem;

  :hover {
    transition: all ease-in-out 0.5s;
    color: white;

    a {
      color: #000;
    }
  }
`;
export const FooterHeader = styled.div`
  font-weight: 200;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

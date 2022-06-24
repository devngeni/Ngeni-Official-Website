import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 3rem 3rem;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
  /* border-top: solid 1px #d21f3c; */
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;

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
export const ServiceTwo = styled.div`
  display: flex;
  /* grid-gap: 3rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr); */
  align-items: center;
  /* margin-bottom: 1rem; */
  color: white;
  text-align: center;
  /* background-color: #d21f3c;
  border-radius: 20px;
  padding: 3rem;
  height: 40vh; */

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
export const Phone = styled.div`
  display: inline-flex;
`;
export const Phone2 = styled.div`
width: 22px;
`;
export const Phone1 = styled.div``;
export const ServiceOne = styled.div``;
export const ServiceImg = styled.div`
  color: white;
  img {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 1.5rem;
  }
  @media screen and (max-width: 960px) {
    img {
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

export const Servp = styled.div`
  text-align: center;
  padding-top: 0.5rem;
  font-size: 2rem;
  color: #EC5646;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  a {
    padding: 10px;
  }
`;

export const ServiceBodyOne = styled.div`
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
`;

export const ServiceBtn = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  padding: 0.75rem 3rem;
  margin-right: auto;
  margin-left: auto;
  border-radius: 2rem;
  border: 2px solid #EC5646;
  margin-top: 2rem;

  :hover {
    background-color: #EC5646;
    color: #fff;
  }
  Lin:hover {
    color: #fff;
  }
`;

export const ServiceModal = styled.div`
  z-index: 10000;
`;

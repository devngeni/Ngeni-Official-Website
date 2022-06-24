import styled from "styled-components";
// import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  background-color: #000;
  padding: 1rem 1rem;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  border-top: 1px solid #EB5746;
  align-items: center;
`;

export const FooterLeft = styled.div`
  font-weight: 200;
`;

export const FooterRight = styled.div`
  text-align: right;
  font-weight: 200;

  @media screen and (max-width: 960px) {
    text-align: center;
  }
`;

export const FooterRows = styled.div`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  color: white;
  padding: 1rem 1rem;

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
    margin-bottom: 4rem;
  }
`;

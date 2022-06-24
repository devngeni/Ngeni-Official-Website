import styled from "styled-components";

export const ContactsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
  padding: 3rem 3rem;
  width: 100%;
  padding: 0 10px;
`;

export const ContactsHeader = styled.div`
  color: #fff;
  display: flow-root;
  align-items: center;
  margin-right: 2rem;
  margin-left: 2rem;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
  text-align: center;
  line-height: 2rem;
  span {
    color: #ec5646;
  }
  @media screen and (min-width: 768px) {
    color: white;
    font-size: 2.3rem;
    font-family: "Poppins", sans-serif;
    font-weight: 900;
    text-align: left;
    line-height: 3rem;
    display: flow-root;
    margin-left: 25rem;
    margin-right: 25rem;
    justify-content: center;
  }
`;
export const ContactsContents = styled.div`
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
export const ContactsRows = styled.div`
  width: 100%;
  justify-content: center;
  display: grid;
  @media screen and (min-width: 768px) {
    width: 100%;
    justify-content: center;
    text-align: center;
    display: grid;
  }
`;

export const ContactsImage = styled.div`
  button {
    border: 2px solid #ec5646;
    border-radius: 2rem;
    padding: 0.75rem 2rem;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    justify-content: center;
    color: #fff;
    margin: 2rem;
    width: 330px;
    height: 3em;
    background: none;
  }
    button:hover {
      background-color: #ec5646;
      color: #fff;
    }
  }
  @media screen and (min-width: 768px) {
    button {
      height: 3em;
      text-align: center;
      justify-content: center;
      display: grid;
      font-size: 20px;
      font-weight: 600;
      color: #fff;
    }
  }
`;
export const ContactsClass = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
`;
export const ContactsForms = styled.div`
  display: grid;
  justify-content: center;
`;

export const ContactsDiv = styled.div`
  display: flow-root;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    height: 7em;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: left;
    font-size: 20px;
    font-weight: 600;
    color: #fff;
  }
`;
export const ContactsBody = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-family: "Poppins";
  font-weight: 100;
  display: grid;
  justify-content: center;
  text-align-last: center;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    margin-top: 1rem;
    width: 100%;
    display: grid;
  }
`;
export const ContactsIcons = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 300px;
  justify-content: start;
  text-align-last: last;
  padding: 5px;
  display: inline-flex;
`;
export const ContactsTextArea = styled.div`
  display: grid;
  color: #fff;
  Label {
    text-align-last: start;
    font-weight: 800;
    color: #696969;
    font-size: 18px;
  }
  textarea {
    height: 10em;
    font-size: 16px;
    font-family: Poppins;
    background-color: #0000;
    border: 1px solid #ec5646;
    color: #fff;
    text-align-last: start;
    padding: 10px;
  }
`;
export const ContactProfile = styled.div`
  font-family: Poppins;
  font-size: 16px;
  display: grid;
  width: 330px;
  padding-bottom: 20px;
  padding-top: 10px;
  Label {
    text-align-last: start;
    font-size: 20px;
    font-weight: 800;
    color: #696969;
  }

  input {
    background-color: transparent;
    border: 1px solid #ec5646;
    font-size: 16px;
    text-align-last: start;
  }
`;
export const ContentsBoxOne = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  img {
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: center;
    justify-items: center;
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
    }
  }
`;

export const ContactForm = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
`;

import styled from 'styled-components'

export const Container = styled.div`
display: grid;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
color: white;
`;
export const Header = styled.div`
font-weight: bold;
font-size: 1.5rem;
font-family: "Gill Sans", sans-serif;
color: white;
Text-align-last: center;
display: flex;
padding-top: 10px;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
`;

export const TextArea = styled.div`
font-family: "Gill Sans", sans-serif;
font-size: 1rem;
text-align: start;
margin: 10px;
`;
export const Label = styled.div`
display: column;
Text-align-last: center;

username {
    padding: 40px;
}
`;
export const Name = styled.div`
border: 1px solid #EC5646;
margin: 30px;
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
export const NameText = styled.div``;
export const Email = styled.div``;
export const Confirm = styled.div``;
export const Password = styled.div``;
export const Mobile = styled.div`
padding-top: 75px; 
`;

export const Registered = styled.div`
`;
export const RegisterText = styled.div`
font-family: "Gill Sans", sans-serif;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;
margin: 10px;
`;
import React, { useState } from "react";
import {
  Container,
  Header,
  Label,
  Name,
  Password,
  Mobile,
  TextBtn,
  Registered,
  RegisterText,
} from "./SigninElement";
import { Link } from "react-router-dom";
import teamb from "../../assets/images/teamb.svg";
function SignIn() {
  const [userData, setUserData] = useState({ password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
  console.log("auth", localStorage.getItem("isAuthenticated"));

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
      }));
    } else if (
      userData.password === "ngeni.io"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/team";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({ value: "password" }));
    }
  };
  return (
    <Container>
      <Mobile>
        <img
          src={teamb}
          alt="team"
          display="flex"
          margin-left="auto"
          margin-right="auto"
          height="200px"
        />
      </Mobile>
      <Header>Code Please...</Header>
      <form className={Label}>
        <Password style={{ padding: "10px" }}>
          <input
            type="password"
            name="password"
            placeholder="Enter Code"
            className={Name}
            onChange={handleInputChange}
          />
        </Password>

        <TextBtn>
          <button
            className="obato"
            style={{
              color: "white",
              border: "none",
              padding: "10px",
              borderRadius: "15px",
              width: "200px",
              fontWeight: "bold",
            }}
            type="submit"
            onClick={handleSubmit}
          >
            Proceed
          </button>
          {errorMessage.value && (
            <p className="text-danger"> {errorMessage.value} </p>
          )}
        </TextBtn>
      </form>
      <Registered>
        <RegisterText style={{ display: "inline-flex" }}>
          Don't Have Code?
          <Link
            to="/contacts"
            style={{
              color: "#EC5646",
              textDecoration: "none",
              fontWeight: "bold",
              paddingLeft: "5px",
            }}
          >
            Hit Us Up
          </Link>
        </RegisterText>
      </Registered>
    </Container>
  );
}

export default SignIn;

import React from "react";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
// import Teasers from "../components/Teasers/Teasers";
// import About from "../components/About/About";
import Crypto from "../components/Crypto/Crypto";
import CookieConsent from "react-cookie-consent";
import Expertise from "../components/Expertise/Expertise";
import Whatwedo from "../components/Whatwedo/Whatwedo";
import Tech from "../components/Tech/Tech";
import Whywerock from "../components/whywerock/Whywerock";

function Home() {
  return (
    <>
      <CookieConsent
        location="top"
        buttonText="Sure man!!"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#1e1818" }}
        buttonStyle={{
          backgroundColor: "#EC5646",
          fontWeight: "bolder",
          color: "white",
          fontSize: "16px",
          borderRadius: "20px"
        }}
        // expires={150}
      >
       ⚠️We use cookies for analytics and to improve our site. By continuing to browse the site you are agreeing to our Privacy Policy.
      </CookieConsent>

      <Hero />
      <Intro />
      <Whatwedo />
      <Crypto />
      <Whywerock />
      <Expertise />
      <Tech />
    </>
  );
}

export default Home;

// <Teasers />
// <About />

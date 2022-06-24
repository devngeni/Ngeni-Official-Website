import React, { useState } from "react";
import "./App.css";
// import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import team from "./pages/team";
import terms from "./pages/terms";
import focus from "./pages/focus";
// import contacts from "./pages/contacts";
import Services from "./components/Services/Services";
import ScrollToTop from "./components/ScrollToTop";
import whywerock from "./pages/whywerock";
import Contacts from "./components/Contacts/Contacts";
// import Latest from "./components/Latest/Latest";
import techstack from "./pages/techstack";
import whatwedo from "./pages/whatwedo";
import signin from "./pages/signin";
import Onbording from "./pages/Onbord";
import { Toaster } from "react-hot-toast";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team" exact component={team} />
        <Route path="/terms" exact component={terms} />
        <Route path="/whywerock" exact component={whywerock} />
        <Route path="/focus" exact component={focus} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/techstack" exact component={techstack} />
        <Route path="/whatwedo" exact component={whatwedo} />
        <Route path="/signin" exact component={signin} />
        <Route path="/onboarding" exact component={Onbording} />
      </Switch>
      <Services />
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            fontFamily: "Poppins",
            fontWeight: "bold",
            color: "#3A5168",
          },
        }}
      />
    </Router>
  );
}

export default App;

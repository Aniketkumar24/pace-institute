import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./style/main.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;

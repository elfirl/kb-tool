import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import HomeBody from "./home";

class Default extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeBody />
        <Footer />
      </div>
    );
  }
}

export default Default;

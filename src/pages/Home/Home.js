import React, { Component } from "react";
import CardComponent from "../../components/CardComponent";
import NavbarComponent from "../../components/NavbarComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <CardComponent />
      </div>
    );
  }
}

export default Home;

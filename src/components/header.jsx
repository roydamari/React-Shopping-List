import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  state = {};

  render() {
    const headerStyle = {
      backgroundColor: "#222",
      height: "186px",
      padding: "20px",
      color: "#fff",
      texAlign: "center",
      display: "block",
      fontFamily: "sans-serif",
    };
    return (
      <header style={headerStyle}>
        <FontAwesomeIcon
          icon={faShoppingBasket}
          style={{ fontSize: "130px", margin: "3px" }}
        />
        <h2 style={{ margin: "3px" }}>Hello, Basket!</h2>
      </header>
    );
  }
}

export default Header;

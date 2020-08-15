import React, { Component } from "react";

class BasketItem extends Component {
  state = {};
  render() {
    const divStyle = {
      width: "25vw",
      backgroundColor: this.props.index % 2 === 0 ? "#f9f9f9" : "#efefef",
      margin: "7px",
      padding: "10px",
      marginLeft: "0px",
      textDecoration: this.props.grocery[2] ? "line-through" : "",
    };
    let buttonStyle = {
      border: "2px solid white",
      color: "white",
      backgroundColor: "transparent",
      borderRadius: "5px",
      width: "24px",
      height: "24px",
      marginRight: "5px",
      outline: "none",
    };

    const lightUp = (e) => {
      e.currentTarget.children[0].style.backgroundColor =
        e.currentTarget.children[0].style.backgroundColor === "transparent"
          ? "red"
          : "transparent";
      e.currentTarget.children[0].style.marginRight =
        e.currentTarget.children[0].style.marginRight === "5px" ? "8px" : "5px";
    };
    return (
      <div
        style={divStyle}
        onMouseOver={lightUp}
        onMouseOut={lightUp}
        onClick={this.props.onCross}
      >
        <button style={buttonStyle}>-</button>
        <span>{this.props.grocery[0] + " - "}</span>
        <span>{this.props.grocery[1]}</span>
      </div>
    );
  }
}

export default BasketItem;

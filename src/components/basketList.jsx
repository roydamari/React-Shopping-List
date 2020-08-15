import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faTrash } from "@fortawesome/free-solid-svg-icons";
import BasketItem from "./basketItem";

class BasketList extends Component {
  render() {
    const divStyle = {
      width: "25vw",
      backgroundColor: "#f9f9f9",
      margin: "7px",
      padding: "10px",
      marginLeft: "0px",
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
    let iconStyle = {
      display: "inline",
      marginLeft: "auto",
      marginRight: "5px",
      opacity: "0.2",
      visibility: this.props.basketList.length === 0 ? "hidden" : "",
      cursor: "pointer",
    };

    const lightUp = (e) => {
      e.currentTarget.children[0].style.backgroundColor =
        e.currentTarget.children[0].style.backgroundColor === "transparent"
          ? "red"
          : "transparent";
      e.currentTarget.children[0].style.marginRight =
        e.currentTarget.children[0].style.marginRight === "5px" ? "8px" : "5px";
    };

    const overTrash = (e) => {
      e.currentTarget.style.color =
        e.currentTarget.style.color === "red" ? "black" : "red";
      e.currentTarget.style.opacity =
        e.currentTarget.style.opacity === "1" ? "0.2" : "1";
    };

    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faShoppingBasket}
            style={{ display: "inline", marginRight: "5px" }}
          />
          <h3 style={{ display: "inline" }}>Basket</h3>
          <FontAwesomeIcon
            icon={faTrash}
            style={iconStyle}
            onMouseOver={overTrash}
            onMouseOut={overTrash}
            onClick={this.props.onReset}
          />
        </div>
        {this.props.basketList.length === 0 ? (
          <div style={divStyle} onMouseOver={lightUp} onMouseOut={lightUp}>
            <button style={buttonStyle}>-</button>
            <span>Your basket is empty!</span>
          </div>
        ) : (
          this.props.basketList.map((grocery, index) => {
            return (
              <BasketItem
                grocery={grocery}
                key={index}
                index={index}
                onCross={this.props.onCross}
              />
            );
          })
        )}
      </div>
    );
  }
}

export default BasketList;

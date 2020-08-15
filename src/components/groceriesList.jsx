import React, { Component } from "react";
import GroceryItem from "./groceryItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

class GroceriesList extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon
            icon={faLeaf}
            style={{ display: "inline", marginRight: "5px" }}
          />
          <h3 style={{ display: "inline" }}>Groceries</h3>
        </div>
        {this.props.groceries.map((grocery, index) => {
          return (
            <GroceryItem
              key={index}
              grocery={grocery}
              index={index}
              onUpdate={this.props.onUpdate}
            />
          );
        })}
      </div>
    );
  }
}

export default GroceriesList;

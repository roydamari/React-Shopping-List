import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  render() {
    const formStyle = {
      width: "50%",
      border: "1px solid red",
      margin: "30px",
      backgroundColor: "pink",
      padding: "20px",
      borderRadius: "5px",
      textAlign: "start",
    };
    const inputStyle = {
      border: "0",
      padding: "10px",
      width: "50%",
    };
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form style={formStyle}>
          <input
            type="text"
            style={inputStyle}
            onChange={this.props.onChange}
            placeholder="Search for an item"
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;

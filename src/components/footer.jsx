import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    const footerStyle = {
      height: "150px",
      backgroundColor: "#222",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      marginTop: "20px",
    };
    const aStyle = {
      cursor: "pointer",
      textDecoration: "underline",
    };
    return (
      <footer style={footerStyle}>
        <div>
          <span
            onClick={(e) => {
              e.currentTarget.parentElement.children[1].style.cursor =
                "pointer";
              e.currentTarget.parentElement.children[1].style.textDecoration =
                "underline";
              e.currentTarget.parentElement.children[2].style.cursor =
                "pointer";
              e.currentTarget.parentElement.children[2].style.textDecoration =
                "underline";
              e.currentTarget.style = {};
              this.props.onFilter(e);
            }}
          >
            All
          </span>{" "}
          ,
          <span
            style={aStyle}
            onClick={(e) => {
              e.currentTarget.parentElement.children[0].style.cursor =
                "pointer";
              e.currentTarget.parentElement.children[0].style.textDecoration =
                "underline";
              e.currentTarget.parentElement.children[2].style.cursor =
                "pointer";
              e.currentTarget.parentElement.children[2].style.textDecoration =
                "underline";
              e.currentTarget.style = {};
              this.props.onFilter(e);
            }}
          >
            Pending
          </span>{" "}
          ,
          <span
            style={aStyle}
            onClick={(e) => {
              e.currentTarget.parentElement.children[0].style.cursor =
                "pointer";
              e.currentTarget.parentElement.children[0].style.textDecoration =
                "underline";
              e.currentTarget.parentElement.children[1].style.cursor =
                "pointer";
              e.currentTarget.parentElement.children[1].style.textDecoration =
                "underline";
              e.currentTarget.style = {};
              this.props.onFilter(e);
            }}
          >
            Purchased
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;

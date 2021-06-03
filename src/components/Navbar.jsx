import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  styleLink = {
    textDecoration: "none",
    color: "#fff",
    textTransform: "uppercase",
  };
  render() {
    return (
      <header>
        <h3>router101</h3>
        <ul className="nav-links">
          <li>
            <Link to="/" style={this.styleLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={this.styleLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" style={this.styleLink}>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Navbar;

import React from "react";
import Rock from "../assets/theRock.jpg";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <div className="navbar container">
          <a className="logo">w</a>
          <div className="input-box">
            <input type="text" placeholder="Search" className="search" />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="navs_avatar">
            <a href="#home">
              <i className="fas fa-home"></i>home
            </a>
            <a href="#company">
              <i className="fas fa-home"></i>companies
            </a>
            <a href="#project">
              <i className="fas fa-home"></i>projects
            </a>
            <a href="#profile">
              <i className="fas fa-home"></i>profiles
            </a>
            <a href="#job">
              <i className="fas fa-home"></i>jobs
            </a>
            <a href="#message">
              <i className="fas fa-home"></i>messages
            </a>
            <a href="#notification">
              <i className="fas fa-home"></i>notifications
            </a>
            <div className="avatar-box">
              <img src={Rock} alt="avatar" />
              The Rock
              <i className="fas fa-sort-down"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

import React from "react";
import sugegs_1 from "../assets/sugges-1.jpg";
import sugegs_2 from "../assets/sugges-2.jpg";
import sugegs_3 from "../assets/sugges-3.jfif";
import sugegs_4 from "../assets/sugges-4.jfif";
import sugegs_5 from "../assets/sugges-5.jfif";
import sugegs_6 from "../assets/sugges-6.jfif";
import sugegs_7 from "../assets/sugges-7.jfif";

class RightSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="right-side-box">
        <button className="message">
          <i className="fas fa-envelope"></i>Message
        </button>
        <div className="portfolio-box">
          <div className="portfolio-nav">𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼</div>
          <div className="portfolio-main-body">
            <img src={sugegs_1} alt="" />
            <img src={sugegs_2} alt="" />
            <img src={sugegs_3} alt="" />
            <img src={sugegs_4} alt="" />
            <img src={sugegs_5} alt="" />
            <img src={sugegs_6} alt="" />
            <img src={sugegs_1} alt="" />
            <img src={sugegs_2} alt="" />
            <img src={sugegs_3} alt="" />
            <img src={sugegs_4} alt="" />
            <img src={sugegs_5} alt="" />
            <img src={sugegs_6} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default RightSideBar;

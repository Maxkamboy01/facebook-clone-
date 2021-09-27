import React from "react";

class SidebarTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          icon: (
            <i
              style={{ color: "#51A5FB" }}
              className="fas fa-globe-americas"
            ></i>
          ),
          text: "www.example.com",
        },
        {
          icon: (
            <i style={{ color: "#3B5998" }} className="fab fa-facebook"></i>
          ),
          text: "http://www.facebook.com",
        },
        {
          icon: <i style={{ color: "#1FA1F2" }} className="fab fa-twitter"></i>,
          text: "http://www.twitter.com",
        },
        {
          icon: (
            <i
              style={{ color: "#E2665D" }}
              className="fab fa-google-plus-square"
            ></i>
          ),
          text: "http://www.googleplus.com",
        },
        {
          icon: (
            <i
              style={{ color: "#E2665D" }}
              className="fab fa-behance-square"
            ></i>
          ),
          text: "http://www.behance.com",
        },
        {
          icon: (
            <i
              style={{ color: "#BF1021" }}
              className="fab fa-pinterest-square"
            ></i>
          ),
          text: "http://www.pinterest.com",
        },
        {
          icon: (
            <i style={{ color: "#AD7DC3" }} className="fab fa-instagram"></i>
          ),
          text: "http://www.instagram.com",
        },
        {
          icon: <i style={{ color: "#CD2640" }} className="fab fa-youtube"></i>,
          text: "http://www.youtube.com",
        },
      ],
    };
  }
  render() {
    return (
      <div className="sidebar-top">
        <i className="fab fa-facebook face"></i>
        <button className="follow-btn">
          <span>+</span>Follow
        </button>
        <div className="follows">
          <div className="following">
            <p className="text">Followings</p>
            <p className="number">34</p>
          </div>
          <div className="following">
            <p className="text">Followers</p>
            <p className="number">155</p>
          </div>
        </div>
        <div className="links-box">
          {this.state.links.map((value) => {
            return (
              <div className="link">
                {value.icon}
                <a href={value.text}>{value.text}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SidebarTop;

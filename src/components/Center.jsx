import React from "react";
class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsarray: [
        {
          title: "𝖲𝖾𝗇𝗂𝗈𝗋 𝖯𝖧𝖯 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋",
          time: 3 + " " + "min ago",
        },
        {
          title: "𝖲𝖾𝗇𝗂𝗈𝗋 𝖴𝖨/𝖴𝖷 𝖣𝖾𝗌𝗂𝗀𝗇𝖾𝗋",
          time: 9 + " " + "min ago",
        },
        {
          title: "𝖲𝖾𝗇𝗂𝗈𝗋 𝖶𝗈𝗋𝖽𝖯𝗋𝖾𝗌𝗌 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋",
          time: 21 + " " + "min ago",
        },
        {
          title: "𝖲𝖾𝗇𝗂𝗈𝗋 𝖴𝖨/𝖴𝖷 𝖣𝖾𝗌𝗂𝗀𝗇𝖾𝗋",
          time: 14 + " " + "min ago",
        },
      ],
    };
  }
  render() {
    return (
      <div className="center-wrapper">
        <div className="title-box">
          <p className="title">𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗜𝗻𝗰.</p>
          <div className="subtitle">
            𝖤𝗌𝗍𝖺𝖻𝗅𝗂𝗌𝗁𝖾𝖽 𝖲𝗂𝗇𝖼𝖾 𝟤𝟢𝟢𝟫
            <div className="starts">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
          </div>
          <div className="feed-box">
            <div className="feed">
              <i class="far fa-list-alt"></i> Feed
            </div>
            <div className="feed">
              <i class="fas fa-info-circle"></i>Info
            </div>
            <div className="feed">
              <i class="fas fa-puzzle-piece"></i> Portfolio
            </div>
          </div>
        </div>
        <div className="cards-box">
          {this.state.cardsarray.map((value) => {
            return (
              <div className="card">
                <div className="card-title-box">
                  <i className="fab fa-facebook facebook-card-icon"></i>
                  <div className="title-text">
                    <p className="title">𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗜𝗻𝗰.</p>
                    <p className="time">
                      <i className="far fa-clock"></i>
                      {value.time}
                    </p>
                  </div>
                  <div className="title-menu">
                    <i className="fas fa-ellipsis-v"></i>
                  </div>
                </div>
                <div className="epic-box">
                  <i class="fas fa-project-diagram"></i>Epic Coder
                  <i
                    className="far fa-clock"
                    style={{ color: "green", fontWeight: "bold" }}
                  ></i>
                  India
                  <div className="zakladki">
                    <button style={{ backgroundColor: "green" }}>
                      <i className="far fa-bookmark"></i>
                    </button>
                    <button style={{ backgroundColor: "red" }}>
                      <i className="fas fa-envelope"></i>
                    </button>
                  </div>
                </div>
                <div className="card-main-box">
                  <p className="title">{value.title}</p>
                  <div className="time-box">
                    <button>Full time</button>
                    $30/hr
                  </div>
                  <p className="lorem">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis nihil velit dolores a non blanditiis ut
                    voluptatem .
                  </p>
                  <p className="more">view more</p>
                  <div className="cources">
                    <span>HTML</span>
                    <span>PHP</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                    <span>Wordpress</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Center;

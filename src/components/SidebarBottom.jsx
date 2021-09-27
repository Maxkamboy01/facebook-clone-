import React from "react";
import sugegs_1 from "../assets/sugges-1.jpg";
import sugegs_2 from "../assets/sugges-2.jpg";
import sugegs_3 from "../assets/sugges-3.jfif";
import sugegs_4 from "../assets/sugges-4.jfif";
import sugegs_5 from "../assets/sugges-5.jfif";
import sugegs_6 from "../assets/sugges-6.jfif";
import sugegs_7 from "../assets/sugges-7.jfif";
class SideBarBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [
        {
          image: sugegs_1,
          name: "Jayson Stathan",
          job: "Mechanic",
        },
        {
          image: sugegs_2,
          name: "Mike Tison",
          job: "Ballete dancer",
        },

        {
          image: sugegs_3,
          name: "Karnaje",
          job: "Venom opponent",
        },
        {
          image: sugegs_4,
          name: "Krepkiy Oreshek",
          job: "Baldman",
        },

        {
          image: sugegs_5,
          name: "Chocolate",
          job: "beach relaxer",
        },
        {
          image: sugegs_6,
          name: "Vin Benzin",
          job: "Refueller",
        },
        {
          image: sugegs_7,
          name: "Kit-kat",
          job: "Kit-Kat maker",
        },
      ],
    };
  }
  render() {
    return (
      <div className="side-bar-bottom">
        <div className="suggestions-nav">
          Suggestions <i class="fas fa-ellipsis-v"></i>
        </div>
        <div className="suggestions-box">
          {this.state.suggestions.map((value) => {
            return (
              <div className="suggestion">
                <img src={value.image} alt="avatar" />
                <div className="texts">
                  <p className="name">{value.name}</p>
                  <p className="job">{value.job}</p>
                </div>
                <button className="add">+</button>
              </div>
            );
          })}
        </div>
        <div className="view">view more</div>
      </div>
    );
  }
}

export default SideBarBottom;

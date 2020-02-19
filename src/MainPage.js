import React, { Component } from "react";
import "./Components/main/main.css";
import MainPagenav from "./Components/main/MainPagenav";
import MainPageright from "./Components/main/MainPageright";
import MainPagefeedsmap from "./Components/main/Mainpagefeedsmap";
import { withRouter } from "react-router-dom";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [
        {
          id: 0,
          name: ""
        }
      ],
      instagramfeeds: [
        {
          id: 1,
          picture: "/images/itit.png",
          logo: "/images/itzylogo.jpg",
          account: "itzy.all.in.us",
          text: "안녕하세요.",
          like: "좋아요 100,000개"
        },
        {
          id: 2,
          picture: "/images/itzy1.png",
          logo: "/images/itzylogo.jpg",
          account: "itzy.all.in.us",
          text: "헬로방구짱구",
          like: "300,000개"
        },
        {
          id: 3,
          picture: "/images/twice1.png",
          logo: "/images/twice.jpg",
          account: "twicestagram",
          text: "리액트재밌다재밌다재밌다재밌냐",
          like: "400,000개"
        }
      ]
    };
  }
  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    });
  };
  render() {
    const mapPicture = this.state.instagramfeeds.map((feed, id) => {
      return (
        <MainPagefeedsmap
          key={id}
          picture={feed.picture}
          logo={feed.logo}
          account={feed.account}
          text={feed.text}
          like={feed.like}
        />
      );
    });

    return (
      <div className="MainPage">
        <MainPagenav />
        <div className="mainTitle">
          <div className="mapPicture">{mapPicture}</div>
          <div className="MainRight">
            <MainPageright />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(MainPage);

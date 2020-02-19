import React, { Component } from "react";

class Mainpagefeedsmap extends Component {
  state = {
    message: "",
    data: []
  };

  handleChange = e => {
    this.setState({
      message: e.target.value
    });
  };
  handleClick = () => {
    // alert(this.state.message); //클릭시 변화된 state가 alert에 보이게한다
    this.state.data.push(this.state.message);
    console.log(this.state.data);
    this.setState({
      // 클릭후 입력창 초기화
      message: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  id = 2;
  render() {
    const commentListDatas = this.state.data.map((param, idx) => {
      return (
        <div key={idx} className="text0">
          <span className="text1">gogobook89</span>
          <span className="text21">{param}</span>
          <button className="delete1">삭제</button>
        </div>
      );
      // <div key={idx}>{param}</div>;
    });
    return (
      <div>
        <div className="divFeeds">
          <div className="article">
            <nav className="nav2">
              <div className="twiceLogoText">
                <div>
                  <img className="twiceLogo" src={this.props.logo} alt="" />
                </div>
                <div className="twiceText">{this.props.account}</div>
              </div>
              <div>
                <img
                  className="dotDot"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                  alt=""
                />
              </div>
            </nav>
          </div>
          <div className="mainPicture">
            <div className="mainPictureChild">
              <img
                className="mainPictureChild1"
                src={this.props.picture}
                alt=""
              />
            </div>
          </div>

          <div className="status">
            <div className="status1">
              <img
                className="status1-child"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                alt=""
              />
            </div>
            <div className="status2">
              <img
                className="status3"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                alt=""
              />
            </div>
          </div>
          <div className="like1">{this.props.like}</div>
          <div className="text0">
            <span className="text1">{this.props.account}</span>
            <span className="text2">{this.props.text}</span>
          </div>
          <div className="text3">댓글 1000개 모두 보기</div>
          <div className="reply">
            <div className="text0">
              <span className="text1">gogobook89</span>
              <span className="text21">댓글이다.댓글댓글 댓글맨</span>
            </div>
            {commentListDatas}
          </div>

          <div className="text4">19시간 전</div>
          <div class="button1">
            <input
              class="button2"
              type="text"
              name="message"
              placeholder="댓글 달기..."
              value={this.state.message}
              onChange={this.handleChange}
              onKeyPress={this.handleClick}
            />
            <button class="button3" onClick={this.handleClick}>
              게시
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mainpagefeedsmap;

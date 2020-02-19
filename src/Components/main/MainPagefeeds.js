import React, { Component } from "react";

class MainPagefeeds extends Component {
  render() {
    return (
      <div>
        <div className="divFeeds">
          <div className="article">
            <nav className="nav2">
              <div className="twiceLogoText">
                <div>
                  <img className="twiceLogo" src="/images/twice.jpg" alt="" />
                </div>
                <div className="twiceText">twicestagram</div>
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
                src="/images/sana.png"
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
          <div className="like1">좋아요 674,648개</div>
          <div className="text0">
            <span className="text1">twicetagram</span>
            <span className="text2">핼로방구</span>
          </div>
          <div className="text3">댓글 1000개 모두 보기</div>
          <div className="reply">
            <div className="text0">
              <span className="text1">gogobook</span>
              <span className="text21">댓글이다.댓글댓글 댓글맨</span>
            </div>
          </div>
          <div className="text4">16시간 전</div>
          <div class="button1">
            <input class="button2" type="text" placeholder="댓글 달기..." />
            <button class="button3">게시</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPagefeeds;

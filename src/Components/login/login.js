import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    id: "",
    pw: ""
  };

  handleChange = e => {
    this.setState({
      id: e.target.value
    });
  };
  handleChange1 = e => {
    this.setState({
      pw: e.target.value
    });
  };

  goToSignup() {
    this.props.history.push("/main");
  }
  render() {
    return (
      <div className="zzzz">
        <div className="bg">
          <div className="loginwindow">
            <div className="logo">
              <img
                className="logoimage"
                src="/images/logo_text.png"
                alt="logo"
              />
            </div>
            <div className="ID">
              <input
                className="text-input"
                type="text"
                placeholder="&emsp;전화번호, 사용자 이름 또는 이메일" //아이디
                onChange={this.handleChange}
                value={this.state.id}
              />
            </div>
            <div className="PW">
              <input
                id="password-text-input"
                type="text"
                placeholder="&emsp;비밀번호" //비밀번호
                onChange={this.handleChange1}
                value={this.state.pw}
              />
            </div>
            <div className="BT">
              <div class="btn signup-btn" onClick={this.goToSignup.bind(this)}>
                {this.state.id.length > 0 && this.state.pw.length > 0 ? (
                  <button className="btn-login">로그인</button>
                ) : (
                  <button className="btn-login1">로그인</button>
                )}
              </div>
            </div>
            <div className="OR">
              <div className="orspan"></div>
              <div className="or">또는</div>
              <div className="orspan"></div>
            </div>
            <div className="facebooklogin">
              <div className="facebook2">
                <img
                  className="facebookimage"
                  src="/images/facebook.png"
                  alt="facebooklogo"
                />
              </div>
              <div className="facebook"> Facbook으로 로그인</div>
            </div>
            <div className="forget">비밀번호를 잊으셨나요?</div>
          </div>
          <div className="account">
            <span className="span1">계정이 없으신가요?</span>{" "}
            <span className="span2">&nbsp;&nbsp;가입하기</span>
          </div>
          <div className="download">앱을 다운로드하세요.</div>
          <div className="app">
            <div className="apple">
              {" "}
              <img
                className="applelogo"
                src="/images/apple.png"
                alt="logo"
              />{" "}
            </div>
            <div className="google">
              <img className="googlelogo" src="/images/google.png" alt="logo" />{" "}
            </div>
          </div>
        </div>
        <div className="information">
          INSTAGRAM&emsp;정보도움말홍보&emsp;센터API채용&emsp;정보개인정보처리방침&emsp;약관&emsp;디렉터리&emsp;프로필&emsp;해시태그&emsp;언어&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <span className="last1">©2020 INSTAGRAM FROM FACEBOOK</span>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);

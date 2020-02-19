import React, { Component } from 'react';

class MainPagenav extends Component {
    render(){
        return(
            <div>
                <nav className="nav1">
                    <div className="nav1Child">
                    <div className="nav1LogoLeft">
                        <img className="c1c2" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png" alt=""/>
                        <img className="c2c2" src="/images/logo_text.png" alt=""/>
                    </div>
                    <div className="nav1Search">
                        <input className="nav1SearchChild" type="text" placeholder="검색"/>
                    </div>
                    <div className="nav1Right">
                        <div className="nav1LogoRight">
                        <img className="c3c1" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt=""/>
                        <img className="c3c2" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt=""/>
                        <img className="c3c3" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt=""/>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default MainPagenav
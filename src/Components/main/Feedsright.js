import React, { Component } from 'react';
import MainPagefeeds from '../../Components/main/MainPagefeeds';
import MainPageright from '../../Components/main/MainPageright';

class Feedsright extends Component{
    render() {
               return (
                 <div className="mainTitle">
                   <MainPagefeeds />
                   <MainPageright />
                 </div>
               );
             }
}

export default Feedsright;
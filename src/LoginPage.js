import React, { Component } from 'react';
import Login from './Components/login/login';
import './App.css';
import './Components/login/login.css';
import './Components/main/main.css';
import { withRouter} from 'react-router-dom';

class LoginPage extends Component {
  render(){
    return(
    <div className='LoginPage'>
      <Login />
    </div>
    )
  }
}

export default withRouter(LoginPage);

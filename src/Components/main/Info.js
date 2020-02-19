import React, { Component } from 'react';

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: 'wltjd',
      id: 0
    }
  }
  
  render() {


    const {
      name, id
    } = this.props.info;
    
    return (
      <div>
        <div><b>{name}</b></div>
      </div>
    );
  }
}

export default Info;
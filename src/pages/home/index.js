import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div style={{height: '100px', width: '50%', border: '1px solid #f0f'}}>
        <Link to="/nest/login" style={{color: '#fff', textDecoration: 'none'}}>登录</Link>
        <br/>
        <Link to="/nest" style={{color: '#fff', }}>登录首页</Link>
      </div>
    );
  }
}

export default Home;
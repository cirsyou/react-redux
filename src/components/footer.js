import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/order">订单列表</Link></li>
          <li><Link to="/info">个人中心</Link></li>
        </ul>
      </div>
    )
  }
}

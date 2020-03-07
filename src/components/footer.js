import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LayoutCss from '@/assets/style/layout.module.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className={LayoutCss.foot_wrapper}>
        <ul className={LayoutCss.flex_content}>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/order">订单列表</Link></li>
          <li><Link to="/info">个人中心</Link></li>
        </ul>
      </div>
    )
  }
}

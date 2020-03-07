import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor (props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        Header
        <div>id为：{this.props.id}</div>
      </div>
    )
  }
}
// 将state中的数据传给组件
const mapStateToProps = (state, ownProps) => {
  return {
    id: state.homeReducer.id
  }
}
export default connect(mapStateToProps)(Header);

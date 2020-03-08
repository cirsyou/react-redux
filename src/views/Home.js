import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addId } from '@/store/actions';
import Header from '@/components/header';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  clickHandle = () => {
    this.props.onTodoClick(121);
  }
  render() {
    return (
      <div>
        <Header></Header>
        home page.
        <div>当前id为：{this.props.id}</div>
        <div onClick={this.clickHandle}>点击触发id的修改</div>
      </div>
    )
  }
}
// 将state中的数据传给组件
const mapStateToProps = (state, ownProps) => {
  return {
    name: state.addReducer.name,
    id: state.homeReducer.id
  }
}
// 提交action的方法
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(addId(id))
    }
  }
}

// 通过connect 将组件和redux数据进行连接
export default connect(mapStateToProps, mapDispatchToProps)(Home);

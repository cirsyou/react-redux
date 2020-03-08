import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 移动端适配
import '@/utils/rem';
// 通用浏览器初始化样式表
import '@/assets/style/normalize.css';
// 常用标签进行基本初始化
import '@/assets/style/base.css';
// import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '@/store';
// 如果想使用异步的action 需要使用一个中间件 trunk

// redux 中重要的三部分 action reducer state
// const counterReducer = (state = {count: 1}, action) => {
//   console.log(action.type)
//   if (action.type === 'update') {
//     return {...state, 'count': action.payload.num}
//   }
//   if (action.type === 'ADD') {
//     return {...state, 'count': state.count + 1}
//   }
//   return state;
// }
// const postReducer = (state = {list: [{title: '你好'}]}, action) => {
//   if (action.type === 'ADD_ITEM') {
//     return {...state, list: action.payload.list}
//   }
//   return state
// }
// 创建store
// reducer 调试 combineReducers 将多个reducer进行合并
// const rootReducer = combineReducers({counter: counterReducer,post: postReducer});
// const store = createStore(rootReducer, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store 里面包含getState dispatch subscribe replaceReducer 方法
// console.log(store.getState())
// console.log(store);
// 如果想改变state的值，需要使用dispatch派发一个action
// 一个action包括两部分，
// type 通过type区分是什么操作
// payload 传递的数据
// const action = {
//   type: 'ADD',
//   payload: {}
// }
// store.dispatch(action);

// console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

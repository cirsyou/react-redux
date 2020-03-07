import React, { Component } from 'react';
import Home from '@/views/Home';
import Order from '@/views/Order';
import Info from '@/views/Info';
import { Switch, Route } from 'react-router-dom';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/order" component={Order}></Route>
          <Route path="/info" exact component={Info}></Route>
        </Switch>
        App page
        <Footer></Footer>
      </div>
    )
  }
}

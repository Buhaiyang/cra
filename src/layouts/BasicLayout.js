import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import { BackTop } from 'antd'
import './BasicLayout.less'

class BasicLayout extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
          <BackTop />
        </div>
      </Router>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  const { hot } = require('react-hot-loader/root')
  BasicLayout = hot(BasicLayout)
}

export default BasicLayout

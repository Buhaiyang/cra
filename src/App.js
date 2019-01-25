import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './App.less'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>123</div>
      </div>
    )
  }
}

if (process.env.NODE_ENV === 'development') {
  const { hot } = require('react-hot-loader/root')
  App = hot(App)
}

export default App

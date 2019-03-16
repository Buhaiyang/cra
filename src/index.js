import React from 'react'
import ReactDOM from 'react-dom'
import BasicLayout from './layouts/BasicLayout'
import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import '@babel/polyfill'
import './index.less'
import * as serviceWorker from './serviceWorker'

moment.locale('zh-cn')

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <BasicLayout />
  </LocaleProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

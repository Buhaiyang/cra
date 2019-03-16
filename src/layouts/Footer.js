import React from 'react'
import QRCode from '../assets/images/qr-code.jpg'
import './Footer.less'

export default () => (
  <div className="footer-wrapper">
    <div className="footer-content">
      <div className="contact-info">
        <h1>联系电话：400-099-0096</h1>
        <h1>联系邮箱：contact@kezhiyin.com</h1>
        <h1>联系地址：北京市东城区天恒大厦B座1801</h1>
      </div>
      <div className="contact-img">
        <img src={QRCode} alt="客知音" />
        <h1>公众号二维码</h1>
      </div>
    </div>
    <h1>
      ©2016-2019 <a href="https://www.kezhiyin.com/">北京智合大方科技有限公司</a> All rights reserved 京ICP备17057433号
    </h1>
  </div>
)

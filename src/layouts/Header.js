import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Menu, Icon, Button, Modal } from 'antd'
import { getScroll } from '../utils'
import Logo from '../assets/images/logo.png'
import './Header.less'

const { SubMenu, Item } = Menu
const menus = [
  {
    key: '1',
    text: '首页',
    link: './'
  },
  {
    key: '2',
    text: '产品',
    links: [
      {
        key: '2-1',
        text: '智能坐席助手',
        link: 'https://www.kezhiyin.com/production/sales-assistant.html'
      },
      {
        key: '2-2',
        text: 'AI语音质检',
        link: 'https://www.kezhiyin.com/production/customer-service.html'
      },
      {
        key: '2-3',
        text: '外呼机器人',
        link: 'https://www.kezhiyin.com/production/phone-robot.html'
      },
      {
        key: '2-4',
        text: '语音识别引擎',
        link: 'https://www.kezhiyin.com/production/asr.html'
      }
    ]
  },
  {
    key: '3',
    text: '场景',
    links: [
      {
        key: '3-1',
        text: '金融机构',
        link: 'https://www.kezhiyin.com/solution/financial.html'
      },
      {
        key: '3-2',
        text: '政府机构',
        link: 'https://www.kezhiyin.com/solution/government.html'
      }
    ]
  },
  {
    key: '4',
    text: '热点新闻',
    link: 'https://www.kezhiyin.com/plus/list.php?tid=1'
  },
  {
    key: '5',
    text: '团队',
    link: 'https://www.kezhiyin.com/about/about.html'
  },
  {
    key: '6',
    text: '加入我们',
    link: 'https://www.lagou.com/gongsi/203821.html'
  }
]

@withRouter
export default class extends Component {
  state = {
    current: '1',
    visible: false,
    isGhost: true
  }

  wrapperRef = React.createRef()

  componentDidMount() {
    window.addEventListener('scroll', this.handleMenu)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleMenu)
  }

  handleMenu = () => {
    const { isGhost } = this.state
    const {
      body: { clientHeight }
    } = document
    const { top } = getScroll()
    const submenus = document.getElementsByClassName('ant-menu-submenu-title')
    const menus = document.getElementsByClassName('ant-menu-item')
    const selectedMenu = document.getElementsByClassName('ant-menu-item-selected')

    if (top > 2 * clientHeight - 68) {
      if (isGhost) {
        this.wrapperRef.current.style.borderColor = '#f0f0f0'
        this.wrapperRef.current.style.backgroundColor = '#ffffff'
        for (const submenu of submenus) {
          submenu.style.color = 'rgba(0, 0, 0, 0.65)'
        }
        for (const menu of menus) {
          menu.children[0].style.color = 'rgba(0, 0, 0, 0.65)'
        }
        if (selectedMenu[0]) {
          selectedMenu[0].children[0].style.color = '#fb6900'
        }
        this.setState({ isGhost: false })
      }
    } else {
      if (!isGhost) {
        for (const submenu of submenus) {
          submenu.style.color = '#ffffff'
        }
        for (const menu of menus) {
          menu.children[0].style.color = '#ffffff'
        }
        if (selectedMenu[0]) {
          selectedMenu[0].children[0].style.color = '#fb6900'
        }
        this.wrapperRef.current.style.borderColor = 'transparent'
        this.wrapperRef.current.style.backgroundColor = 'transparent'
        this.setState({ isGhost: true })
      }
    }
  }

  handleClick = ({ key: current }) => {
    // this.setState({ current })
  }

  handleLogin = () => {
    this.setState({ visible: true })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { current, visible, isGhost } = this.state
    return (
      <div className="header-wrapper" ref={this.wrapperRef}>
        <div>
          <a href="https://www.kezhiyin.com/">
            <img src={Logo} alt="客知音" />
          </a>
          <div>
            <Menu mode="horizontal" selectedKeys={[current]} onClick={this.handleClick}>
              {menus.map(menu => {
                if (menu.link) {
                  return (
                    <Item key={menu.key}>
                      <a key={menu.key} href={menu.link} target="_blank" rel="noopener noreferrer">
                        {menu.text}
                      </a>
                    </Item>
                  )
                } else {
                  return (
                    <SubMenu
                      key={menu.key}
                      title={
                        <span>
                          {menu.text}
                          <Icon type="caret-down" />
                        </span>
                      }
                    >
                      {menu.links.map(sub_menu => (
                        <Item key={sub_menu.key}>
                          <a key={sub_menu.key} href={sub_menu.link} target="_blank" rel="noopener noreferrer">
                            {sub_menu.text}
                          </a>
                        </Item>
                      ))}
                    </SubMenu>
                  )
                }
              })}
            </Menu>
            <Button onClick={this.handleLogin} ghost={isGhost}>
              登录
            </Button>
          </div>
        </div>

        <Modal
          wrapClassName="login-modal-wrapper"
          title={<img src={Logo} alt="客知音" />}
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          centered
        >
          <h1>请选择使用的产品</h1>
          <div>
            <Button href="https://phonebot.kezhiyin.com/" target="_blank">
              外呼机器人
            </Button>
            <Button href="https://aicoach.kezhiyin.com/" target="_blank">
              智能坐席助手
            </Button>
          </div>
        </Modal>
      </div>
    )
  }
}

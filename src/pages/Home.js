import React, { Component, PureComponent } from 'react'
import { Carousel, Button } from 'antd'
import InfoModal from '../components/InfoModal'
import Texty from 'rc-texty'
import Banner_1 from '../assets/images/home/banner_1.jpg'
import Sub_Banner_1 from '../assets/images/home/sub_banner_1.jpg'
import Sub_Banner_2 from '../assets/images/home/sub_banner_2.jpg'
import Insurance from '../assets/images/home/insurance.png'
import HotLine from '../assets/images/home/hot_line.png'
import './Home.less'
import 'rc-texty/assets/index.css'

class CustomTexty extends PureComponent {
  state = {
    show: true
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 3500)
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { show } = this.state
    const { text } = this.props
    if (show) {
      return (
        <Texty type="left" key="1">
          {text}
        </Texty>
      )
    }
    return (
      <Texty type="left" key="2">
        {text}
      </Texty>
    )
  }
}

export default class extends Component {
  state = {
    isAutoplay: true,
    visible: false
  }

  carouselRef = React.createRef()
  insuranceRef = React.createRef()
  hotLineRef = React.createRef()

  componentDidMount() {
    this.insuranceRef.current.onmouseover = () => {
      if (this.isInsurancePause) return
      this.isInsurancePause = true
      this.carouselRef.current.slick.innerSlider.slickGoTo(0)
      this.carouselRef.current.slick.innerSlider.pause()
    }
    this.insuranceRef.current.onmouseleave = () => {
      this.isInsurancePause = false
      this.carouselRef.current.slick.innerSlider.autoPlay()
    }
    this.hotLineRef.current.onmouseover = () => {
      if (this.isHotLinePause) return
      this.isHotLinePause = true
      this.carouselRef.current.slick.innerSlider.slickGoTo(1)
      this.carouselRef.current.slick.innerSlider.pause()
    }
    this.hotLineRef.current.onmouseleave = () => {
      this.isHotLinePause = false
      this.carouselRef.current.slick.innerSlider.autoPlay()
    }
  }

  componentWillUnmount() {
    this.insuranceRef.current.onmouseover = null
    this.insuranceRef.current.onmouseleave = null
    this.hotLineRef.current.onmouseover = null
    this.hotLineRef.current.onmouseleave = null
  }

  handleApply = () => {
    this.setState({ visible: true })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { isAutoplay, visible } = this.state

    return (
      <div className="home-wrapper">
        <Carousel className="scroll-carousel">
          <div className="base-banner banner-1">
            <img src={Banner_1} alt="客知音" />
            <div>
              <h1 className="color-h1">领先的智能对话分析平台</h1>
              <h1 className="normal-h1">
                <CustomTexty text="开启“智能+”服务新时代，为呼叫中心提高工作效率，提升专业水平。" />
              </h1>
            </div>
          </div>
        </Carousel>

        <div className="fade-carousel">
          <Carousel effect="fade" pauseOnHover={false} autoplay={isAutoplay} ref={this.carouselRef}>
            <div className="sub_banner">
              <img src={Sub_Banner_1} alt="客知音" />
            </div>
            <div className="sub_banner">
              <img src={Sub_Banner_2} alt="客知音" />
            </div>
          </Carousel>
          <div className="fade-content">
            <div>
              <h1 className="title-h1">行业解决方案</h1>
              <div>
                <div ref={this.insuranceRef}>
                  <a href="https://www.kezhiyin.com/insurance" target="_blank" rel="noopener noreferrer">
                    <img src={Insurance} alt="客知音" />
                  </a>
                  <a href="https://www.kezhiyin.com/insurance" target="_blank" rel="noopener noreferrer">
                    <h1>保险</h1>
                  </a>
                  <a href="https://www.kezhiyin.com/insurance" target="_blank" rel="noopener noreferrer">
                    <Button>查看详情</Button>
                  </a>
                </div>
                <div ref={this.hotLineRef}>
                  <a href="https://www.kezhiyin.com/solution/government.html" target="_blank" rel="noopener noreferrer">
                    <img src={HotLine} alt="客知音" />
                  </a>
                  <a href="https://www.kezhiyin.com/solution/government.html" target="_blank" rel="noopener noreferrer">
                    <h1>政府热线</h1>
                  </a>
                  <a href="https://www.kezhiyin.com/solution/government.html" target="_blank" rel="noopener noreferrer">
                    <Button>查看详情</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="apply-content">
          <h1>为您的呼叫中心实现智能化升级，提升服务水平，我们不遗余力！</h1>
          <div>
            <Button onClick={this.handleApply}>联系我们</Button>
            <Button
              href="https://kzy-public-assets.oss-cn-beijing.aliyuncs.com/%E6%99%BA%E8%83%BD%E7%94%B5%E9%94%80%E5%8A%A9%E6%89%8B2.mp4"
              target="_blank"
            >
              演示视频
            </Button>
          </div>
        </div>

        <div className="about-company">
          <div>
            <h1>
              <a href="https://www.kezhiyin.com/">关于公司</a>
            </h1>
            <p>
              <a href="https://www.kezhiyin.com/">北京智合大方科技有限公司</a>
              是一家服务于企业销售和客服的前沿AI科技公司，旗下品牌
              <a href="https://www.kezhiyin.com/">客知音</a>是国内领先的智能对话分析平台。
              <a href="https://www.kezhiyin.com/">客知音</a>
              为电话销售和客服团队推出了一系列AI产品，包括智能外呼系统、智能坐席助手和AI语音质检推动企业销售和客服智能转型，提升专业水平和服务效率，从而提高客户满意度，实现品牌智能升级。
            </p>
            <p>
              <a href="https://www.kezhiyin.com/">客知音</a>
              拥有人工智能语音、语义全栈技术，可定制专属业务场景引擎模型。凭借雄厚的技术实力和完善的服务体系
              <a href="https://www.kezhiyin.com/">客知音</a>
              智能话务解决方案受到了保险、政府、银行、教育、汽车等行业的一致认可和信赖。
              <a href="https://www.kezhiyin.com/">客知音</a>
              已被评选为2018年第四批国家高新企业，荣膺“2018年呼叫中心十大推荐品牌”。
            </p>
            <p className="en-paragraph">
              Beijing Zhihe Dafang Technology Co., Ltd. is a leading AI company that serves sales and customer service
              agents. Kezhiyin is a cutting-edge conversation intelligence platform in China. Kezhiyin has launched a
              series of AI products for tele-reps and customer service agents, including Phonebot, Agent Assist and
              audio compliance System to help call-center agents better serve their clients, improve efficiency and
              increase customer satisfaction.
            </p>
            <p className="en-paragraph">
              Kezhiyin builds its ASR(Automatic Speech Recognition) and NLP(Natural Language Processing) technology in
              house, which enables deep customized models that have superior performance in specific contexts. With
              strong technical strength and focus in customer success, Kezhiyin's conversation intelligence solution has
              been widely recognized and trusted by insurance, government, banking, education, automotive and other
              industries. Kezhiyin was awarded as the fourth batch of national high-tech enterprises in 2018, and won
              the "Top Ten Recommended Brands in 2018 Call Center" prize.
            </p>
          </div>
        </div>

        <InfoModal visible={visible} handleCancel={this.handleCancel} />
      </div>
    )
  }
}

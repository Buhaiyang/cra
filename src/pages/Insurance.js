import React, { Component } from 'react'
import { Button } from 'antd'
import InfoModal from '../components/InfoModal'
import Banner from '../assets/images/insurance/banner.jpg'
import Insurance_1 from '../assets/images/insurance/insurance_1.png'
import Ability_person from '../assets/images/insurance/ability_person.png'
import Inspection from '../assets/images/insurance/inspection.png'
import Recommend from '../assets/images/insurance/recommend.png'
import Navigation from '../assets/images/insurance/navigation.png'
import Profile from '../assets/images/insurance/profile.png'
import Quality from '../assets/images/insurance/quality.png'
import Ai_sale from '../assets/images/insurance/ai_sale.png'
import Power_sale from '../assets/images/insurance/power_sale.png'
import Brand_upgrade from '../assets/images/insurance/brand_upgrade.png'
import Base_1 from '../assets/images/insurance/base_1.png'
import Base_2 from '../assets/images/insurance/base_2.png'
import Base_3 from '../assets/images/insurance/base_3.png'
import Base_4 from '../assets/images/insurance/base_4.png'
import Base_5 from '../assets/images/insurance/base_5.png'
import Icon_1 from '../assets/images/insurance/icon_1.png'
import Icon_2 from '../assets/images/insurance/icon_2.png'
import Icon_3 from '../assets/images/insurance/icon_3.png'
import Icon_4 from '../assets/images/insurance/icon_4.png'
import Icon_5 from '../assets/images/insurance/icon_5.png'
import Customer_1 from '../assets/images/insurance/customer_1.png'
import Customer_2 from '../assets/images/insurance/customer_2.png'
import Customer_3 from '../assets/images/insurance/customer_3.png'
import Customer_4 from '../assets/images/insurance/customer_4.png'
import Customer_5 from '../assets/images/insurance/customer_5.png'
import Customer_6 from '../assets/images/insurance/customer_6.png'
import Customer_7 from '../assets/images/insurance/customer_7.png'
import Customer_8 from '../assets/images/insurance/customer_8.png'
import './Insurance.less'

const CustomCard = props => {
  const { customClass = '', title, subTitle, children } = props

  return (
    <div className={`custom-card-wrapper ${customClass}`}>
      <div className="custom-card-content">
        <div className="title">
          <h2>{title}</h2>
          <h2>{subTitle}</h2>
        </div>
        {children}
      </div>
    </div>
  )
}

const business = [
  {
    icon: Insurance_1,
    key: '1',
    title: '保险服务高标准',
    text: '传统“兜售”模式难以为继，以客户需求为导向的个性化个性化、专业化保险服务难以达标'
  },
  {
    icon: Ability_person,
    key: '2',
    title: '人才培养高难度',
    text: '保险业务人员专业素养不足，业务技巧不够，且流失率高，新人培训投入高却收入低'
  },
  {
    icon: Inspection,
    key: '3',
    title: '质检管理高成本',
    text: '国家监管部门加大违规处罚力度，但全量质检成本高，管理成效低'
  }
]

const solutions = [
  {
    key: '1',
    img: Recommend
  },
  {
    title: '话术智能推荐',
    key: '2',
    text: ['- 根据客户画像和客户异议，推荐最适话术', '- 实时分析销冠话术，共享金牌话术技巧']
  },
  {
    title: '销售思路导航',
    key: '3',
    text: ['- 智能提供销售流程的阶段话术', '- 计时把握销售对话节奏和沟通逻辑']
  },
  {
    key: '4',
    img: Navigation
  },
  {
    key: '5',
    img: Profile
  },
  {
    title: '客户画像自动构建',
    key: '6',
    text: ['- 自动记录客户关键信息：完整、客观、高效', '- 全方位多角度采集信息，为个性化营销提供数据支撑']
  },
  {
    title: '实时全量质检',
    key: '7',
    text: ['- 防止违规：敏感词、身份核实等保险质检项实时监控', '- 促进销售：语速、表达规范、客户异议处理方式全量质检']
  },
  {
    key: '8',
    img: Quality
  }
]

const advantages = [
  {
    key: '1',
    baseIcon: Base_1,
    icon: Icon_1,
    title: '保险行业经验沉淀',
    text: ['- 深入分析对话录音 >3,000,000通', '- 内置保险销售场景的客户异议类型273个', '- 优化保险领域关键词达2000多个']
  },
  {
    key: '2',
    baseIcon: Base_2,
    icon: Icon_2,
    title: 'AI语音语义全栈技术',
    text: ['- 自主知识产权的AI引擎', '- 针对保险领域不同业务场景深度学习', '- 持续优化后智能效果全球领先']
  },
  {
    key: '3',
    baseIcon: Base_3,
    icon: Icon_3,
    title: '系统极速对接',
    text: ['- 后端语音数据流对接方便，前端展示灵活', '- 各项功能点和知识库直接打通，无需重复建设']
  },
  {
    key: '4',
    baseIcon: Base_4,
    icon: Icon_4,
    title: '专业服务保障',
    text: ['- 7*24小时专业服务', '- 系统定期全面检查和优化升级保障客户使用效果']
  },
  {
    key: '5',
    baseIcon: Base_5,
    icon: Icon_5,
    title: '部署方案灵活',
    text: ['- 支持私有化部署，保证数据安全', '- 亦支持SaaS部署，适用企业多种需求']
  }
]

const analysis = [
  {
    icon: Ai_sale,
    key: '1',
    title: 'AI赋能销售',
    text: ['- 扎实的专业知识', '- 灵活的沟通技巧', '- 高超的销售技能', '- 专业的服务态度']
  },
  {
    icon: Power_sale,
    key: '2',
    title: '智能营销',
    text: ['- 客户数据沉淀积累', '- 客户数据质量提升', '- 大数据分析洞察市场', '- 客户个性化营销策略']
  },
  {
    icon: Brand_upgrade,
    key: '3',
    title: '品牌升级',
    text: ['- 客户需求挖掘与满足', '- 客户服务满意度升级', '- 销售业绩与自信心提升', '- 企业品牌认可度增长']
  }
]

const customer = [
  {
    icon: Customer_1,
    key: '1'
  },
  {
    icon: Customer_2,
    key: '2'
  },
  {
    icon: Customer_3,
    key: '3'
  },
  {
    icon: Customer_4,
    key: '4'
  },
  {
    icon: Customer_5,
    key: '5'
  },
  {
    icon: Customer_6,
    key: '6'
  },
  {
    icon: Customer_7,
    key: '7'
  },
  {
    icon: Customer_8,
    key: '8'
  }
]

export default class extends Component {
  state = {
    isAutoplay: true,
    visible: false
  }

  handleApply = () => {
    this.setState({ visible: true })
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const { visible } = this.state

    return (
      <div className="insurance-wrapper">
        <div className="banner-content">
          <div>
            <img src={Banner} alt="客知音" />
          </div>
          <h1>智慧金融-保险智能话务解决方案</h1>
          <h2>AI赋能，打造专业化保险业务团队</h2>
          <Button onClick={this.handleApply}>服务咨询</Button>
        </div>

        <CustomCard title="业务挑战" subTitle="Business Challenges">
          <div className="business">
            {business.map(item => (
              <div key={item.key}>
                <div>
                  <img src={item.icon} alt="客知音" />
                  <h2>{item.title}</h2>
                  <div>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </CustomCard>

        <CustomCard title="方案概述" subTitle="AI Solution" customClass="solution-wrapper">
          <div className="solution">
            {solutions.map(item => (
              <div key={item.key}>
                <div>
                  {item.img ? (
                    <img src={item.img} alt="客知音" />
                  ) : (
                    <div>
                      <span />
                      <h2>{item.title}</h2>
                      <div>
                        {item.text.map((p, index) => (
                          <span key={index}>{p}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CustomCard>

        <CustomCard title="方案优势" subTitle="Our Advantages" customClass="advantages-wrapper">
          <div className="advantages">
            <div>
              {advantages.map(item => (
                <div key={item.key}>
                  <div style={{ backgroundImage: `url(${item.baseIcon})` }}>
                    <img src={item.icon} alt="客知音" />
                    <h2>{item.title}</h2>
                    <div>
                      {item.text.map((p, index) => (
                        <span key={index}>{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CustomCard>

        <CustomCard title="价值分析" subTitle="Value Analysis">
          <div className="analysis">
            {analysis.map(item => (
              <div key={item.key}>
                <div>
                  <img src={item.icon} alt="客知音" />
                  <h2>{item.title}</h2>
                  <div>
                    <span>
                      {item.text.map((p, index) => (
                        <span key={index}>{p}</span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CustomCard>

        <CustomCard title="客户案例" subTitle="Customer Case" customClass="customer-wrapper">
          <div className="customer">
            {customer.map(item => (
              <div key={item.key}>
                <img src={item.icon} alt="客知音" />
              </div>
            ))}
          </div>
        </CustomCard>

        <InfoModal visible={visible} handleCancel={this.handleCancel} />
      </div>
    )
  }
}

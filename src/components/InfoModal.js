import React, { PureComponent } from 'react'
import axios from 'axios'
import { Modal, Form, Checkbox, Input, message } from 'antd'
import { stringify } from 'qs'

const { Item } = Form
const { Group } = Checkbox
const { TextArea } = Input
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
}
const options = ['智能坐席助手', '外呼机器人', 'AI语音质检']

@Form.create()
export default class extends PureComponent {
  handleOk = () => {
    const {
      form: { validateFields },
      handleCancel
    } = this.props
    validateFields({ force: true }, (err, values) => {
      if (err) return
      axios
        .post('https://phonebot.kezhiyin.com:8000/api/DingRequests', stringify({ message: JSON.stringify(values) }), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
        .then(() => {
          message.success('信息提交成功！')
          handleCancel()
        })
        .catch(() => {
          message.error('信息提交失败，请重新提交！')
        })
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      visible,
      handleCancel
    } = this.props

    return (
      <Modal
        wrapClassName="apply-modal-wrapper"
        title="联系我们"
        visible={visible}
        onOk={this.handleOk}
        onCancel={handleCancel}
        destroyOnClose
        centered
      >
        <Form {...formItemLayout}>
          <Item label="姓名">
            {getFieldDecorator('name', {
              initialValue: ''
            })(<Input placeholder="请输入姓名" />)}
          </Item>
          <Item label="手机号码">
            {getFieldDecorator('phone', {
              initialValue: '',
              rules: [
                {
                  required: true,
                  pattern: /^1[3456789]\d{9}$/,
                  validator: (rule, value, callback) => {
                    if (!value && value !== 0) {
                      callback('手机号码不能为空')
                    } else if (!rule.pattern.test(value)) {
                      callback('请输入有效手机号码')
                    } else {
                      callback()
                    }
                  }
                }
              ]
            })(<Input placeholder="请输入手机号码" />)}
          </Item>
          <Item label="邮箱">
            {getFieldDecorator('email', {
              initialValue: ''
            })(<Input placeholder="请输入联系邮箱" />)}
          </Item>
          <Item label="公司名称">
            {getFieldDecorator('company', {
              initialValue: ''
            })(<Input placeholder="请输入公司名称" />)}
          </Item>
          <Item label="产品类型">
            {getFieldDecorator('products', {
              initialValue: []
            })(<Group options={options} />)}
          </Item>
          <Item label="产品需求">
            {getFieldDecorator('requirement', {
              initialValue: ''
            })(<TextArea placeholder="请输入您的需求" rows={4} />)}
          </Item>
        </Form>
      </Modal>
    )
  }
}

import React from 'react'

import {
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  DatePicker
} from 'antd'

import Selects from '../../common/select.jsx'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }
}

const options = [
  {
    value: 'primary',
    data: '初级'
  },
  {
    value: 'intermediate',
    data: '中级'
  },
  {
    value: 'senior',
    data: '高级'
  }
]
class AddTeacher extends React.Component {

  constructor(props) {
    super(props)
    this.formRef = React.createRef()
    this.state = {
      positionalTitlesVal: null,
      ObtainPositionalTitlesTime: null,
      graduationTime: null,
      workStartTime: null
    }
  }

  handleOk = () => {
    const form = this.formRef.current
    const values = form.getFieldsValue(['name', 'age'])
    console.log(values)
    console.log(this.state.positionalTitlesVal)
    this.props.cancel(false)
  }

  handleCancel = () => {
    this.props.cancel(false)
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  selectPositionalTitlesVal = (val) => {
    this.setState({
      positionalTitlesVal: val
    })
  }
  onObtainPositionalTitlesTimeChange = (val) => {
    this.setState({
      ObtainPositionalTitlesTime: val
    })
  }
  onGraduationTimeChange = (val) => {
    this.setState({
      graduationTime: val
    })
  }

  onWorkStartTimeChange = (val) => {
    this.setState({
      workStartTime: val
    })
  }

  render () {
    return (
      <div>
        <Modal
          title="添加"
          width={1000}
          maskClosable={false}
          visible={this.props.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Form
            {...layout}
            ref={this.formRef}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Row>
              <Col span={8}>
                <Form.Item
                  label="姓名"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="年龄"
                  name="age"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="职称"
                  name="positionalTitles" >
                  <Selects
                    list={options}
                    select={this.selectPositionalTitlesVal} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="获取职称时间"
                  name="obtainPositionalTitlesTime" >
                  <DatePicker
                    style={{ width: '100%' }}
                    onChange={this.onObtainPositionalTitlesTimeChange} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="身份证号码"
                  name="personId"
                  rules={[
                    {
                      required: true,
                      message: '身份证号码不能为空！',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="毕业院校"
                  name="graduateSchool"
                  rules={[
                    {
                      required: true,
                      message: '毕业院校不能为空！',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="毕业时间"
                  name="graduationTime"
                  rules={[
                    {
                      required: true,
                      message: '毕业时间不能为空',
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    onChange={this.onGraduationTimeChange} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="工作时间"
                  name="workStartTime"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: '100%' }}
                    onChange={this.onWorkStartTimeChange} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="专业"
                  name="speciality"
                  rules={[
                    {
                      required: true,
                      message: '专业不能为空！',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="行政职务"
                  name="administrativePosition"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="联系地址"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="联系电话"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <InputNumber
                    style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="紧急联系人"
                  name="sosPerson"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="紧急联系人电话"
                  name="sosPersonPhone"
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="所任学科"
                  name="teachSubjectId"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Selects />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="姓名"
                  name="姓名"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="年龄"
                  name="年龄"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="职称"
                  name="职称"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="姓名"
                  name="姓名"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="年龄"
                  name="年龄"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="职称"
                  name="职称"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default AddTeacher
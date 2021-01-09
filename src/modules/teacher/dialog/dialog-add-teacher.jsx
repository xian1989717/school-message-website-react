import React from 'react'
import { connect } from 'react-redux'

import {
  Modal,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  DatePicker
} from 'antd'

import {
  positionalTitleOptions,
  teachSubjectOptions,
  sexOptions,
  baseOptions
} from '../../base-data.js'
import Selects from '../../common/select.jsx'
import RadioGroup from '../../common/radio-group.jsx'

import { addTeacherAction } from '../../../store/actionCreator'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  }
}

// const mapState = (state) => {

// }

const mapDispatch = dispatch => {
  return {
    addTeacher (teacher) {
      dispatch(addTeacherAction(teacher))
    }
  }
}

class AddTeacher extends React.Component {

  constructor(props) {
    super(props)
    this.formRef = React.createRef()
    this.state = {
      positionalTitlesVal: null,
      ObtainPositionalTitlesTime: null,
      graduationTime: null,
      workStartTime: null,
      teachSubjectId: null,
      sex: null
    }
  }

  handleOk = () => {
    const form = this.formRef.current
    const values = form.getFieldsValue([
      'name',
      'age',
      'graduateSchool',
      'speciality',
      'administrativePosition',
      'address',
      'phone',
      'sosPerson',
      'sosPersonPhone',
      'remark'
    ])
    const {
      positionalTitles,
      obtainPositionalTitlesTime,
      graduationTime,
      workStartTime,
      teachSubjectId,
      sex
    } = this.state
    const obj = {
      positionalTitles,
      obtainPositionalTitlesTime,
      graduationTime,
      workStartTime,
      teachSubjectId,
      sex,
      ...values
    }
    this.props.addTeacher(obj)
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
  // 职称
  selectPositionalTitlesVal = (val) => {
    this.setState({
      positionalTitlesVal: val
    })
  }
  // 获取职称时间
  onObtainPositionalTitlesTimeChange = (val) => {
    this.setState({
      ObtainPositionalTitlesTime: val
    })
  }
  // 毕业时间
  onGraduationTimeChange = (val) => {
    this.setState({
      graduationTime: val
    })
  }
  // 工作时间
  onWorkStartTimeChange = (val) => {
    this.setState({
      workStartTime: val
    })
  }
  // 所任学科
  selectTeachSubjectIdVal = (val) => {
    this.setState({
      teachSubjectId: val
    })
  }
  // 性别
  selectSexOption = (_this, val) => {
    this.setState({
      sex: val
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
                    list={positionalTitleOptions}
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
                  ]}>
                  <Selects
                    list={teachSubjectOptions}
                    select={this.selectTeachSubjectIdVal} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="性别"
                  name="sex"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <RadioGroup
                    list={sexOptions}
                    select={this.selectSexOption} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="是否班主任"
                  name="isClassTeacher">
                  <RadioGroup
                    list={baseOptions}
                    select={this.selectSexOption} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="是否党员"
                  name="isPartyMember">
                  <RadioGroup
                    list={baseOptions}
                    select={this.selectSexOption} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <Form.Item
                  label="进修时间"
                  name="studiesTime">
                  <DatePicker
                    style={{ width: '100%' }}
                    onChange={this.onObtainPositionalTitlesTimeChange} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item
                  label="备注"
                  name="remark">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default connect(null, mapDispatch)(AddTeacher)
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { PageHeader, Button, Table, Space, Modal, Form, Input, InputNumber, Row, Col, Checkbox } from 'antd'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: text => <a>{text}</a>,
    width: 50
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 100
  },
  {
    title: '职称',
    dataIndex: 'positionalTitles',
    width: 100
  },
  {
    title: '身份证号码',
    dataIndex: 'personId',
    width: 200
  },
  {
    title: '毕业学校',
    dataIndex: 'graduateSchool',
    width: 180
  },
  {
    title: '专业',
    dataIndex: 'speciality',
    width: 150
  },
  {
    title: '进修时间',
    dataIndex: 'studiesTime',
    width: 180
  },
  {
    title: '工作时间',
    dataIndex: 'workStartTime',
    width: 180
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 150
  },
  {
    title: '毕业时间',
    dataIndex: 'graduationTime',
    width: 180
  },
  {
    title: '取得职称时间',
    dataIndex: 'obtainPositionalTitlesTime',
    width: 250
  },
  {
    title: '行政职务',
    dataIndex: 'administrativePosition',
    width: 180
  },
  {
    title: '联系地址',
    dataIndex: 'address',
    width: 150
  },
  {
    title: '联系电话',
    dataIndex: 'phone',
    width: 150
  },
  {
    title: '紧急联络人',
    dataIndex: 'sosPerson',
    width: 150
  },
  {
    title: '紧急联络人电话',
    dataIndex: 'sosPersonPhone',
    width: 150
  },
  {
    title: '是否班主任',
    dataIndex: 'isClassTeacher',
    width: 150
  },
  {
    title: '所任学科',
    dataIndex: 'subjectName',
    width: 150
  },
  {
    title: '是否党员',
    dataIndex: 'isPartyMember',
    width: 150
  },
  {
    title: '备注',
    dataIndex: 'remark',
    width: 150
  },
  {
    title: '操作',
    dataIndex: '',
    width: 180,
    key: 'x',
    render: (text, record) => (
      <Space size="middle">
        <a>查看</a>
        <a>删除</a>
      </Space>
    ),
  }
]

const data = [
  {
    id: 0,
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    id: 1,
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    id: 2,
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
  }
]

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

class Teacher extends React.Component {

  state = {
    visible: false,
    disabled: true,
  }

  addTeacher = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  onFinish = (values) => {
    console.log('Success:', values)
  }

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  render () {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="教师"
          extra={[
            <Button
              type="primary"
              onClick={this.addTeacher}
            >添加</Button>
          ]}
        />
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: '100vw' }}
          bordered
          rowKey={record => record.id + ''}
          style={{ padding: '0px 24px' }}
        />
        <Modal
          title="添加"
          width={1000}
          maskClosable={false}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
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
      </div >
    )
  }
}

export default Teacher
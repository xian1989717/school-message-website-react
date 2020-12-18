import React from 'react'
import { PageHeader, Button, Table } from 'antd'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    render: text => <a>{text}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '身份证号码',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '职称',
    dataIndex: 'rank'
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

class GradeGroup extends React.Component {
  render () {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="年级组"
          extra={[
            <Button type="primary">添加</Button>
          ]}
        />
        <Table
          columns={columns}
          dataSource={data}
          bordered
          rowKey='id'
          style={{ padding: '0px 24px' }}
        />
      </div >
    )
  }
}

export default GradeGroup
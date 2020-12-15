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
    dataIndex: 'positionalTitles'
  },
  {
    title: '身份证号码',
    dataIndex: 'personId'
  },
  {
    title: '毕业学校',
    dataIndex: 'graduateSchool'
  },
  {
    title: '专业',
    dataIndex: 'speciality'
  },
  {
    title: '职称',
    dataIndex: 'rank'
  },
  {
    title: '进修时间',
    dataIndex: 'studiesTime'
  },
  {
    title: '工作时间',
    dataIndex: 'workStartTime'
  },
  {
    title: '性别',
    dataIndex: 'gender'
  },
  {
    title: '毕业时间',
    dataIndex: 'graduationTime'
  },
  {
    title: '取得职称时间',
    dataIndex: 'obtainPositionalTitlesTime'
  },
  {
    title: '行政职务',
    dataIndex: 'administrativePosition'
  },
  {
    title: '行政职务',
    dataIndex: 'administrativePosition'
  },
  {
    title: '联系地址',
    dataIndex: 'address'
  },
  {
    title: '联系电话',
    dataIndex: 'phone'
  },
  {
    title: '紧急联络人',
    dataIndex: 'sosPerson'
  },
  {
    title: '紧急联络人电话',
    dataIndex: 'sosPersonPhone'
  },
  {
    title: '是否班主任',
    dataIndex: 'isClassTeacher'
  },
  {
    title: '所任学科',
    dataIndex: 'subjectName'
  },
  {
    title: '是否党员',
    dataIndex: 'isPartyMember'
  },
  {
    title: '备注',
    dataIndex: 'remark'
  },
  {
    title: '行政职务',
    dataIndex: 'administrativePosition'
  },
  {
    title: '行政职务',
    dataIndex: 'administrativePosition'
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
class Teacher extends React.Component {

  render () {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="教师"
          extra={[
            <Button type="primary">添加</Button>
          ]}
        />
        <Table
          columns={columns}
          dataSource={data}
          bordered
          rowKey={record => record.id}
          style={{ padding: '0px 24px' }}
        />
      </div>
    )
  }
}

export default Teacher
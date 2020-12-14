import React from 'react'
import { PageHeader, Button } from 'antd';


class GradeGroup extends React.Component {
  render () {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          title="年级组"
        />
        <div style={{ paddingLeft: '24px' }}>
          <Button type="primary">添加</Button>
        </div>
      </div >
    )
  }
}

export default GradeGroup
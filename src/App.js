import React from 'react'
import { Route, Link, HashRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import 'antd/dist/antd.css'

import GradeGroup from './modules/grade-group'
import Teacher from './modules/teacher'

const { Header, Sider } = Layout

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Header>Header</Header>
        <Layout
          style={{
            height: '100%'
          }}>
          <Sider trigger={null} collapsible>
            <Menu mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/gradeGroup">年级组</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                <Link to="/teacher">教师</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Route path="/" component={GradeGroup} exact />
            <Route path="/gradeGroup" component={GradeGroup} />
            <Route path="/teacher" component={Teacher} />
          </Layout>
        </Layout>
      </HashRouter>
    )
  }
}

export default App

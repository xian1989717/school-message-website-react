import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import GradeGroup from './modules/grade-group'
import Test from './modules/test'

const { Sider } = Layout;

class App extends React.Component {
  render () {
    return (
      <HashRouter>
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
                <Link to="/test">测试</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Route path="/gradeGroup" component={GradeGroup} />
            <Route path="/test" component={Test} />
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}

export default App

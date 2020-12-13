import { HashRouter, Route, Link } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import './App.css'


const { Header, Content, Footer, Sider } = Layout

function App () {
  return (
    <Layout style={{ height: '100%' }}>
      <HashRouter>
        <Sider
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to="/gradeGroup">
                年级组
                </Link>
            </Menu.Item>
            {/* <Menu.Item key="2">
              <Link to="/test">
                分包合同记录
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
              <span className="nav-text">nav 4</span>
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} >1234</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ height: '100%', padding: 24, minHeight: 360 }}>
              <Route path="/gradeGroup" component={GradeGroup} exact ></Route>
            </div>
            {/* <div className="site-layout-background" style={{ height: '100%', padding: 24, minHeight: 360 }}>
              <Route path="/test" component={Test}></Route>
            </div> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </HashRouter>
    </Layout>
  )
}

export default App

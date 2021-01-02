import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import './styles/index.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './modules/App'

let store = createStore(todoApp)

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
)

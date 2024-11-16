import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//争取的样式引入顺序
// 样式初始化一般放在最前面
import 'reset-css'
//UI 框架的样式

// 全局样式
import '@/assets/styles/global.scss'

//组件的样式
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import Router from './router/index.tsx'
// 状态管理
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

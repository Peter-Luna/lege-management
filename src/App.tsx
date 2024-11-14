import { useRoutes, Link } from 'react-router-dom';
import router from './router/index'

function App() {
  const outlet = useRoutes(router) // 使用路由
  return (
    <>
      <div className='App'>
        {/* <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/user'>User</Link> */}
        {/* 占位符组件，类似于窗口，用来显示组件的，有点像vue中的router-view */}
        {outlet}
      </div>
    </>
  )
}

export default App

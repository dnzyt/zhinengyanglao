import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage.jsx'
import YiYang from './sections/YiYang.jsx'
import KangYang from './sections/KangYang.jsx'
import ZhuJi from './sections/ZhuJi.jsx'
import RenLi from './sections/RenLi.jsx'
import ShuangChuang from './sections/ShuangChuang.jsx'
import LvYou from './sections/LvYou.jsx'
import GangChangKe from './sections/kangyang/GangChangKe.jsx'
import PiFuKe from './sections/kangyang/PiFuKe.jsx'
import GuKe from './sections/kangyang/GuKe.jsx'
import JiYinJianCe from './sections/kangyang/JiYinJianCe.jsx'
import SanDaJiBing from './sections/kangyang/SanDaJiBing.jsx'
import SanJiaYiYuan from './sections/kangyang/SanJiaYiYuan.jsx'

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      index: true,
      element: <YiYang />
    },
    {
      path: 'yiyang',
      element: <YiYang />
    }, {
      path: 'yiyang/gangchangke',
      element: <GangChangKe />
    }, {
      path: 'yiyang/pifuke',
      element: <PiFuKe />
    }, {
      path: 'yiyang/guke',
      element: <GuKe />
    }, {
      path: 'yiyang/jiyinjiance',
      element: <JiYinJianCe />
    }, {
      path: 'yiyang/sandajibing',
      element: <SanDaJiBing />
    }, {
      path: 'yiyang/sanjiayiyuan',
      element: <SanJiaYiYuan />
    }, {
      path: 'kangyang',
      element: <KangYang />
    }, {
      path: 'zhuji',
      element: <ZhuJi />
    }, {
      path: 'renli',
      element: <RenLi />
    }, {
      path: 'shuangchuang',
      element: <ShuangChuang />
    }, {
      path: 'lvyou',
      element: <LvYou />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

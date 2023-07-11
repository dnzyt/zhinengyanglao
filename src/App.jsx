import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {

  const [showYiYang, setShowYiYang] = useState(false)

  const dismissAll = () => {
    setShowYiYang(false)
  }

  return (
    <>
      <div className="container mx-auto">
        <header className="border-b-2 leading-4 py-1">
          <div className="my-3 flex justify-between items-center">
            <div className="pt-1">
              <a className="link-secondary" href="#"></a>
            </div>
            <div className="text-center">
              <a className="text-3xl" href="#">智能养老</a>
            </div>
            <div className="flex flex-row justify-end items-center">
              <a className="border-2 rounded leading-6 px-2 py-1" href="#">注册</a>
            </div>
          </div>
        </header>

        <div className="relative h-11 py-1 mb-3 border-b-2">
          <nav className="flex flex-nowrap justify-around py-1 text-center">
            <div className="relative">
              <button className="peer px-0 text-lg" type="button" onClick={() => setShowYiYang(!showYiYang)}>医养服务</button>
              <div className={`absolute left-0 top-[calc(100%+.5rem)] w-64 p-1 rounded shadow-xl opacity-0 bg-white transition-all duration-250 ease-in-out -translate-y-2 ${showYiYang ? 'opacity-100 translate-y-0 visible' : 'invisible'} `}
                    onClick={dismissAll}>
                <ul className="list-none">
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang/gangchangke">肛肠科</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang/pifuke">皮肤科</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang/guke">骨科</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang/jiyinjiance">基因检测与大数据筛查</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang/sandajibing">三大疾病医养咨询</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang/sanjiayiyuan">三甲医院诊疗</Link></li>
                </ul>
              </div>
            </div>
            <Link className="px-0 text-lg" to="kangyang">康养服务</Link>
            <Link className="px-0 text-lg" to="zhuji">助急服务</Link>
            <Link className="px-0 text-lg" to="renli">人力资源</Link>
            <Link className="px-0 text-lg" to="shuangchuang">双创服务</Link>
            <Link className="px-0 text-lg" to="lvyou">旅游服务</Link>
          </nav>
        </div>
      </div>
      <main className="container mx-auto" onClick={dismissAll}>
        <Outlet />
      </main>
      <footer className="py-5 text-center text-body-secondary bg-body-tertiary border-t-2">
          <p className="text-sm italic">版权所有 <a href="https://getbootstrap.com/">智能养老</a> by <a href="https://twitter.com/mdo">@ <span className="text-sm not-italic">李湘江</span></a>.</p>
      </footer>
    </>

  )
}
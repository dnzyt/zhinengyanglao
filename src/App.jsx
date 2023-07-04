import { Link, Outlet } from "react-router-dom";

export default function App() {
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
              <button className="peer px-0 text-lg" type="button">医养服务</button>
              <div className="absolute left-0 top-[calc(100%+.5rem)] w-48 p-1 rounded shadow-xl opacity-0 bg-white
              transition-all duration-250 ease-in-out -translate-y-2 peer-focus:opacity-100 peer-focus:translate-y-0">
                <ul className="list-none">
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="yiyang">医养服务</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="kangyang">康养服务</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="zhuji">助急服务</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="renli">人力资源</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="shuangchuang">双创服务</Link></li>
                  <li className="py-1 hover:bg-sky-100"><Link className="block w-full text-lg" to="lvyou">旅游服务</Link></li>
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
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>

  )
}
import React from 'react'
import sunzhizhenggu from '../../assets/sunshizhenggu.png'

export default function GuKe() {
  return (
    <>
      <div className="p-5 mb-4 rounded">
        <div className="container py-5">
          <h1 className="text-4xl font-bold">中医正骨</h1>
          <div className='flex flex-row justify-center p-4'>
            <div className='basis-1/2'>
              <p className="text-md mb-3 font-semibold">孙氏骨伤治疗手法 -- 清宫正骨流派历代手法理论总结</p>
              <ul className='list-disc pl-6'>
                <li>首堂釜体、手掰心会：影像为辅、病症合参</li>
                <li>气血辩证，以血为先</li>
                <li>轻巧柔和、以痛为脸</li>
              </ul>
              <h1 className='text-md my-4 font-semibold'>孙氏“颈椎不定点旋转手法，被国家中医药管理局列入中医临床实用技术推广项目</h1>
          <h1 className='text-md font-semibold'>老年骨折治疗：安全、减痛 -- 纯中药、内服、外敷</h1>
            </div>
            <div className='basis-4 bg-white rounded-md'>
              <img className='max-w-sm mx-auto p-4' src={sunzhizhenggu}></img>
            </div>
          </div>

          

          <h1 className='text-md my-4 font-semibold'>主治病症</h1>
          <p>全身正骨：颈椎病、肩周炎、腰脱、滑膜炎、崴脚、网球肘、妈妈手、富贵包</p>
          <p>小颜整骨：大脸变小脸、大头变小头、小眼变大眼、祛皱纹、颧骨矫正、鼻梁矫正</p>
          <p>体态整骨：骨盆修、骨盆缩小、蜜桃臀、假胯宽</p>

        </div>
      </div>
      <div className='flex flex-row justify-center border-t-2 p-4'>
        <div className="basis-1/3 rounded h-80 drop-shadow-md px-1">
          <video className='w-full' controls>
            <source src="https://www.youtube.com/watch?v=KROfo7vuIGY&t=1s" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="">
            <p className="card-text">视频1</p>
          </div>
        </div>
        <div className="basis-1/3 rounded h-80 drop-shadow-md px-1">
          <video className='w-full' controls>
            <source src="https://www.youtube.com/watch?v=KROfo7vuIGY&t=1s" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="">
            <p className="card-text">视频2</p>
          </div>
        </div>
        <div className="basis-1/3 rounded h-80 drop-shadow-md px-1">
          <video className='w-full' controls>
            <source src="https://www.youtube.com/watch?v=KROfo7vuIGY&t=1s" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="">
            <p className="card-text">视频3</p>
          </div>
        </div>
      </div>
    </>
  )
}

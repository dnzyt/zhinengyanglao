import React from 'react'
import yicaihong from '../../assets/yicaihong.png'
export default function PiFuKe() {
  return (
    <>
      <div className="p-5 mb-4 rounded">
        <div className="container py-5">
          <h1 className="text-4xl font-bold">中医皮肤科</h1>
          <h1 className="text-lg py-2 font-semibold">伊彩虹</h1>
          <p className='text-sm mb-5'>北京宝一堂 院长</p>
          <div className='flex flex-row justify-center p-4'>
            <div className='basis-1/2'>
              <p className="text-md mb-3">中国治癣第一人</p>
              <ul className='list-disc pl-6'>
                <li>CCTV 《影响力对话》访谈人物</li>
                <li>首届全国品牌委皮肤病专业委员会主席</li>
                <li>中国影响力人物数据库行业名人</li>
                <li>建国70周年榜样的力量CCTV特别揭秘榜样人物</li>
                <li>匠心中国入编人物</li>
                <li>中国十大创新英才</li>
                <li>中国十大民办特色专科医院院长</li>
                <li>辽宁中医药研究促进会皮肤病专业委员会专家顾问</li>
                <li>沈阳市老劳模皮肤病医疗服务基地指定首席指导顾问</li>
                <li>北京宝一堂国际皮肤病医学研究院院长</li>
              </ul>
            </div>
            <div className='basis-4 bg-white rounded-md'>
              <img className='max-w-md mx-auto p-4' src={yicaihong}></img>
            </div>
          </div>

          <h1 className='text-md mb-2 font-semibold'>主治疾病</h1>
          <p>银屑病、顽固性湿疹、痤疮、脂溢性皮炎、体股癣、手足癣、头癣、瘙痒</p>
          <p>老年皮肤病治疗：内外兼顾、安全、特性 -- 纯中药，杜绝任何激素</p>
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

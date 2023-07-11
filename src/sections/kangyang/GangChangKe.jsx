import React from 'react'
import xinshiyong from '../../assets/xinshiyong.png'

export default function GangChangKe() {
    return (
        <>
            <div className="p-5 mb-4 rounded">
                <div className="container py-5">
                    <h1 className="text-4xl font-bold">中医肛肠科</h1>
                    <h1 className="text-lg py-2 font-semibold">辛世勇</h1>
                    <p className='text-sm mb-5'>主任医师 医学博士</p>
                    <div className='flex flex-row justify-center p-4'>
                        <div className='basis-1/2'>
                            <p className="text-md mb-3">现任辽宁中医药大学附属第二医院肛肠科主任，辽宁中医药大学附属第二医院中医外科教研室主任</p>
                            <ul className='list-disc pl-6'>
                                <li>辽宁省青年名中医</li>
                                <li>辽宁省中医药首批优才</li>
                                <li>中华中医药促进会肛肠分会副会长</li>
                                <li>中华中医药学会肛肠分会理事</li>
                                <li>中国医师协会肛肠专业委员会理事</li>
                                <li>中医药高等教育学会临床教育研究会肛肠分会理事</li>
                                <li>辽宁省中医药学会肛肠分会副秘书长</li>
                                <li>辽宁省医疗器械新产品注册专家审评会专家</li>
                                <li>辽宁省中医药学会膏方专业委员会</li>
                                <li>辽宁省中医药学会心血管疾病预防与康复专业委员会</li>
                                <li>辽宁中医药学会肛肠病预防与康复专业委员会副主任委员</li>
                            </ul>
                        </div>
                        <div className='basis-4 bg-white rounded-md'>
                            <img className='max-w-xs mx-auto p-4' src={xinshiyong}></img>
                        </div>
                    </div>

                    <h1 className='text-md mb-2'>主要成就</h1>
                    <p>主编出版肛肠专科书籍两部，参编肛肠专科书籍两部，发表国家级论文十余篇，参加省部级以上课题9项，获得发明专利一项，使用新型专利两项，获省市以上科研成果奖4项，其中获辽宁省科技进步三等奖两项，获辽宁省自然科学学术成果三等奖一项，获辽宁省自然科学学术成果奖学术论文三等奖一项，获中国中医药促进会科学进步奖二等奖一项</p>
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

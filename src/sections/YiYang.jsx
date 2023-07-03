import React from 'react'
import healcareUrl from '../assets/healthcare.png'
import firstaidUrl from '../assets/first-aid-kit.png'

export default function YiYang() {
    return (
        <>
            <div className="md:p-7 mb-4 rounded bg-[#E9ECEF] text-black">
                <div className="w-1/2 px-0">
                    <h1 className="text-4xl italic">免疫力基因检测</h1>
                    <p className="text-md my-3">免疫力基因检测是一项主要对中国人群免疫力进行评估的检测项目，同时通过了解个体ACE2基因的变异情况，在现有的研究成果基础上对自身病毒靶向获得初步的认识，达到个性化预防相关疾病的目的</p>
                    <p className="text-sm mb-0">
                        <a href="#" className="font-bold">更多...</a></p>
                </div>
            </div>
            <div className="flex flex-row flex-wrap mb-2">
                <div className="px-10 flex-auto basis-1/2">
                    <div className="flex flex-row rounded relative h-250 mb-4 overflow-hidden">
                        <div className="p-4 flex flex-col shrink static bg-indigo-50">
                            <strong className="inline-block mb-2">人体免疫力基因检测</strong>
                            <div className="mb-2 text-3xl">检测内容</div>
                            <div className="mb-1 text-body-secondary">从基因角度解读人体免疫力以及对病毒性肺炎的易感性</div>
                            <p className="card-text mb-auto">通过基因检测了解自身免疫能力和对病毒性肺炎的易感性，利于及早采取措施，提升免疫力，防患于未然</p>
                        </div>
                        <div className="flex-auto shrink-0">
                            <div className="w-40 h-250 px-2 bg-slate-200">
                                <img className='mx-auto pt-10' src={healcareUrl}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 flex-auto basis-1/2">
                    <div className="flex flex-row rounded relative h-250 mb-4 overflow-hidden">
                        <div className="p-4 flex flex-col shrink static bg-indigo-50">
                            <strong className="inline-block mb-2">健康风险五项检测</strong>
                            <div className="mb-2 text-3xl">适合人群</div>
                            <div className="mb-1 text-body-secondary">检测对癌症和心脑血管等重大疾病的抵抗能力，防患于未然</div>
                            <p className="card-text mb-auto">所有人(尤其是癌症易感人群、高血压人群、中风易感人群、备孕女性、吸烟饮酒人群)</p>
                        </div>
                        <div className="flex-auto shrink-0">
                            <div className="w-40 h-250 px-2 bg-slate-200">
                                <img className='mx-auto pt-10' src={firstaidUrl}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='basis-2/3'>
                    <div className="pb-4 mb-4 italic border-b text-4xl">营养吸收基因检测</div>
                    <article className="mb-4">
                        <h2 className="text-2xl mb-2 bg-slate-300">为什么需要做营养元素基因检测?</h2>
                        <p className="">基因决定个体先天营养吸收能力</p>
                        <p>合理的膳食安排是人体健康成长的必要保证，个体的营养吸收能力不同，需要补充的食物也不同。维生素和矿物质的缺乏会导致身体患严重的疾病，需要补充；但如果维生素、矿物质在体内的含量过高，也会导致身体受到伤害。维持体内维生素、矿物质的平衡对健康至关重要，膳食结构不当会导致营养摄入过量或缺乏，增加患病风险</p>
                    </article>
                    <article className="mb-4">
                        <h2 className="text-2xl mb-2 bg-slate-300">营养吸收基因检测项目</h2>
                        <p className="m-1 text-black italic font-bold">检测内容</p>
                        <p className='mb-4'>维生素A、维生素B6、维生素B9（叶酸）、维生素B12、维生素C、维生素D、维生素E、维生素K；碘元素、钙元素、钾元素、镁元素、铁元素、铜元素、硒元素、锌元素</p>
                        <p className="m-1 text-black italic font-bold">检测基因</p>
                        <p className='mb-4'>BCMO1、CYP26B1、PKD1L2、NBPF3、ALPL、MTHFR、MTRR、MTR、MS4A3、CLYBL、FUT6、PRELID2、FUT6、SLC23A1、GC、CYP2R1、NADSYN1、CYP4F2、SCARB1、ZPR1、VKORC1、PDE8B、DIO2、VDR、CASR、NOS3、ACE、TRPM6、ATP2B1、MUC1、SHROOM3、DCDC5、TMPRSS6、SMIM1、SELENBP1、DMGDH、CA1、PPCDC、NBDY</p>
                        <p className="m-1 text-black italic font-bold">检测意义</p>
                        <p className='mb-4'>通过基因检测可以评估自身对各种营养物质的吸收代谢能力，只有深入了解自身营养情况，才能合理的从食物中进行补充</p>
                    </article>
                    <article className="mb-4">
                        <h2 className="text-2xl mb-2 bg-slate-300">为什么需要做营养元素基因检测?</h2>
                        <p className="m-1 text-black italic">基因决定个体先天营养吸收能力</p>
                        <p>合理的膳食安排是人体健康成长的必要保证，个体的营养吸收能力不同，需要补充的食物也不同。维生素和矿物质的缺乏会导致身体患严重的疾病，需要补充；但如果维生素、矿物质在体内的含量过高，也会导致身体受到伤害。维持体内维生素、矿物质的平衡对健康至关重要，膳食结构不当会导致营养摄入过量或缺乏，增加患病风险</p>
                    </article>
                </div>
                <div className='basis-1/3'>
                    <div className="p-4 m-3 rounded bg-slate-300">
                        <h4 className="text-xl">健康风险五项检测项目详细说明</h4>
                        <ul className='list-disc my-3 p-4'>
                            <li>P53抑癌能力</li>
                            <li>DNA修复能力</li>
                            <li>毒素代谢能力</li>
                            <li>血同代谢能力</li>
                            <li>叶酸代谢能力</li>
                        </ul>
                        <div className='p-2'>
                            <div className='mb-1 font-bold'>检测意义</div>
                            <p className='text-md mb-3'>检测对癌症和心脑血管等重大疾病的抵抗能力，防患于未然</p>
                            <div className='mb-1 font-bold'>检测基因</div>
                            <p className='text-md mb-3'>P53基因、CYP2E1基因、XRCC2基因、MTHFR基因、MTRR基因</p>
                            <div className='mb-1 font-bold'>适合人群</div>
                            <p className='text-md mb-3'>所有人(尤其是癌症易感人群、高血压人群、中风易感人群、备孕女性、吸烟饮酒人群、受环境污染人群等)</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
                <p>版权所有 <a href="https://getbootstrap.com/">智能养老</a> by <a href="https://twitter.com/mdo">@李湘江</a>.</p>
            </footer>
        </>

    )
}

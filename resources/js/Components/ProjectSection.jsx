import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ProjectSection (data) {
    const [listData, setData] = useState(data.data.project.limitData)
    const showAll = async () => {
        try {
            await setData(data.data.project.allData);
        } catch (e) {
            alert('Terjadi kesalahan:', e);
        }
    }

    const showLess = async () => {
        try {
            await setData(data.data.project.limitData);
        } catch (e) {
            alert('Terjadi kesalahan:', e);
        }
    }

    return (
        <section id="project" className="w-full max-w-screen-lg px-4 pt-24 pb-4 mx-auto bg-white md:pt-28 md:pb-0">
            <motion.div initial={{x: -4, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: "easeInOut", duration: 1 }}} viewport={{once : true}} className="font-bold text-[32px] md:text-[48px] text-center pb-14">Project</motion.div>
            <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex flex-wrap mx-4 md:mx-0">
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-[28px] md:text-[32px]">Project I've Created</div>
                <div className="text-[16px] md:text-[18px] py-4 text-justify">This project was created while I was learning about programming and UI/UX Design, go check them bellow</div>
            </motion.div>
            <div className="flex flex-wrap flex-col justify-center items-center md:items-stretch md:grid md:grid-cols-3 md:gap-4 pt-[22px]">
                {listData.map((data) => (
                    <motion.div initial={{y: 40, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: "easeInOut", duration: 0.8 }}} viewport={{once : true}} whileHover={{rotate: 8}} transition={{duration: 0.2, ease: "easeIn", times: [0]}} className="mx-4 my-2 bg-white border border-gray-200 rounded-lg shadow md:mx-0 max-w-screen-xs md:max-w-screen-xl" key={data.id}>
                        {data.link_production || data.link_behance || data.link_dribbble || data.link_github ? (
                            <a href={data.link_github || data.link_behance || data.link_dribbble} target="_blank">
                                <img className="rounded-t-lg" src={`/storage/${data.img.substring(7)}`} alt="" />
                            </a>
                        ) : (
                            <a href="#" onClick={() => alert(`Sorry, Company Projects!`)} >
                                <img className="rounded-t-lg" src={`/storage/${data.img.substring(7)}`} alt="" />
                            </a>
                        )}
                        <div className="p-5">
                            {data.link_production || data.link_behance || data.link_dribbble || data.link_github ? (
                                <a href={data.link_production || data.link_github || data.link_behance || data.link_dribbble || ("#") } target="_blank">
                                    <h5 className="mb-2 text-[24px] md:text-[28px] font-bold tracking-tight">{data.title}</h5>
                                </a>
                            ) : (
                                <a href="#project" onClick={() => alert(`Sorry, Company Projects!`)}>
                                    <h5 className="mb-2 text-[24px] md:text-[28px] font-bold tracking-tight">{data.title}</h5>
                                </a>
                            )}
                            <p className="mb-3 font-normal text-[14px] text-justify">{data.description}</p>
                            <div className="flex items-start justify-start ">
                                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-auto px-4 py-1 mt-[6px] rounded-full font-medium text-[12px] md:text-[14px] text-[#FaFaFa] text-center mr-[8px]">{data.category.name_category}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div initial={{y: 15, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex items-center justify-center my-2 md:my-6">
                {listData.length > 6 ? (
                    <motion.div whileHover={{scale:1.05}} onClick={() => showLess()} className="py-3 px-4 m-2 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[14px] md:text-[16px]">Show Less</motion.div>
                ) : (
                    <motion.div whileHover={{scale:1.05}} onClick={() => showAll()} className="py-3 px-4 m-2 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[14px] md:text-[16px]">More Project</motion.div>
                )}
            </motion.div>
        </section>
    )
}
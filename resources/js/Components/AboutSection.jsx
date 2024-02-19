import { motion } from "framer-motion"
import { useEffect, useRef } from "react";
import { SiLaravel, SiReact, SiHtml5, SiCss3, SiJavascript, SiFigma, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function AboutSection(){
    return (
        <section id="about" className="w-full max-w-screen-lg px-4 pt-24 mx-auto bg-white md:pt-40">
            <div className="flex flex-col-reverse mx-4 md:grid md:grid-cols-2 md:gap-4">
                <motion.div initial={{x: -15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex flex-col items-center">
                    <div className="text-center md:text-left">
                        <h1 className="font-bold text-[28px] md:text-[48px]">Developed product with user experience oriented.</h1>
                        <div className="py-4 text-[16px] md:text-[20px]">User experience is a important part of developing product, because a good user experience, it will give a good impression to users.</div>
                    </div>
                </motion.div>
                <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex justify-center">
                    <iframe className="w-[500px] h-[300px] md:w-[500px] md:h-[360px]" src="https://rive.app/s/rWo4CFolZUKIoqxPHk_cjQ/embed"></iframe>
                </motion.div>
            </div>
            <div className="flex flex-col items-start pt-8 mx-4 md:pt-20 md:grid md:grid-cols-2 md:gap-4">
                <motion.div initial={{x: -15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex items-center justify-center">
                    <object className="w-[390px] h-[300px] md:w-[600px] md:h-[360px]" data="/img/AvatarFix.svg" type="image/svg+xml">SVG not supported</object>
                </motion.div>
                <div className="flex flex-col items-center">
                    <div className="text-center md:text-left">
                        <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="font-bold text-[32px] md:text-[48px]">Work Experience</motion.div>
                        <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="md:py-[14px] py-[18px]">
                            <div className="mx-2 text-center md:text-left">
                                <div className="font-bold md:text-[24px] text-[22px]">Fullstack Developer</div>
                                <div className="font-medium text-[18px] text-slate-600">UPA TIK Universitas Pendidikan Ganesha</div>
                                <div className="text-[16px] text-slate-500">Nov 2023 - Now</div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[78px] py-[4px] mt-[6px] rounded-full font-medium text-[14px] text-[#FaFaFa] text-center">Full Time</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="md:py-[14px] py-[18px]">
                            <div className="mx-2 text-center md:text-left">
                                <div className="font-bold md:text-[24px] text-[22px]">Fullstack Developer</div>
                                <div className="font-medium text-[18px] text-slate-600">Freelance</div>
                                <div className="text-[16px] text-slate-500">Aug 2023 - Nov 2023</div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[78px] py-[4px] mt-[6px] rounded-full font-medium text-[14px] text-[#FaFaFa] text-center">Full Time</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="md:py-[14px] py-[18px]">
                            <div className="mx-2 text-center md:text-left">
                                <div className="font-bold md:text-[24px] text-[22px]">Web Programmer</div>
                                <div className="font-medium text-[18px] text-slate-600">Queens Tandoor</div>
                                <div className="text-[16px] text-slate-500">August 2022 - April 2023</div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[78px] py-[4px] mt-[6px] rounded-full font-medium text-[14px] text-[#FaFaFa] text-center">Full Time</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="md:py-[14px] py-[8px]">
                            <div className="mx-2 text-center md:text-left">
                                <div className="font-bold md:text-[24px] text-[22px]">Web Programmer & SEO Specialist</div>
                                <div className="font-medium text-[18px] text-slate-600">CV.Rumah Media</div>
                                <div className="text-[16px] text-slate-500">January 2022 - March 2022</div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[85px] py-[4px] mt-[6px] rounded-full font-medium text-[14px] text-[#FaFaFa] text-center">Internship</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="md:py-[14px] py-[8px]">
                            <div className="mx-2 text-center md:text-left">
                                <div className="font-bold md:text-[24px] text-[22px]">Software Engineer</div>
                                <div className="font-medium text-[18px] text-slate-600">Veterinarian Clinic drh.I Gusti Ayu Endang Puspitasari</div>
                                <div className="text-[16px] text-slate-500">January 2021 - March 2021</div>
                                <div className="flex items-center justify-center md:justify-start">
                                    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[85px] py-[4px] mt-[6px] rounded-full font-medium text-[14px] text-[#FaFaFa] text-center">Internship</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="py-8 md:py-20">
                <div className="text-center font-bold text-[28px] md:text-[48px]">Technology I Have Use</div>
                <div className="flex flex-wrap justify-center items-stretch md:items-center max-w-screen-lg pt-[22px]">
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{rotate: [5, -5, 5], y: [-15, 5,-15]}} transition={{duration: 2, ease: "easeIn", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiHtml5 className="text-[#ff7300] text-[64px] md:text-[80px] flex"></SiHtml5>
                        </motion.div>
                        <p className="font-semibold text-black">HTML</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{rotate: [5, -5, 5], y: [5, -15, 5]}} transition={{duration: 3, ease: "easeIn", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiCss3 className="text-[#0a74ff] text-[64px] md:text-[80px]"></SiCss3>
                        </motion.div>
                        <p className="font-semibold text-black">CSS</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{y:[0, -12, -8, 8, 12, 2], rotate:[0, 15, 12, -15, -12, 0]}} transition={{duration: 4, ease: "easeInOut", times: [1], repeat: Infinity, repeatDelay: 0}}>
                            <SiJavascript className="text-[#ffd500] text-[64px] md:text-[80px]"></SiJavascript>
                        </motion.div>
                        <p className="font-semibold text-black ">JavaScript</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{y:[0, 12, 8, -8, -12, -2], rotate:[0, 90, 180, 270, 360]}} transition={{duration: 4, ease: "easeInOut", times: [1], repeat: Infinity, repeatDelay: 0}}>
                            <SiTypescript className="text-[#3178c6] text-[64px] md:text-[80px]" />
                        </motion.div>
                        <p className="font-semibold text-black ">TypeScript</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{scale: [1, 1.1, 1]}} transition={{duration: 2, ease: "easeIn", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiLaravel className="text-[#ff0000] text-[64px] md:text-[80px]"></SiLaravel>
                        </motion.div>
                        <p className="font-semibold text-black">Laravel</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{rotate: [0, 90, 180, 270, 360]}} transition={{duration: 5, ease: "easeInOut", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiReact className="text-sky-400 text-[64px] md:text-[80px]"></SiReact>
                        </motion.div>
                        <p className="font-semibold text-black">React Js</p>
                    </div>
                    <div className="flex flex-col items-center py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{rotate: [0, -90, -180, -270, -360]}} transition={{duration: 5, ease: "easeInOut", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiReact className="text-sky-600 text-[64px] md:text-[80px]"></SiReact>
                        </motion.div>
                        <p className="font-semibold text-black">React Native</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{rotate: [15, 0, 15]}} transition={{duration: 2, ease: "easeIn", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiFigma className="text-slate-700 text-[64px] md:text-[80px]"></SiFigma>
                        </motion.div>
                        <p className="font-semibold text-black">Figma</p>
                    </div>
                    <div className="py-[8px] px-[12px] m-2 text-center">
                        <motion.div animate={{x:[-4, 8, -4], y:[-2, 2, -2], rotate: [15, -15, 15]}} transition={{duration: 2, ease: "easeIn", times: [0], repeat: Infinity, repeatDelay: 0}}>
                            <SiTailwindcss className="text-sky-400 text-[72px] md:text-[80px]"></SiTailwindcss>
                        </motion.div>
                        <p className="font-semibold text-black ">Tailwind CSS</p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

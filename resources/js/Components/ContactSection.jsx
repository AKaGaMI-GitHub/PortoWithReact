import { motion } from "framer-motion"
import { SiDiscord } from "react-icons/si"

export default function ContactSection () {
    return (
        <section id="contact" className="w-full max-w-screen-lg px-4 pt-24 pb-8 mx-auto bg-white md:pb-14 md:pt-28">
            <motion.div initial={{x: 15, opacity: 0}} whileInView={{x:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex flex-wrap justify-center mx-4 md:justify-start md:mx-0">
                <div className="text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-[28px] md:text-[36px]">Have any projects idea?</div>
                <div className="text-[16px] md:text-[18px] py-4 text-center md:text-justify">I love disscuss about product design, collaborating works, and playing games. you can find me on</div>
            </motion.div>
            <motion.div initial={{y: 40, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: "easeInOut", duration: 0.8 }}} viewport={{once : true}} className="flex flex-col items-center md:grid md:grid-cols-3 md:gap-4">
                <motion.a whileHover={{scale: 1.05}} href="#" className="flex flex-row items-center mx-4 my-2 bg-white border border-gray-200 rounded-lg shadow md:mx-0">
                    <img className="w-[54px] md:w-[60px] mx-4" alt="Whatsapp" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
                    <div className="flex flex-col justify-between py-4">
                        <h5 className="mb-2 text-[18px] md:text-[24px] font-bold tracking-tight text-gray-900">WhatsApp</h5>
                        <p className="mb-3 mr-2 font-normal text-[14px] md:text-[16px] text-gray-700">WhatsApp is my daily apps, you can text me here</p>
                    </div>
                </motion.a>
                <motion.a whileHover={{scale: 1.05}} href="mailto:anantha.14042@gmail.com" target="_blank" className="flex flex-row items-center mx-4 my-2 bg-white border border-gray-200 rounded-lg shadow md:mx-0">
                    <img className="w-[54px] md:w-[60px] mx-4" alt="Gmail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png"/>
                    <div className="flex flex-col justify-between py-4">
                        <h5 className="mb-2 text-[18px] md:text-[24px] font-bold tracking-tight text-gray-900">Gmail</h5>
                        <p className="mb-3 mr-2 font-normal text-[14px] md:text-[16px] text-gray-700">Gmail is the way to connect with me formaly</p>
                    </div>
                </motion.a>
                <motion.a whileHover={{scale: 1.05}} href="https://discordapp.com/users/322940700205383682" target="_blank" className="flex flex-row items-center mx-4 my-2 bg-white border border-gray-200 rounded-lg shadow md:mx-0">
                    <img className="w-[54px] md:w-[60px] mx-4" alt="Discord" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"/>
                    <div className="flex flex-col justify-between py-4">
                        <h5 className="mb-2 text-[18px] md:text-[24px] font-bold tracking-tight text-gray-900">Discord</h5>
                        <p className="mb-3 mr-2 font-normal text-[14px] md:text-[16px] text-gray-700">Discord is platform i used to informaly disscusion</p>
                    </div>
                </motion.a>
            </motion.div>
        </section>
    )
}
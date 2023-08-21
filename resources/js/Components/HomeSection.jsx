import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";

export default function HomeSection(){
    return(    
        <section id="home" className="flex flex-col items-center justify-center max-w-screen-lg px-4 mx-auto bg-white pt-28 mb-18 md:mb-0 md:pt-36">
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="w-56 h-56 overflow-hidden rounded-full md:w-64 md:h-64 bg-gradient-to-r from-indigo-400 via-purple-450 to-pink-400">
                <img src="img/Profile.png"/>
            </motion.div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="text-[40px] md:text-[56px] font-bold text-black text-center">MADE ANANTHA YOGA</motion.div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="text-[18px] md:text-[28px] text-gray-600 text-center">Software Engineer & UI/UX Designer</motion.div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex justify-center pt-2">
                <motion.a whileHover={{scale:1.2}} href="https://www.facebook.com/DotA2.M9/" className="p-3 m-2 text-white rounded-full text-md md:text-2xl bg-sky-400"><FaFacebookF /></motion.a>
                <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/madeananthayoga/" className="p-3 m-2 text-white bg-blue-500 rounded-full text-md md:text-2xl"><FaLinkedinIn /></motion.a>
                <motion.a whileHover={{scale:1.2}} href="https://www.instagram.com/anantha.yoga/" className="p-3 m-2 text-white rounded-full text-md md:text-2xl bg-gradient-to-br from-indigo-500 via-rose-500 to-yellow-500"><FaInstagram /></motion.a>
                <motion.a whileHover={{scale:1.2}} href="https://dribbble.com/netsahabat08" className="p-3 m-2 text-white bg-pink-500 rounded-full text-md md:text-2xl"><FaDribbble /></motion.a>
                <motion.a whileHover={{scale:1.2}} href="https://www.behance.net/madeananthayoga" className="p-3 m-2 text-white bg-blue-600 rounded-full text-md md:text-2xl"><FaBehance /></motion.a>
            </motion.div>
            <motion.div initial={{y: 100, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: [0.6,0.01,0.05,0.95], duration: 1.7 }}} viewport={{once : true}} className="flex justify-center pt-2">
                <motion.a whileHover={{scale:1.2}} href="pdf/CV-Eng.pdf" target="_blank" className="py-3 px-4 m-2 text-white rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[14px] md:text-[16px]">Download CV</motion.a>
            </motion.div>
        </section>
    )
};
import { motion } from "framer-motion"
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDribbble, FaBehance } from "react-icons/fa6";

export default function FooterSection() {
    return (
        <motion.footer initial={{y: 40, opacity: 0}} whileInView={{y:0, opacity:1, transition:{ ease: "easeInOut", duration: 0.8 }}} viewport={{once : true}} className="w-full max-w-screen-lg px-8 mx-auto bg-white pb-[220px] md:pb-8 md:px-0">
            <div className="flex flex-col-reverse items-center justify-center md:flex-row md:justify-between">
                <span className="text-[14px] align-center md:text-[18px] text-black sm:text-center">© 2023 <a href="#" className="hover:underline">Made Anantha Yoga</a>. All Rights Reserved.
                </span>
                <div className="flex items-center justify-center mt-4 md:mt-0">
                    <motion.a whileHover={{scale:1.2}} href="#" className="p-3 m-2 text-white rounded-full text-md md:text-[18px] bg-sky-400"><FaFacebookF /></motion.a>
                    <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/madeananthayoga/" className="p-3 m-2 text-white rounded-full text-md md:text-[18px] bg-blue-500"><FaLinkedinIn /></motion.a>
                    <motion.a whileHover={{scale:1.2}} href="https://www.instagram.com/anantha.yoga/" className="p-3 m-2 text-white rounded-full text-md md:text-[18px] bg-gradient-to-br from-indigo-500 via-rose-500 to-yellow-500"><FaInstagram /></motion.a>
                    <motion.a whileHover={{scale:1.2}} href="#" className="p-3 m-2 text-white bg-pink-500 rounded-full text-md md:text-[18px]"><FaDribbble /></motion.a>
                    <motion.a whileHover={{scale:1.2}} href="#" className="p-3 m-2 text-white bg-blue-600 rounded-full text-md md:text-[18px]"><FaBehance /></motion.a>
                </div>
            </div>
        </motion.footer>
    )
}
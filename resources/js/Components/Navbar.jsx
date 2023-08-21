import { Link, Head } from "@inertiajs/react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Navbar({ activeSection, className = "", children, ...props }) {
    return (
        <header className="fixed relative top-0 z-50 flex justify-center block px-0">
            <motion.nav initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1.5 } }} className="fixed p-4 bg-white rounded-full text-center w-[300px] drop-shadow-md mt-8 md:w-[450px]">
                <a href="#home" className={`px-[12px] text-sm md:text-base md:px-6 ${activeSection === "home" ? "active" : ""}`}>
                    Home
                </a>
                <a href="#about" className={`px-[12px] text-sm md:text-base md:px-6 ${activeSection === "about" ? "active" : ""}`}>
                    About
                </a>
                <a href="#project" className={`px-[12px] text-sm md:text-base md:px-6 ${activeSection === "project" ? "active" : ""}`}>
                    Project
                </a>
                <a href="#contact" className={`px-[12px] text-sm md:text-base md:px-6 ${activeSection === "contact" ? "active" : ""}`}>
                    Contact
                </a>
            </motion.nav>
        </header>
    );
}

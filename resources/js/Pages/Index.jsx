import { Link, Head } from "@inertiajs/react"
import Navbar from "@/Components/Navbar"
import HomeSection from "@/Components/HomeSection"
import AboutSection from "@/Components/AboutSection"
import ProjectSection from "@/Components/ProjectSection"
import ContactSection from "@/Components/ContactSection"
import FooterSection from "@/Components/FooterSection"
import { useState, useEffect } from "react"


export default function Index (props) {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const home = document.getElementById("home");
            const about = document.getElementById("about");
            const project = document.getElementById("project");
            const contact = document.getElementById("contact");

            const scrollPosition = window.scrollY;

            if (scrollPosition >= home.offsetTop && scrollPosition < about.offsetTop - 10) {
                setActiveSection("home");
            } else if (scrollPosition >= about.offsetTop - 10 && scrollPosition < project.offsetTop - 10) {
                setActiveSection("about");
            } else if (scrollPosition >= project.offsetTop - 10 && scrollPosition < contact.offsetTop - 200) {
                setActiveSection("project");
            } else if (scrollPosition >= contact.offsetTop - 200) {
                setActiveSection("contact");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])
        
    return(
        <>
            <Head title="AKaGaMI" />
            <Navbar activeSection={activeSection} />
            <HomeSection />
            <AboutSection />
            <ProjectSection data={props} />
            <ContactSection />
            <FooterSection />
        </>
    )
}
import {
    FaBars,
    FaXmark,
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaCodepen,
    FaEnvelope,
} from "react-icons/fa6";
import {
    MenuIcon,
    Code,
    CodeXml,
    Braces,
    FolderCode,
    FileCode,
    MessageCircleCode,
    SearchCode,
    SquareArrowOutUpRight,
    XIcon,
    Home,
    UserSearch,
    ToolCase,
    Contact,
} from "lucide-react";

import { useState, useEffect } from "react";
import useDataContext from "./hooks/useDataContext";
import CodeBlock from "./assets/codeblock.svg";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { projects, techStack } = useDataContext();

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSection = null;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSection = entry;
                    }
                });

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                threshold: 0.2,
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    /* useEffect(() => {
        document.body.style.overflow = isOpenMenu ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpenMenu]); */

    return (
        <section className="min-h-screen bg-app-radial z-10">
            <header className="flex justify-end lg:sticky top-0 z-10 backdrop-blur-md">
                <nav className="lg:visible invisible p-4">
                    <ul className="flex gap-16 justify-end items-center text-slate-500 px-8  z-0">
                        <li>
                            <button className="border-2 border-cyan-600 rounded-md font-semibold text-nowrap text-sm text-cyan-400 shadow-[0px_0px_10px_0px] shadow-cyan-600 hover:bg-cyan-500 hover:text-cyan-950 transition-all duration-200">
                                <a
                                    className="flex justify-center items-center w-full h-full px-4 min-h-10"
                                    href="/Nwafor-Emmanuel-CV.pdf"
                                    target="_blank"
                                    download
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </a>
                            </button>
                        </li>
                        <li className="text-md hover:text-slate-200 transition-all duration-200">
                            <a href="#home">Home</a>
                        </li>
                        <li className="text-md hover:text-slate-200 transition-all duration-200">
                            <a href="#about">About</a>
                        </li>
                        <li className="text-md hover:text-slate-200 transition-all duration-200">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="text-md hover:text-slate-200 transition-all duration-200">
                            <a href="contacts">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-betweeen items-center gap-10 lg:hidden py-4">
                    <button className="border-2 border-cyan-600 rounded-md font-semibold text-nowrap text-sm text-cyan-400 shadow-[0px_0px_10px_0px] shadow-cyan-600 hover:bg-cyan-500 hover:text-cyan-950 transition-all duration-200">
                        <a
                            className="flex justify-center items-center w-full h-full px-4 min-h-10"
                            href="/Nwafor-Emmanuel-CV.pdf"
                            target="_blank"
                            download
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </button>
                    <button
                        className="mr-6 h-10"
                        onClick={() => setIsOpenMenu(true)}
                    >
                        <MenuIcon className="text-slate-300 w-8 h-8 hover:text-cyan-500" />
                    </button>
                </div>
            </header>

            {isOpenMenu && (
                <nav
                    id="mobile-menu"
                    className="flex flex-col min-h-screen fixed top-0 left-0 bg-slate-800 w-full z-70 bounce"
                >
                    <div className="flex justify-between items-end p-8">
                        <p className="text-2xl text-slate-200 font-semibold">
                            CHETA <span className="text-slate-600">NWAFOR</span>
                        </p>
                        <button onClick={() => setIsOpenMenu(false)}>
                            <XIcon className="w-9 h-9 text-slate-300" />
                        </button>
                    </div>
                    <span className="w-full flex justify-center text-slate-900 absolute my-46 mx-auto opacity-20">
                        <Braces className="w-80 h-80" />
                    </span>
                    <ul
                        className="flex flex-col my-25 mx-auto text-slate-500 text-xl text-center w-[80%] z-10"
                        onClick={() => setIsOpenMenu(false)}
                    >
                        <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                            <a
                                href="#home"
                                className="block w-full"
                            >
                                HOME
                            </a>
                        </li>
                        <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                            <a
                                href="#about"
                                className="block w-full"
                            >
                                ABOUT
                            </a>
                        </li>
                        <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                            <a
                                href="#projects"
                                className="block w-full"
                            >
                                PROJECTS
                            </a>
                        </li>
                        <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                            <a
                                href="#contact"
                                className="block w-full"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                    <p className="text-slate-500 text-center mt-8">
                        Cheta.dev2026
                    </p>
                </nav>
            )}

            <section
                className="flex flex-col gap-14 lg:flex-row justify-between w-full mt-5 mb-20 sm:mt-0 md:px-18 md:pt-20 sm:p-16 p-8  overflow-x-hidden relative z-0 scroll-mt-40"
                id="home"
            >
                <article className="lg:min-w-[calc(40%-2rem)] w-full lg:pl-20">
                    <span className="block text-nowrap text-7xl lg:text-[10rem] absolute mx-auto my-25 lg:left-10 font-bold text-slate-900 opacity-20 z-0">
                        CHETA NWAFOR
                    </span>
                    <span className="block w-2/3 z-0">
                        <Code className="sm:w-50 sm:h-50 w-40 h-40 absolute sm:top-0 -top-4 sm:left-25 left-0 text-gray-950 opacity-10" />
                    </span>
                    <h2 className="sm:text-5xl text-4xl font-bold text-slate-600 mb-2">
                        Hi, I'm
                    </h2>
                    <h1 className="sm:text-5xl text-5xl font-bold text-blue-100 mb-4">
                        Cheta Nwafor
                    </h1>
                    <h3 className="text-2xl text-blue-100 mb-6">
                        Frontend Developer
                    </h3>
                    <p
                        id="intro-message"
                        className="text-blue-200 lg:text-xl text-lg mb-6"
                    >
                        I create web solutions that combine <br />
                        design, usability, and performance.
                    </p>
                    <ul
                        id="hero-links"
                        className="flex flex-col gap-2 p-2 w-1/2 text-slate-300 text-sm font-semibold"
                    >
                        <a
                            href="#home"
                            className="z-10"
                        >
                            <li
                                className="z-1 flex gap-2 items-center"
                                onClick={() => setActiveSection("home")}
                            >
                                <span className="indicator block w-6.5 h-1 bg-slate-200"></span>
                                HOME
                            </li>
                        </a>
                        <a href="#about">
                            <li
                                className="z-1 flex gap-2 items-center"
                                onClick={() => setActiveSection("about")}
                            >
                                <span className="indicator block w-6.5 h-1 bg-slate-200"></span>
                                ABOUT
                            </li>
                        </a>
                        <a href="#projects">
                            <li
                                className="z-1 flex gap-2 items-center"
                                onClick={() => setActiveSection("projects")}
                            >
                                <span className="indicator block w-6.5 h-1 bg-slate-200"></span>
                                PROJECTS
                            </li>
                        </a>
                        <a href="#contact">
                            <li
                                className="z-1 flex gap-2 items-center"
                                onClick={() => setActiveSection("contact")}
                            >
                                <span className="indicator block w-6.5 h-1 bg-slate-200"></span>
                                CONTACT
                            </li>
                        </a>
                    </ul>
                    <span>
                        <CodeXml className="sm:w-60 sm:h-60 w-45 h-45 absolute bottom-0 sm:left-170 right-15 text-gray-700 opacity-30" />
                    </span>
                    <nav className="mt-6">
                        <ul className="flex gap-4 lg:gap-6 text-2xl text-blue-200">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/nwafor-emmanuel-458a2b249/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Scarlet70"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/nwaforchetachukwu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://codepen.io/Emilax"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaCodepen />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:chetanwafor25@gmail.com?subject=Project%20Request&body=Hi%20Cheta,%20I%20would%20like%20to%20work%20with%20you."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaEnvelope />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </article>
                <article className="relative lg:min-w-[calc(60%-2rem)] w-full shadow-[0px_0px_20px_0px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden p-4">
                    <div className="absolute inset-0 bg-cyan-500/10 blur-2xl"></div>
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-xl"></div>
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent"></div>
                    <img
                        src={CodeBlock}
                        alt="codeblock"
                        className="lg:w-[95%] lg:h-[95%] lg:mx-auto w-full h-full rounded-xl transform-[perspective(1000px)] animate-[float_6s_ease-in-out_infinite]"
                    />
                </article>
            </section>
            <hr className="mx-8 border-slate-800" />
            <section
                className=" lg:p-20 p-10"
                id="about"
            >
                <h3 className="flex justify-center items-center gap-2 text-3xl text-slate-300 mb-6">
                    <MessageCircleCode className="w-10 h-10" />
                    ABOUT{" "}
                    <span className="text-slate-700 inline-block">CHETA</span>
                </h3>
                <article className="grid lg:grid-cols-3 gap-5 sm:p-8 text-lg text-slate-400">
                    <div className="border-2 border-solid border-slate-700 hover:border-slate-400 transition-all duration-200 rounded-md p-8 hover:[&>h4]:text-slate-400">
                        <h4 className="text-6xl text-slate-800 font-light block text-center sm:mb-4 transition-all duration-200">
                            01
                        </h4>
                        <p className="sm:text-[1rem]/8 text-[1rem]/7">
                            I'm{" "}
                            <span className="text-slate-500">
                                Chetachi Nwafor
                            </span>
                            , a web developer with focus on frontend development
                            and building engaging digital experiences. I
                            specialize in building responsive and user-friendly
                            web solutions using modern technologies like HTML,
                            CSS, React, and Tailwind CSS. My approach to
                            programming is driven by a deep curiosity in
                            understanding how technology works under the hood,
                            which continuously motivates me to improve my skills
                            and build better solutions.
                        </p>
                    </div>
                    <div className="border-2 border-solid border-slate-700 rounded-md p-8 hover:border-slate-400 transition-all duration-200 hover:[&>h4]:text-slate-400">
                        <h4 className="text-6xl text-slate-800 font-light block text-center sm:mb-4 transition-all duration-200">
                            02
                        </h4>
                        <p className="sm:text-[1rem]/8 text-[1rem]/7">
                            I enjoy creating clean, interactive user interfaces
                            that balance functionality with great user
                            experience. From responsive websites and
                            informational landing pages to interactive
                            dashboards and reusable UI components, I focus on
                            building interfaces that are intuitive, accessible,
                            and visually polished. Being detail-oriented and
                            passionate about UI/UX allows me to translate ideas
                            and designs into seamless web experiences that work
                            smoothly across different devices and screen sizes.
                        </p>
                    </div>
                    <div className="border-2 border-solid border-slate-700 rounded-md p-8 hover:border-slate-400 transition-all duration-200 hover:[&>h4]:text-slate-400">
                        <h4 className="text-6xl text-slate-800 font-light block text-center sm:mb-4 transition-all duration-200">
                            03
                        </h4>
                        <p className="sm:text-[1rem]/8 text-[1rem]/7">
                            I offer services in frontend web development,
                            responsive website design, landing page development,
                            layout improvements, and modern web applications
                            built with React. I also specialize in converting
                            Figma or design mockups into fully functional,
                            production-ready user interfaces. My goal is always
                            to deliver reliable and visually appealing web
                            solutions that meet both user needs and project
                            objectives.
                        </p>
                    </div>
                </article>
            </section>
            <hr className="mx-8 border-slate-800" />
            <article className="flex flex-col gap-36 lg:flex-row lg:flex-nowrap lg:justify-between p-5">
                <section
                    className="w-full h-full lg:w-[calc(60%-1rem)]"
                    id="projects"
                >
                    <h3 className="flex justify-center items-center gap-2 text-2xl font-medium text-slate-300 mb-6">
                        {" "}
                        <FolderCode className="w-9 h-9" />
                        PROJECTS
                    </h3>
                    <div className="flex flex-col gap-4 w-full">
                        {projects.map((item) => (
                            <article
                                className="flex flex-col-reverse gap-4 lg:flex-row p-6 w-full h-full hover:bg-slate-800 border-t-2 border-solid border-transparent hover:border-slate-600 rounded-lg opacity-95 transition-all duration-200"
                                key={item.id}
                            >
                                <div className="lg:w-2/5 h-full">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.imgAlt}
                                    />
                                    <span className="w-full h-full "></span>
                                </div>
                                <div className="lg:w-4/6">
                                    <a
                                        href={`https://${item.liveDemo}`}
                                        className="flex items-center gap-2 text-md text-slate-300 font-medium hover:text-blue-500 transition-all duration-200"
                                    >
                                        {item.name}{" "}
                                        <SquareArrowOutUpRight className="w-5 h-5" />
                                    </a>
                                    <p className="p-2 text-slate-400 text-sm md:text-md">
                                        {item.description}
                                    </p>
                                    <ul className="flex gap-2">
                                        {item.skills.map((skill, i) => (
                                            <li
                                                className="bg-emerald-950 px-2 py-px text-emerald-400 rounded-xl text-[0.7rem]"
                                                key={i}
                                            >
                                                {skill}
                                            </li>
                                        ))}
                                        <a
                                            href={item.githubRepo}
                                            className="flex gap-1 items-center text-slate-200 text-[0.8rem] ml-3"
                                        >
                                            View GitHub Repo{" "}
                                            <SquareArrowOutUpRight className="w-4 h-4" />
                                        </a>
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="text-md text-slate-300 font-semibold">
                        <a
                            href=""
                            className="flex gap-1 items-center "
                        >
                            View Projects Archive <SquareArrowOutUpRight />
                        </a>
                    </p>
                </section>
                <section className="w-full h-full lg:w-[calc(40%-1rem)]">
                    <h3 className="flex justify-center items-center gap-2 text-2xl font-medium text-slate-300 mb-6">
                        <SearchCode className="w-9 h-9" />
                        TOOLS I WORK WITH
                    </h3>
                    <article className="grid grid-cols-4 gap-y-6 sm:gap-x-20 gap-x-18 mt-6 p-10 justify-items-center">
                        {techStack.map((tool, i) => (
                            <div
                                className={`flex flex-col justify-center gap-1 items-center sm:w-21 sm:h-21 w-18 h-18 rounded-sm bg-slate-900 hover:bg-(--hover-bg) hover:[&>svg]:fill-(--icon-color) hover:[&>p]:text-(--icon-color) focus:bg-(--hover-bg) focus:[&>svg]:fill-(--icon-color) focus:[&>p]:text-(--icon-color) transition-all duration-300`}
                                key={i}
                                style={{
                                    "--hover-bg": tool.svgBgColor,
                                    "--icon-color": tool.svgColor,
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.0rg/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={`sm:w-11 sm:h-11 w-10 h-10 text-slate-500 transition-all duration-300`}
                                >
                                    <path d={tool.svgPath} />
                                </svg>
                                <p className="text-slate-500 sm:text-md text-[0.7rem] text-center font-bold transition-all duration-300">
                                    {tool.name}
                                </p>
                            </div>
                        ))}
                    </article>
                </section>
            </article>
            <hr className="mx-8 border-slate-800" />
            <section
                className="flex flex-col gap-8 p-8 text-md text-justify text-slate-300"
                id="contact"
            >
                <p>
                    This Portfolio website was designed by yours truly with
                    React and Tailwind CSS.
                </p>
                <div>
                    Feel free to reach out to me for any gigs or collaborations
                    on projects, all the best.
                    <nav className="py-4 mb-4">
                        <ul className="flex gap-6 text-2xl text-blue-200">
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/nwafor-emmanuel-458a2b249/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Scarlet70"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/nwaforchetachukwu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://codepen.io/Emilax"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaCodepen />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:chetanwafor25@gmail.com?subject=Project%20Request&body=Hi%20Cheta,%20I%20would%20like%20to%20work%20with%20you."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaEnvelope />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <button className="border-2 border-cyan-600 rounded-md font-semibold text-nowrap text-sm text-cyan-400 shadow-[0px_0px_10px_0px] shadow-cyan-600 hover:bg-cyan-500 hover:text-cyan-950 transition-all duration-200">
                        <a
                            className="flex justify-center items-center w-full h-full px-4 min-h-10"
                            href="/Nwafor-Emmanuel-CV.pdf"
                            target="_blank"
                            download
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>
                    </button>
                </div>
            </section>
            <nav className="sticky bottom-0 bg-slate-900/70 backdrop-blur-[6px] z-0 hover:opacity-100 transition-all duration-200">
                <ul className="flex">
                    <li
                        className={`w-[25%] border-r-2 border-slate-600 active:text-slate-200 hover:text-slate-200 hover:bg-slate-600 active:bg-slate-600 ${activeSection === "home" ? "bg-slate-600 text-slate-200" : "text-slate-500"}  transition-all duration-200`}
                        onClick={() => setActiveSection("home")}
                    >
                        <a
                            href="#home"
                            className="w-full flex justify-center items-center text-center p-1"
                            aria-label="home"
                        >
                            <Home className="w-4 h-4" />
                        </a>
                    </li>
                    <li
                        className={`w-[25%] border-r-2 border-slate-600 active:text-slate-200 hover:text-slate-200 hover:bg-slate-600 active:bg-slate-600 ${activeSection === "about" ? "bg-slate-600 text-slate-200" : "text-slate-500"}  transition-all duration-200`}
                        onClick={() => setActiveSection("about")}
                    >
                        <a
                            href="#about"
                            className="w-full flex justify-center items-center text-center p-1"
                            aria-label="about"
                        >
                            <UserSearch className="w-4 h-4" />
                        </a>
                    </li>
                    <li
                        className={`w-[25%] border-r-2 border-slate-600 active:text-slate-200 hover:text-slate-200 hover:bg-slate-600 active:bg-slate-600 ${activeSection === "projects" ? "bg-slate-600 text-slate-200" : "text-slate-500"}  transition-all duration-200`}
                        onClick={() => setActiveSection("projects")}
                    >
                        <a
                            href="#projects"
                            className="w-full flex justify-center items-center text-center p-1"
                            aria-label="projects"
                        >
                            <ToolCase className="w-4 h-4" />
                        </a>
                    </li>
                    <li
                        className={`w-[25%] border-slate-600 active:text-slate-200 hover:text-slate-200 hover:bg-slate-600 active:bg-slate-600 ${activeSection === "contact" ? "bg-slate-600 text-slate-200" : "text-slate-500"}  transition-all duration-200`}
                        onClick={() => setActiveSection("contact")}
                    >
                        <a
                            href="#contact"
                            className="w-full flex justify-center items-center text-center p-1"
                            aria-label="contact"
                        >
                            <Contact className="w-4 h-4" />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}

export default App;

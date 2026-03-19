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
} from "lucide-react";

import { useState, useEffect } from "react";
import useDataContext from "./hooks/useDataContext";

function App() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { projects, techStack } = useDataContext();

    useEffect(() => {
        document.body.style.overflow = isOpenMenu ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpenMenu]);

    return (
        <section
            className="min-h-screen bg-app-radial"
            id="home"
        >
            <header className="flex justify-end relative">
                <nav className="lg:visible invisible p-2">
                    <ul className="flex gap-16 justify-end items-center text-slate-500 px-8 py-4 z-0">
                        <li>
                            <button className="border-2 border-cyan-600 rounded-md px-4 min-h-10 font-semibold text-nowrap text-sm text-cyan-400 shadow-[0px_0px_10px_0px] shadow-cyan-600 hover:bg-cyan-500 hover:text-cyan-950 transition-all duration-200">
                                Download CV
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
                    <button className="border-2 border-cyan-600 rounded-md px-4 min-h-10 font-semibold text-nowrap text-sm text-cyan-400 shadow-[0px_0px_10px_0px] shadow-cyan-600 hover:bg-cyan-500 hover:text-cyan-950 transition-all duration-200">
                        Download CV
                    </button>
                    <button
                        className="mr-6 h-10"
                        onClick={() => setIsOpenMenu(true)}
                    >
                        <MenuIcon className="text-slate-300 w-8 h-8 hover:text-cyan-500" />
                    </button>
                </div>

                {isOpenMenu && (
                    <nav className="flex flex-col min-h-screen absolute top-0 left-0 bg-slate-800 w-full z-10">
                        <div className="flex justify-between items-end p-8">
                            <p className="text-2xl text-slate-200 font-semibold">
                                CHETA{" "}
                                <span className="text-slate-600">NWAFOR</span>
                            </p>
                            <button onClick={() => setIsOpenMenu(false)}>
                                <XIcon className="w-9 h-9 text-slate-300" />
                            </button>
                        </div>
                        <span className="absolute top-[36%] right-[24%] text-slate-900 opacity-20 z-0">
                            <Braces className="w-80 h-80" />
                        </span>
                        <ul className="flex flex-col my-52 mx-auto text-slate-400 text-2xl text-center w-[80%] z-1">
                            <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                                <a href="#home">HOME</a>
                            </li>
                            <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                                <a href="#about">ABOUT</a>
                            </li>
                            <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                                <a href="#projects">PROJECTS</a>
                            </li>
                            <li className="py-4 border-b-2 border-solid border-slate-700 font-semibold hover:text-slate-200 hover:border-slate-200 transition-all duration-200">
                                <a href="contacts">CONTACT</a>
                            </li>
                        </ul>
                    </nav>
                )}
            </header>
            <section className="w-full mt-20 mb-20 sm:mt-0 md:px-38 md:pt-30 sm:p-16 p-8  overflow-x-hidden relative">
                <span className="block text-nowrap text-7xl lg:text-[10rem] absolute mx-auto my-25 lg:left-10 font-bold text-slate-900 opacity-20 z-0">
                    CHETA NWAFOR
                </span>
                <span className="block w-2/3 z-0">
                    <Code className="sm:w-50 sm:h-50 w-40 h-40 absolute sm:top-0 -top-4 sm:left-25 left-0 text-gray-950 opacity-10" />
                </span>
                <h2 className="sm:text-5xl text-4xl font-bold text-slate-600 mb-2 z-1">
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
                    className="text-blue-200 lg:text-xl text-lg mb-6 z-1"
                >
                    I create web solutions that combine design, <br />{" "}
                    usability, and performance.
                </p>
                <ul className="flex flex-col gap-2 p-2 text-slate-300 font-semibold">
                    <li className="z-1">
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="z-1">
                        <a href="#projects">PROJECTS</a>
                    </li>
                    <li className="z-1">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
                <span>
                    <CodeXml className="sm:w-60 sm:h-60 w-45 h-45 absolute bottom-0 sm:left-170 right-15 text-gray-700 opacity-30" />
                </span>
                <nav className="mt-6">
                    <ul className="flex gap-4 lg:gap-6 text-2xl text-blue-200">
                        <li>
                            <a href="">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaCodepen />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaEnvelope />
                            </a>
                        </li>
                    </ul>
                </nav>
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
            <article className="flex flex-col gap-36 lg:flex-row lg:flex-nowrap lg:justify-between p-10">
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
                                    <h4 className="flex items-center gap-2 text-md text-slate-300 font-medium hover:text-blue-500 transition-all duration-200">
                                        {item.name}{" "}
                                        <SquareArrowOutUpRight className="w-5 h-5" />
                                    </h4>
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
                    <article className="grid grid-cols-4 gap-y-4 sm:gap-x-30 gap-x-15 mt-6 p-10 justify-items-center">
                        {techStack.map((tool, i) => (
                            <div
                                className={`flex flex-col justify-center gap-1 items-center sm:w-23 sm:h-23 w-20 h-20 rounded-sm bg-slate-900 hover:bg-(--hover-bg) hover:[&>svg]:fill-(--icon-color) hover:[&>p]:text-(--icon-color) transition-all duration-300`}
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
                                    className={`sm:w-12 sm:h-12 w-11 h-11 text-slate-500 transition-all duration-300`}
                                >
                                    <path d={tool.svgPath} />
                                </svg>
                                <p className="text-slate-500 sm:text-md text-sm text-center font-bold transition-all duration-300">
                                    {tool.name}
                                </p>
                            </div>
                        ))}
                    </article>
                </section>
            </article>
            <hr className="mx-8 border-slate-800" />
            <footer
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
                    <nav className="py-4">
                        <ul className="flex gap-6 text-2xl text-blue-200">
                            <li>
                                <a href="">
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaCodepen />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <FaEnvelope />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </section>
    );
}

export default App;

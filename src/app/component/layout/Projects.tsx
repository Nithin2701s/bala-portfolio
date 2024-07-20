// components/Projects.tsx

import Image from "next/image";

const Projects = () => {
    return (
        <div id="projects" className="flex flex-col justify-center items-center p-4 min-h-screen bg-port text-white">
            <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
                {[
                    {
                        imageSrc: "./healthnexus.png",
                        title: "HealthNexus",
                        description: "This a Ecommers-project online Medicine app Full stack project",
                        techStack: ["React", "Express", "Node", "Redux"],
                        demoLink: "https://health-nexus.vercel.app",
                    },
                    {
                        imageSrc: "./truecaller.png",
                        title: "Truecaller-Web3.0",
                        description: "This Project is a Truecaller app using solidity, Block-chain",
                        techStack: ["React", "Solidity", "Block-chain","Meta-Mask"],
                        demoLink: "https://true-caller-96bef.web.app",
                    },
                    {
                        imageSrc: "./olympics.png",
                        title: "Olympic System",
                        description: "Object-oriented programming Java application based project",
                        techStack: ["Java", "MySQL","Object-Oriented-programme"],
                        demoLink: "https://github.com/Balavardhanreddy5872/oops",
                    },
                    {
                        imageSrc: "./Portfolio.jpg",
                        title: "Portfolio",
                        description: "Portfolio of academic and professional materials.",
                        techStack: ["NextJS", "TypeScript","Tailwindcss"],
                        demoLink: "https://github.com/Balavardhanreddy5872/oops",
                    },
                ].map((project, index) => (
                    <div key={index} className="bg-blue p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl w-72 h-70">
                        <Image src={project.imageSrc} alt={project.title} className="w-full h-40 object-cover rounded-t-lg mb-2" />
                        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                        <p className="text-base mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.map((tech, techIndex) => (
                                <span key={techIndex} className="bg-gray-700 px-2 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between mt-auto items-center">
                            <a href={project.demoLink} className="bg-port px-4 py-2 rounded-lg text-base font-semibold transform transition duration-500 hover:bg-blue-700 hover:scale-105 ml-10">Demo</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

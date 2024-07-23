import Image from "next/image";
import '../../style.css';

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center p-4 bg-port text-white mt-8  h-90">
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      <div className="project-cont flex flex-wrap justify-center gap-8 w-full overflow-auto max-h-[80vh] md:flex-nowrap md:overflow-x-scroll md:overflow-y-hidden mt-8">
        {[
          {
            imageSrc: "/healthnexus.png",
            title: "HealthNexus",
            description: "This is an E-commerce project, an online medicine app full-stack project",
            techStack: ["React", "Express", "Node", "Redux"],
            demoLink: "https://health-nexus.vercel.app",
          },
          {
            imageSrc: "/truecaller.png",
            title: "Truecaller-Web3.0",
            description: "This project is a Truecaller app using Solidity, Blockchain",
            techStack: ["React", "Solidity", "Blockchain"],
            demoLink: "https://true-caller-96bef.web.app",
          },
          {
            imageSrc: "/olympics.png",
            title: "Olympic System",
            description: "Object-oriented programming Java application-based project",
            techStack: ["Java", "MySQL"],
            demoLink: "https://github.com/Balavardhanreddy5872/oops",
          },
          {
            imageSrc: "/Portfolio.jpg",
            title: "Portfolio",
            description: "Portfolio of academic and professional materials.",
            techStack: ["NextJS", "TypeScript", "TailwindCSS"],
            demoLink: "https://github.com/Balavardhanreddy5872/oops",
          },
        ].map((project, index) => (
          <div key={index} className="bg-blue p-6 rounded-lg shadow-lg transform transition duration-500 w-full max-w-md h-auto md:w-80 md:h-96">
            <Image
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-40 object-cover rounded-t-lg mb-2"
              width={400}
              height={300}
            />
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
              <a href={project.demoLink} className="bg-port px-4 py-2 rounded-lg text-base font-semibold transform transition duration-500 hover:bg-blue-700 hover:scale-105 ml-10">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

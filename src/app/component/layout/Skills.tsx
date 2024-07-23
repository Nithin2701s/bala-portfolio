import Image from "next/image";
import '../../style.css';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center p-8 min-h-screen bg-port text-white mt-8">
      <h2 className="text-4xl font-bold mb-6">My Skills</h2>
      <div className="skill-cont flex flex-wrap justify-center md:justify-between items-start w-full max-w-7xl space-y-12 md:space-y-0 max-h-screen mt-8">
        <div className="skills grid grid-cols-2 sm:grid-cols-4 gap-x-20 gap-y-20 overflow-auto max-h-[60vh] md:max-h-full">
          {[
            { src: "/html.png", alt: "HTML", label: "HTML" },
            { src: "/css.png", alt: "CSS", label: "CSS" },
            { src: "/javascript.png", alt: "JavaScript", label: "JavaScript" },
            { src: "/react.png", alt: "React", label: "React" },
            { src: "/node.png", alt: "Node", label: "Node" },
            { src: "/mongodb.png", alt: "MongoDB", label: "MongoDB" },
            { src: "/figma.png", alt: "Figma", label: "Figma" },
            { src: "/images.png", alt: "Firebase", label: "Firebase" },
          ].map((skill) => (
            <div key={skill.label} className="flex flex-col items-center transform transition duration-500 hover:scale-110">
              <Image
                src={skill.src}
                alt={skill.alt}
                className="w-24 h-24 mb-2 shadow-lg rounded-full hover:shadow-2xl"
                width={300}
                height={300}
              />
              <p className="mt-2 font-semibold text-lg">{skill.label}</p>
            </div>
          ))}
        </div>

        <div className="experience md:mt-16 md:ml-8 w-full overflow-auto md:w-auto space-y-8">
          <div className="bg-blue p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl text-white">
            <h3 className="text-xl font-bold">Hero Campus Challenge, Season 9</h3>
            <p className="text-sm mb-2">Sept, 2023 -</p>
            <ul className="list-disc ml-4 text-sm">
              <li>Participated to complete a given task with a team of 3 members</li>
            </ul>
          </div>
          <div className="bg-blue p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">Full Stack Web-Development, Udemy</h3>
            <p className="text-sm mb-2">May 2023 - August 2023</p>
            <ul className="list-disc ml-4 text-sm">
              <li>Completed full course with a certificate</li>
            </ul>
          </div>
          <div className="bg-blue p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-bold">Full Stack Web-Development, Udemy</h3>
            <p className="text-sm mb-2">May 2023 - August 2023</p>
            <ul className="list-disc ml-4 text-sm">
              <li>Completed full course with a certificate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

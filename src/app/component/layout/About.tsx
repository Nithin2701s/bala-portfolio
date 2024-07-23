
import Image from 'next/image';
import '../../style.css'
const About: React.FC = () => {
    return (
        <div id="about" className="about flex flex-col md:flex-row justify-center items-center p-8 h-screen bg-port text-white space-y-12 md:space-y-0 md:space-x-12 mt-16">
            <div className="about-img flex flex-col items-center md:w-1/2 justify-center md:mt-16 space-y-8">
                <h2 className="text-5xl font-extrabold mb-8 animate-fade-in">ABOUT</h2>
                <Image
                    src="/About.jpg"
                    alt="Balavardhan"
                    className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl transition-transform duration-500 transform hover:scale-105"
                    width={400}
                    height={300}
                />
            </div>
            <div className="w-full space-y-12 mt-16">
                <div className="flex items-center space-x-6 p-6 bg-black rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in">
                    <div className="relative w-20 h-20">
                        <Image src="/front.jpg" alt="Frontend Developer" className="rounded-full w-full h-full object-cover shadow-md" width={400}
                              height={300} />
                    </div>
                    <div>
                        <h3 className="text-3xl about-h3 font-semibold">Frontend Developer</h3>
                        <p className="text-lg about-p">I&apos;m a frontend developer with experience in building responsive and optimized sites.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-black rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in">
                    <div className="relative w-20 h-20">
                        <Image src="/backend.jpg" alt='' className="rounded-full w-full h-full object-cover shadow-md" width={400}
                              height={300} ></Image>
                    </div>
                    <div>
                        <h3 className="text-3xl about-h3 font-semibold">Backend Developer</h3>
                        <p className="text-lg about-p">I have experience developing fast and optimized back-end systems and APIs.</p>
                    </div>
                </div>
                <div className="flex items-center space-x-6 p-6 bg-black rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in">
                    <div className="relative w-20 h-20">
                        <Image src="/UI.jpg" alt='' className="rounded-full w-full h-full object-cover shadow-md" width={400}
                              height={300}></Image>
                    </div>
                    <div>
                        <h3 className="text-3xl about-h3 font-semibold">UI Designer</h3>
                        <p className="text-lg about-p">I have designed multiple landing pages and have created design systems as well.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

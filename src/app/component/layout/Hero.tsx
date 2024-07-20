import Image from "next/image";

function Hero() {
    return (
        <div id="Hero" className="flex justify-center items-center p-4 h-screen bg-port text-white">
            <div className="md:w-1/2 text-center md:text-left ml-20">
                <h1 className="text-7xl font-bold">
                    Hi, I&apos;m <span className="text-black-500">Balavardhan</span>
                </h1>
                <p className="mt-4 text-3xl">
                    I&apos;m proficient in both front-end and back-end development, with experience in React and NodeJS. Feel free to reach out if you&apos;d like to discuss further!
                </p>
                <a href="#contact" className="mt-10 inline-block px-6 py-3 bg-blue text-white font-semibold rounded-full hover:bg-blue transition duration-300">
                    Contact Me
                </a>
            </div>
            {/* <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <img 
                    src="./Balu.jpg" 
                    alt="Balavardhan" 
                    className="rounded-full w-70 h-70 md:w-64 md:h-64 object-cover"
                />
            </div> */}
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
                <Image
                    src="./Balu.jpg"
                    alt="Balavardhan"
                    className="rounded-full w-80 h-80 md:w-96 md:h-96 object-cover"
                />
            </div>
        </div>
    );
}

export default Hero;

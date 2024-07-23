import Image from "next/image";

function Hero() {
  return (
    <div id="Hero" className="hero-section flex flex-col md:flex-row justify-center items-center p-4 h-screen bg-port text-white text-center md:text-left">
      <div className="hero-content w-full md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-fade-in">
          Hi, I&apos;m <span className="text-yellow-500">Balavardhan</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl animate-fade-in">
          I&apos;m proficient in both front-end and back-end development, with experience in React and NodeJS. Feel free to reach out if you&apos;d like to discuss further!
        </p>
        <a href="#contact" className="mt-10 inline-block px-6 py-3 bg-blue text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 animate-fade-in">
          Contact Me
        </a>
      </div>
      <div className="hero-img w-full md:w-1/2 flex justify-center mt-10 md:mt-0 animate-fade-in">
        <Image
          src="/Balu.jpg"
          alt="Balavardhan"
          className="rounded-full w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 object-cover"
          width={160}
          height={160}
        />
      </div>
    </div>
  );
}

export default Hero;

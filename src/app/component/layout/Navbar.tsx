function Navbar() {
    return (
        <div className="fixed flex justify-between items-center h-20 w-full px-12 bg-gradient-to-r from-black via-transparent to-black text-white shadow-lg z-50">
            <a href="#Hero" className="text-lg font-bold hover:text-yellow-500 transition duration-300">
                Portfolio
            </a>
            <div className="flex space-x-8 text-lg">
                <a href="#about" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
                    About
                </a>
                <a href="#skills" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
                    Technical Skills
                </a>
                <a href="#projects" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
                    Projects
                </a>
                <a href="#contact" className="px-4 py-2 hover:text-yellow-500 transition duration-300">
                    Contact Me
                </a>
            </div>
        </div>
    );
}

export default Navbar;

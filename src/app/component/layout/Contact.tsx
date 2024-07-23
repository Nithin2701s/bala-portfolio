import Image from "next/image";
import '../../style.css'

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col justify-center items-center p-4 min-h-screen bg-port text-white">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="flex flex-col items-center w-full max-w-3xl">
        <div className="contact-icons flex space-x-6 mb-8">
          <a
            href="https://github.com/Balavardhanreddy5872"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-500 hover:scale-125"
          >
            <Image src="/github.png" alt="GitHub" className="w-20 h-20 rounded-full" width={400} height={300} />
          </a>
          <a
            href="https://www.linkedin.com/in/balavardhan-reddy-08b51b261"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition duration-500 hover:scale-125"
          >
            <Image src="/linkedin.png" alt="LinkedIn" className="w-20 h-20 rounded-full" width={400} height={300} />
          </a>
          <a
            href="mailto:balavardhanreddy03@gmail.com"
            className="transform transition duration-500 hover:scale-125"
          >
            <Image src="/email.png" alt="Email" className="w-20 h-20 rounded-full" width={400} height={300} />
          </a>
        </div>
        <div className="contact-form md:max-w-md" >
        <form
          className="contact-form w-full max-w-md sm:max-w-sm md:max-w-md lg:max-w-lg bg-blue p-8 rounded-lg shadow-lg transform transition duration-500"
          action="https://formsubmit.co/balavardhanreddy03@gmail.com"
          method="POST"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 rounded-md bg-white text-black focus:outline-none"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full p-2 rounded-md bg-white text-black focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-port p-2 rounded-lg text-sm font-semibold transform transition duration-500 hover:bg-blue-700 hover:scale-105"
          >
            Send
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

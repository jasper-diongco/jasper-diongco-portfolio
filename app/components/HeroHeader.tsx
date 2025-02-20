import React from 'react';

const HeroHeader = () => {
  return (
    <div id="hero-header"
      className="flex flex-col container px-7 md:px-16 mx-auto opacity-transition duration-300 pb-32 lg:pb-0">

      <div className="flex justify-between items-center">
        <div>
          <a href="/">
            <img src="./images/jasper_diongco_logo.png" className="w-44 sm:w-64 user-drag-none" alt="Logo" />
          </a>
        </div>

        <div></div>

        <nav className="lg:flex space-x-20 items-center mt-1 hidden">
          <a href="#services" className="relative group text-center uppercase">
            Services
            <span className="top-6 block h-0.5 bg-green-700 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
          </a>
          <a href="#projects" className="relative group text-center uppercase">
            Projects
            <span className="top-6 block h-0.5 bg-green-700 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
          </a>
          <a href="#about" className="relative group text-center uppercase">
            About Me
            <span className="top-6 block h-0.5 bg-green-700 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
          </a>
          <a href="#contact" className="relative group text-center uppercase">
            Contact
            <span className="top-6 block h-0.5 bg-green-700 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 mt-1"></span>
          </a>
        </nav>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-start lg:justify-center order-2 lg:order1">
          <h2 className="text-3xl sm:text-4xl font-semibold mt-10">Web and Mobile App Developer</h2>
          <p className="text-xl sm:text-xl mt-4 uppercase">Unleash Your Business' Full Potential With My Software
            Development Expertise
          </p>

          <div className="flex gap-7 mt-4 items-center">
            <div>
              <a href="https://www.linkedin.com/in/jasper-diongco/" target="_blank">
                <img className="w-7" src="./images/linked_in_black.png" alt="LinkedIn Logo" />
              </a>
            </div>
            <div>
              <a href="mailto:diongcojspr@gmail.com" target="_blank">
                <img className="w-8 h-9" src="./images/email_black.png" alt="Email Logo" />
              </a>
            </div>
          </div>
          <a href="#contact">
            <button
              className="uppercase px-12 py-4 bg-green-950 text-white mt-7 text-xl sm:text-xl border-solid border-2 hover:bg-white hover:text-green-800 hover:border-solid hover:border-2 hover:border-green-700 transition duration-300">Hire
              the Best</button>
          </a>

          <img className="w-40 relative left-64 top-4 lg:top-9 user-drag-none hidden md:block" src="images/arrow-up.png"
            alt="Arrow Up" />
        </div>
        <div className="flex items-start lg:items-center justify-end order-1 lg:order-2">
          <img className="user-drag-none w-11/12 sm:w-2/3 mx-auto mt-12 sm:mt-14 lg:-mt-24 xl:w-3/4 lg:w-11/12"
            src="images/hero.png" alt="Jasper Diongco" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;

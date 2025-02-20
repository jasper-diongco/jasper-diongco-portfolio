import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear().toString();
    }
  }, []);

  return (
    <footer className="bg-g-green py-10 text-white">
      <div className="container px-7 md:px-16 mx-auto py-7 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start">
            <div>
              <img src="./images/email.png" alt="Email Icon" />
            </div>
            <div className="ml-3">
              <div className="text-xl font-semibold">Email</div>
              <div className="text-lg mt-2">diongcojspr@gmail.com</div>
            </div>
          </div>
          <div className="flex items-start mt-5 sm:mt-0">
            <div>
              <img src="./images/linkedin.png" alt="LinkedIn Icon" />
            </div>
            <div className="ml-3">
              <div className="text-xl font-semibold">LinkedIn</div>
              <a href="https://www.linkedin.com/in/jasper-diongco/" target="_blank" className="link">
                <div className="text-lg mt-2">jasper-diongco</div>
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="font-semibold text-xl">Links</div>
            <nav className="flex flex-col text-lg space-y-3 mt-3">
              <a href="#services" className="link">Services</a>
              <a href="#projects" className="link">Projects</a>
              <a href="#about" className="link">About Me</a>
              <a href="#contact" className="link">Contact</a>
            </nav>
          </div>
        </div>
      </div>

      <div style={{ borderColor: '#192f21' }} className="border-t-2 border-solid text-center pt-7 text-lg">
        &copy; <span id="current-year"></span> Jasper Diongco
      </div>
    </footer>
  );
}

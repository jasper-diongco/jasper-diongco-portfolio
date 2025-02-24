export default function AboutSection() {
  return (
    <section id="about" className="bg-g-green opacity-transition duration-700">
      <div className="text-white container mx-auto py-16 xl:py-16 px-1 sm:px-7 md:px-16 grid grid-cols-1 lg:grid-cols-2 lg:py-28">
        <div className="flex items-center">
          <img src="./images/about_me_1.jpg" className="xl:w-9/12 mx-auto px-4 sm:px-0 lg:w-10/12 sm:w-3/4 w-full" alt="Jasper Diongco About Picture" />
        </div>
        <div className="flex content-center justify-center flex-col mt-12 lg:mt-0">
          <h2 className="text-4xl sm:text-5xl text-center uppercase">About Me</h2>
          <p className="text-center sm:text-left text-xl mt-4 sm:mt-5 md:mt-8">
            Hi, I’m Jasper Diongco, a full-stack software developer passionate about empowering businesses through technology. I help businesses boost efficiency and sales with professionally developed web applications. Since 2021, I've been building innovative web and mobile solutions that solve real-world challenges. I specialize in crafting custom business management solutions tailored to client needs, built with Laravel, Node, and React based stacks. As a leader, I foster a collaborative environment within my team, driving innovation and impactful results on every project. Let’s connect and explore how we can elevate your business with tailored web solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

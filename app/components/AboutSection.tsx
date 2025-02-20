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
          Hi I'm Jasper Diongco. I help businesses to maximize their growth through professionally developed web applications. Based in the Philippines, I have 4 years of solid experience in web and mobile app development. With a focus on developing productivity apps, e-commerce websites, and tailored applications for HR, accounting, and inventory management, I deliver fast and secure applications, prioritizing intuitive user interfaces and user-centric solutions. I am passionate about leadership and driven to make a positive impact. Let's connect and drive success together.
          </p>
        </div>
      </div>
    </section>
  );
}

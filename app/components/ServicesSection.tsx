export default function ServicesSection() {
  return (
    <section id="services" className="opacity-transition duration-700 bg-g-green relative">
      <div className="overlay absolute inset-0 bg-[#14261a] opacity-90"></div>
      <div className="container relative px-1 sm:px-7 md:px-16 mx-auto py-16 text-white">
        <h3 className="font-bold text-3xl sm:text-4xl text-center uppercase">Professional Services</h3>

        <div className="grid xl:grid-cols-3 gap-4 mt-10 md:mt-14 lg:grid-cols-1">
          <div className="card-service from-bottom-transition duration-700 delay-200">
            <img className="w-20" src="./images/code.png" alt="Web Development Service" />
            <h2 className="card-service-title">Web Development</h2>
            <p className="card-service-content">
             Maximize your business growth with professionally developed Web Application.
            </p>
          </div>
          <div className="card-service from-bottom-transition duration-700 delay-200">
            <img className="w-20" src="./images/smartphone.png" alt="Mobile Development Service" />
            <h2 className="card-service-title">Mobile App Development</h2>
            <p className="card-service-content">
              Turn your idea into reality.
            Developed for cross-platform, ready for both iOS and Android.
            </p>
          </div>
          <div className="card-service from-bottom-transition duration-700 delay-200">
            <img className="w-20" src="./images/web-design.png" alt="Mobile Development Service" />
            <h2 className="card-service-title">Landing Page & WordPress Development</h2>
            <p className="card-service-content">
              Build a complete website that attracts more customers to your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              Maximize your business growth with professionally developed web application. Prioritizing intuitive user interfaces and user-centric solutions for customized applications for HR, accounting, inventory systems, e-commerce, and more.
            </p>
          </div>
          <div className="card-service from-bottom-transition duration-700 delay-200">
            <img className="w-20 -mt-1" src="./images/smartphone.png" alt="Mobile Development Service" />
            <h2 className="card-service-title">Mobile App Development</h2>
            <p className="card-service-content">
              Let's turn your app idea into reality. Get a fully functional app with an intuitive user interface design. My expertise includes creating productivity tools, e-commerce solutions, food delivery apps, and applications with barcode scanning functionality. Developed for cross-platform, ready for both iOS and Android.
            </p>
          </div>
          <div className="card-service from-bottom-transition duration-700 delay-200">
            <img className="w-20 -mt-3" src="./images/web-design.png" alt="Mobile Development Service" />
            <h2 className="card-service-title">Wordpress Design & Development</h2>
            <p className="card-service-content">
              Get a beautifully designed website that attracts more customers to your business. Designed and tailored to meet your specific needs, with a focus on responsive design. This ensures your website looks great and functions perfectly on all screen sizes, including desktops, laptops, tablets, and mobile devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

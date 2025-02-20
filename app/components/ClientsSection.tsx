export default function ClientsSection() {
  return (
    <section id="clients" className="opacity-transition duration-700 relative">
      {/* Removed grey overlay */}
      <div className="container relative px-1 sm:px-7 md:px-16 mx-auto py-16">
        <h3 className="font-bold text-3xl sm:text-4xl text-center uppercase">VALUED CLIENTS</h3>
        {/* Client logos */}
        <div className="relative flex justify-center items-center space-x-8 mt-8">
          
          <img
            src="./images/yonapro.png"
            alt="YonaPro Logo"
            className="w-32 md:w-36 grayscale hover:grayscale-0 mb-2 transition-all duration-300"
          />
          <img
            src="./images/oras-logo.png"
            alt="Oras Logo"
            className="w-36 md:w-40 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <img
            src="./images/Medishure-Global-Logo.png"
            alt="Medishure Global Logo"
            className="h-10 md:h-14 grayscale hover:grayscale-0 transition-all duration-300"
          />

        </div>
      </div>
    </section>
  );
}
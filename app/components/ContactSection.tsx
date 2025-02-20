export default function ContactSection() {
  return (
    <section id="contact" className="opacity-transition duration-1000">
      <div className="container py-16 px-7 md:px-16 mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl text-center uppercase mt-5">Start Your Project Today</h2>

        <div className="flex justify-center mt-7">
          <form action="https://formsubmit.co/6cfd2a492e32bd55f5c15b7a029089b6" method="POST"
            className="xl:w-8/12 lg:w-5/6 w-full grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xl font-light">NAME</label>
                <input id="name" name="name" type="text" className="contact-input" required />
              </div>
              <div>
                <label htmlFor="email" className="text-xl font-light">EMAIL</label>
                <input id="email" name="email" type="email" className="contact-input" required />
              </div>
            </div>
            <div>
              <label htmlFor="type_of_project" className="text-xl font-light">TYPE OF PROJECT</label>
              <select defaultValue="Web Development" name="type_of_project" id="type_of_project" className="contact-input" required>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>Wordpress Design & Development</option>
                <option>Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="project_timeline" className="text-xl font-light">PROJECT TIMELINE</label>
                <select defaultValue="1 Month" name="project_timeline" id="project_timeline" className="contact-input" required>
                  <option>3 days</option>
                  <option>7 days</option>
                  <option>15 days</option>
                  <option>1 Month</option>
                  <option>2 Months</option>
                  <option>3 Months</option>
                  <option>4 Months or more</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="text-xl font-light">YOUR BUDGET</label>
                <input id="budget" name="budget" type="text" className="contact-input" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xl font-light">MESSAGE</label>
              <textarea id="message" name="message" rows={3} className="contact-input" required></textarea>
            </div>
            <div>
              <button type="submit"
                className="uppercase px-10 py-3 bg-green-950 text-white mt-7 text-lg border-solid border-2 hover:bg-white hover:text-green-800 hover:border-solid hover:border-2 hover:border-green-700 transition duration-300">SEND
                MESSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

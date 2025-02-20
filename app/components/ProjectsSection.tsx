export default function ProjectsSection() {
  return (
    <section id="projects" className="opacity-transition duration-1000">
      <div className="container px-1 sm:px-7 md:px-16 mx-auto py-16 border shadow-lg rounded-3xl my-7 bg-gray-100">
        <h2 className="font-bold text-4xl text-center uppercase">Recent Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7 sm:mt-10">
          <div className="flex flex-col justify-start from-bottom-transition duration-700 border rounded-3xl bg-white">
            <img src="./images/quotation-tool.png" alt="Quotation Tool System Image Cover" className="w-4/5 sm:w-3/5 transition-all duration-500 mx-auto rounded-t-3xl" />

            <div className="mx-7 mb-7 mt-7">
              <h6 className="z-50 text-2xl transition-all duration-300 text-center font-bold">QUOTATION TOOL (WEB BASED)</h6>
              <ul className="list-disc ml-4 text-lg space-y-2 mt-4 font-light">
                <li>Developed and innovated an advanced quotation tool system for sales officers to calculate health
                  insurance premium rates.</li>
                <li>Integrated multiple insurers into one system.</li>
                <li>Implemented a feature for comparing premium rates and benefits across multiple insurers.</li>
                <li>Deployed and maintained the application on Digital Ocean.</li>
              </ul>
              <div className="text-lg font-light mt-4"><span className="font-semibold">Technologies used:</span> Laravel, React,
                MUI, MySQL, Git, Digital Ocean</div>
            </div>
          </div>

          <div className="flex flex-col justify-start from-bottom-transition duration-700 border rounded-3xl bg-white">
            <img src="./images/oras_thumbnail.png" alt="IPigeon Image Cover" className="w-4/5 sm:w-3/5 transition-all duration-500 mx-auto rounded-t-3xl" />

            <div className="mx-7 mb-7 mt-7">
              <h6 className="z-50 text-2xl transition-all duration-300 text-center font-bold">ORAS (MOBILE BASED)</h6>
              <ul className="list-disc ml-4 text-lg space-y-2 mt-4 font-light">
                <li>Developed a pigeon-race clocking app for YonaPro subscribers.</li>
                <li>Integrated a QR/Barcode Scanner for faster clocking using race stickers.</li>
                <li>Integrated an SMS module to allow offline users to submit sticker codes via text messages.</li>
                <li>Integrated the Google Maps API to accurately determine the precise location of pigeon lofts.</li>
                <li>Developed another versions for Web and Messenger Platform for wider accessibility and convenience.</li>
              </ul>
              <div className="text-lg font-light mt-4"><span className="font-semibold">Technologies used:</span> Native Android
                Development, Java, Android Studio, Android Room/SQLite, PHP, MySQL,
                Git, Retrofit, REST API</div>
            </div>
          </div>

          <div className="flex flex-col justify-start from-bottom-transition duration-700 border rounded-3xl bg-white">
            <img src="./images/sub-agent-portal-thumbnail.png" alt="Sub Agent Portal Image Cover" className="w-4/5 sm:w-3/5 transition-all duration-500 mx-auto rounded-t-3xl" />

            <div className="mx-7 mb-7 mt-7">
              <h6 className="z-50 text-2xl transition-all duration-300 text-center font-bold">SUB-AGENT PORTAL (WEB BASED)</h6>
              <ul className="list-disc ml-4 text-lg space-y-2 mt-4 font-light">
                <li>Developed a web based portal for sub-agents to enable viewing of their commissions.</li>
                <li>Implemented a module for managing referrals.</li>
                <li>Implemented a responsive UI optimized for desktop and mobile phones.</li>
                <li>Deployed and maintained the application on Digital Ocean.</li>
              </ul>
              <div className="text-lg font-light mt-4"><span className="font-semibold">Technologies used:</span> Laravel, React,
                MUI, MySQL, Git, Digital Ocean</div>
            </div>
          </div>



          <div className="flex flex-col justify-start from-bottom-transition duration-700 border rounded-3xl bg-white">
            <img src="./images/sales_monitoring_thumbnail.png" alt="Sales Monitoring System Image Cover" className="w-4/5 sm:w-3/5 transition-all duration-500 mx-auto rounded-t-3xl" />

            <div className="mx-7 mb-7 mt-7">
              <h6 className="z-50 text-2xl transition-all duration-300 text-center font-bold">SALES MONITORING SYSTEM (WEB BASED)</h6>
              <ul className="list-disc ml-4 text-lg space-y-2 mt-4 font-light">
                <li>Developed a web application for case officers to monitor the status of prospective clients and
                  efficiently collaborate with other case officers and senior management.</li>
                <li>Integrate a real time chat for important updates and collaboration.</li>
                <li>Integrated an app and email notification module to facilitate client follow-ups.</li>
                <li>Deployed and maintained the application on Digital Ocean.</li>
              </ul>
              <div className="text-lg font-light mt-4"><span className="font-semibold">Technologies used:</span> Laravel, React,
                React Query, MUI, MySQL, Git, Mailgun API, Digital Ocean, Pusher API</div>
            </div>
          </div>

          <div className="flex flex-col justify-start from-bottom-transition duration-700 border rounded-3xl bg-white">
            <img src="./images/fluent_coder_thumbnail.png" alt="Fluent Coder Mobile App Image Cover" className="w-4/5 sm:w-3/5 transition-all duration-500 mx-auto rounded-t-3xl" />

            <div className="mx-7 mb-7 mt-7">
              <h6 className="z-50 text-2xl transition-all duration-300 text-center font-bold uppercase">Fluent Coder Mobile App</h6>
              <ul className="list-disc ml-4 text-lg space-y-2 mt-4 font-light">
                <li>Developed an Android App for Filipinos to learn programming using only their phones (Online/Offline)
                  with programming courses and coding community forum.</li>
                <li>Integrated a Native Android Java Code Compiler and Interactive Command Prompt.</li>
                <li>Integrated an Advanced Code Editor with the capability to code in multiple files.</li>
                <li>Implemented a Coding Problems feature with automated checking of test cases to check if the solution
                  is correct.</li>
                <li>Successfully Upload the App to Play Store and Deployed the API to Digital Ocean.</li>
              </ul>
              <div className="text-lg font-light mt-4"><span className="font-semibold">Technologies used:</span> Native Android
                Development, Java, Android Studio, Android Room/SQLite, Git, Retrofit, REST API, Express JS, MySQL</div>
            </div>
          </div>

          <div className="flex flex-col justify-start from-bottom-transition duration-700 border rounded-3xl bg-white">
            <img src="./images/soa_thumbnail.png" alt="Student Outcomes Assessment System Image Cover" className="w-4/5 sm:w-3/5 transition-all duration-500 mx-auto rounded-t-3xl" />

            <div className="mx-7 mb-7 mt-7">
              <h6 className="z-50 text-2xl transition-all duration-300 text-center font-bold uppercase">Student Outcomes Assessment System (WEB BASED)</h6>
              <ul className="list-disc ml-4 text-lg space-y-2 mt-4 font-light">
                <li>Developed a comprehensive system to assess student outcomes through automated evaluations of students'
                  knowledge and skills.</li>
                <li>Implemented various reports and data analytics tools to support continuous improvement initiatives at
                  the university.</li>
                <li>Integrated a Test Bank module to manage exams and test questions for assessments.</li>
                <li>Implemented features for managing Programs, Courses, Curriculum, and Student Information.</li>
                <li>Implemented a Curriculum Mapping to enable Mapping of Courses to Student Outcomes.
                </li>
              </ul>
              <div className="text-lg font-light mt-4"><span className="font-semibold">Technologies used:</span> Laravel, Vue,
                MySQL, Git, REST API</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

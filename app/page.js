export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">D Lalithraj</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="text-blue-600 hover:underline">About</a></li>
            <li><a href="#skills" className="text-blue-600 hover:underline">Skills</a></li>
            <li><a href="#experience" className="text-blue-600 hover:underline">Experience</a></li>
            <li><a href="#education" className="text-blue-600 hover:underline">Education</a></li>
            <li><a href="#projects" className="text-blue-600 hover:underline">Projects</a></li>
            <li><a href="#contact" className="text-blue-600 hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="p-6">
        <section id="about" className="flex items-center justify-between mb-10">
          <div className="max-w-md">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">Hi, I&apos;m D Lalithraj</h2>
            <p className="text-lg mb-4">Detail-oriented and analytical aspiring Data Analyst with foundational skills in Python, MySQL, MS Excel, and Power BI. Certified in database management and data handling tools, with a keen interest in extracting insights from data to support business decision-making. Able to create interactive dashboards and visual reports using Power BI. Eager to contribute to a dynamic organization as a fresher and build a career in data analysis.</p>
            <a href="/rajalith.pdf" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Resume</a>
          </div>
          <img src="/profile.jpg" alt="D Lalithraj" className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg" />
        </section>
        <section id="skills" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Tech Stack & Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Languages</h4>
              <p>Python (Basics)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Software Knowledge</h4>
              <p>MS Excel (Advanced functions, Pivot Tables, Charts), Power BI (Dashboard creation, data modelling, and visualization)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Databases</h4>
              <p>MySQL</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Tools</h4>
              <p>Git, VS Code, Postman</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Other Skills</h4>
              <p>Strong analytical and problem-solving skills, Excellent communication and interpersonal skills, Fast learner, motivated, and dedicated team player</p>
            </div>
          </div>
        </section>
        <section id="experience" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Work Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">System Engineer Trainee — Infosys Pvt Ltd (2022-2023)</h4>
              <p>Completed training in automation testing, using tools like Selenium and SOAP UI to validate system functionalities.</p>
              <p>Worked on internal projects focused on testing procedures, data validation, and reporting test results.</p>
              <p>Developed strong skills in data handling, data accuracy validation, and quality assurance processes.</p>
            </div>
          </div>
        </section>
        <section id="education" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">BE Mechanical Engineering — Meenakshi Sundararajan Engineering College (2015-2019)</h4>
              <p>CGPA: 7.66 / 10</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">HSC (12th) — SDAV Higher Secondary School (2014-2015)</h4>
              <p>Marks: 87 / 100</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">SSLC (10th) — National Public School (CBSE) (2012-2013)</h4>
              <p>CGPA: 8.0 / 10</p>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Data Validation Dashboard</h4>
              <p>Built a dashboard using Power BI to validate data accuracy from automation testing, including interactive charts and reports.</p>
              <a href="#" className="text-blue-600 hover:underline">GitHub ↗</a>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">MySQL Query Optimizer</h4>
              <p>Developed a tool to optimize MySQL queries for better performance, with basic visualization of query execution times.</p>
              <a href="#" className="text-blue-600 hover:underline">GitHub ↗</a>
            </div>
          </div>
        </section>
        <section id="certifications" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Certifications</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <p>MS Excel — Coursera</p>
            <p>MySQL for Data Management — Great Learning</p>
            <p>Microsoft PowerBI — Udemy</p>
            <p>Data Analyst Masterclass — pantech.aisolutions</p>
          </div>
        </section>
        <section id="languages" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Languages</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <p>English, Tamil, Hindi (basic)</p>
          </div>
        </section>
        <section id="interests" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Field of Interest</h3>
          <div className="bg-white p-4 rounded-lg shadow">
            <p>Data Analysis, Business Intelligence, Data Visualization, Database Management</p>
          </div>
        </section>
        <section id="contact" className="mb-10">
          <h3 className="text-3xl font-bold text-blue-600 mb-6">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">Email</h4>
              <p><a href="mailto:lalithrajnps@gmail.com" className="text-blue-600 hover:underline">lalithrajnps@gmail.com</a></p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">LinkedIn</h4>
              <p><a href="https://www.linkedin.com/in/lalith-raj-063813169/" className="text-blue-600 hover:underline">linkedin.com/in/lalith-raj-063813169/</a></p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h4 className="text-xl font-semibold text-blue-600">GitHub</h4>
              <p><a href="https://github.com/Lalithsugi" className="text-blue-600 hover:underline">github.com/Lalithsugi</a></p>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center p-4 text-gray-600">
        <p>© 2025 D Lalithraj — Built with Tailwind CSS</p>
      </footer>
    </div>
  );
}
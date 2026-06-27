export default function About() {
  const skills = [
    { name: "React.js", color: "bg-cyan-500 border-cyan-600 shadow-cyan-200 text-white" },
    { name: "Node.js & Express", color: "bg-green-500 border-green-600 shadow-green-200 text-white" },
    { name: "Laravel", color: "bg-red-500 border-red-600 shadow-red-200 text-white" },
    { name: "HTML, CSS, JS", color: "bg-orange-500 border-orange-600 shadow-orange-200 text-white" },
    { name: "RESTful API", color: "bg-purple-500 border-purple-600 shadow-purple-200 text-white" },
    { name: "MySQL & MongoDB", color: "bg-teal-500 border-teal-600 shadow-teal-200 text-white" },
    { name: "Git & GitHub", color: "bg-gray-800 border-gray-900 shadow-gray-400 text-white" }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto overflow-hidden">
      
      {/* --- KARTU ABOUT ME --- */}
      <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-12 mb-20 border border-">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">About Me</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
          I'm a full-stack web developer focused on developing interactive and responsive web applications. With experience in React.js, Node.js, and Laravel, I'm committed to creating innovative and efficient digital solutions. I'm always eager to learn new technologies and apply them to challenging projects.
        </p>
      </div>

 {/* --- KARTU EDUCATION --- */}
      <div 
        className="bg-white/60 backdrop-blur-md rounded-3xl shadow-lg p-8 md:p-12 mb-20 border border"
        data-aos="fade-up"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Education</h2>
        
        {/* Mengganti div menjadi ul agar tag li valid secara HTML */}
        <ul className="space-y-6 max-w-4xl mx-auto list-none p-0">
          
          {/* Item 1: Universitas */}
          <li className="flex flex-col md:flex-row md:items-center justify-between bg-blue p-6 rounded-2xl shadow-sm border border-blue-50 hover:shadow-md transition-all">
            <div>
              <h3 className="text-xl font-bold text-gray-900">UNIVERSITY OF GUNADARMA</h3>
              {/* Silakan ganti teks jurusannya sesuai dengan jurusan aslimu */}
              <p className="text-gray-600 font-medium mt-1">Bachelor of Computer Science</p>
              <p className="text-gray-600 font-medium mt-1">"Ongoing"</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-blue-50 text-gray-700 font-semibold px-4 py-1.5 rounded-full text-sm">
                2020 - 2026
              </span>
            </div>
          </li>

          {/* Item 2: SMK */}
          <li className="flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Vocational School MUHAMMADIYAH 1 KLATEN UTARA</h3>
              {/* Silakan ganti teks jurusannya */}
              <p className="text-gray-600 font-medium mt-1">Software Engineering</p>
              <p className="text-gray-600 font-medium mt-1">"8.0"</p>
            </div>
           
            <div className="mt-4 md:mt-0">
              <span className="bg-gray-100 text-gray-700 font-semibold px-4 py-1.5 rounded-full text-sm">
                2015- 2018
              </span>
      
            </div>
          </li>

        </ul>
      </div>

      {/* --- GRID SKILLS DENGAN ANIMASI --- */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills</h1>
        <p className="text-lg text-gray-600 mb-10">
          Here are some skills I have mastered in web development:
        </p>

        {/* Menggunakan Grid: 
          1 kolom di HP (grid-cols-1), 
          2 kolom di tablet (sm:grid-cols-2), 
          3 kolom di laptop (md:grid-cols-3), 
          4 kolom di layar besar (lg:grid-cols-4) 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
          {skills.map((skill, index) => (
            <div 
              key={index}
              // Tambahan class 'animate-popup' dan efek hover (scale-105)
              className={`p-6 rounded-2xl shadow-md border hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer opacity-0 animate-popup ${skill.color}`}
              // Mengatur jeda (delay) animasi agar munculnya berurutan satu per satu
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="font-bold text-lg text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24">
      
      {/* Bagian Teks (Kiri pada layar besar, bawah pada HP) */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-2">
          Hello, Welcome! 👋
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          I'm <span className="text-blue-600">ABDULLAH SYAFII</span>
        </h1>
        <h3 className="text-2xl text-gray-700 mb-6 font-medium">
          Full Stack Web Developer
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
        I'm a developer who enjoys building interactive, responsive, and attractively designed websites. Let's bring great ideas to life together!
        </p>
        
        {/* Tombol Aksi */}
        <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/projects" className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-300 font-medium">
            View Portfolio
          </Link>
          <Link to="/contact" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300 font-medium">
            Contact Me
          </Link>
        </div>
      </div>

      {/* Bagian Foto (Kanan pada layar besar, atas pada HP) */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          {/* Efek Bulatan di belakang foto */}
          <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
          
          <img 
            src="images/profil.jpg" 
            alt="Foto Profil" 
            className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-white"
          />
        </div>
      </div>

    </section>
  );
}
import { Link } from "react-router-dom";
import { listProjects } from "../data/projects"; // Memanggil data dari file tadi

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2">My Projects</h2>
      
      {/* Container Carousel (Bisa digeser ke samping) */}
      <div className="flex overflow-x-auto gap-6 pb-6 snap-x">
        
        {/* Melakukan Looping (perulangan) data project */}
        {listProjects.map((project) => (
          <div key={project.id} className="min-w-[300px] md:min-w-[350px] snap-center rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
            {/* Foto Project */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            
            {/* Teks & Tombol */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.shortDesc}</p>
              
              {/* Tombol Navigasi ke Halaman Detail */}
              <Link to={`/projects/${project.id}`} className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                Lihat Detail &rarr;
              </Link>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
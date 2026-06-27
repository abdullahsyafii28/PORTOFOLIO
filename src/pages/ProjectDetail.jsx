import { useParams, Link } from "react-router-dom";
import { listProjects } from "../data/projects";
import react, { useState } from "react";

export default function ProjectDetail() {
  const { id } = useParams(); 
  const project = listProjects.find((p) => p.id === id);

  if (!project) {
    return <h1 className="text-center mt-20 text-2xl font-bold">Project Tidak Ditemukan!</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <Link to="/projects" className="text-blue-500 hover:underline mb-6 inline-block font-medium">
        &larr; Kembali ke Portfolio
      </Link>
      
      <div className="rounded-2xl shadow-lg overflow-hidden pb-10">
        {/* Gambar Cover Atas */}
        <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
        
        <div className="p-8 md:p-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {project.fullDesc}
          </p>
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Kunjungi Website
            </a>
          )}

          <div className="mt-10 pt-8 border-t border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Teknologi yang digunakan:</h3>
            <span className="inline-block bg-blue-50 text-blue-700 px-5 py-2 rounded-full font-medium border border-blue-100">
              {project.shortDesc}
            </span>
          </div>

          {/* --- MENAMPILKAN INFORMASI TAMBAHAN (FITUR UTAMA) --- */}
          {project.fiturUtama && project.fiturUtama.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fitur Utama Aplikasi:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
                {project.fiturUtama.map((fitur, index) => (
                  <li key={index}>{fitur}</li>
                ))}
              </ul>
            </div>
          )}

          {/* --- MENAMPILKAN GALERI FOTO TAMBAHAN DI BAWAH --- */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeri Tampilan</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.screenshots.map((foto, index) => (
                  <img 
                    key={index} 
                    src={foto} 
                    alt={`Screenshot ${index + 1}`} 
                    onClick={() => window.open(foto, "_blank")}
                    className="w-full h-48 md:h-64 object-cover rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          )}
    
        </div>
      </div>
    </div>
  );
}
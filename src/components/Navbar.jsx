import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 px-6 shadow-sm border-b border-gray-100 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Nama di Kiri */}
        <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          My Portfolio
        </Link>
        
        {/* Menu di Kanan */}
        <ul className="flex space-x-8 text-black-600 font-medium">
          <li>
            <Link to="/" className="hover:text-white transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition duration-300">About</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white transition duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
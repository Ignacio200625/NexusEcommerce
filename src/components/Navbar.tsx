import icon from "../assets/Icono.png";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Products", { state: { search } });
  };

  const navLinks = (
    <>
      <Link className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" to="/">
        Shop
      </Link>
      <Link className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" to="/Products">
        All Products
      </Link>
      <Link className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" to="/Categories">
        Collections
      </Link>
      <span className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors">Journal</span>
    </>
  );

  return (
    <div className="w-full bg-white border-b border-gray-200">

      <nav className="hidden md:flex w-full items-center justify-between px-40 py-4">
        <div className="flex items-center gap-5">
          <Link to="/"><img src={icon} alt="Logo" className="h-10 w-20" /></Link>
          {navLinks}
        </div>

        <div className="flex items-center gap-6">
          <form onSubmit={handleSearch} className="flex items-center border-2 border-blue-400 rounded-xl px-4 py-2 w-64">
            <span className="mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full text-sm"
            />
          </form>

          <button className="text-xl">👤</button>
          <div className="relative cursor-pointer">
            <span className="text-xl">👜</span>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">3</span>
          </div>
        </div>
      </nav>


      <nav className="md:hidden flex items-center justify-between px-4 py-3">
        <Link to="/"><img src={icon} alt="Logo" className="h-10 w-20" /></Link>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            ☰
          </button>
        </div>
      </nav>

    
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-5 px-4 pb-4">
          {navLinks}

          <form onSubmit={handleSearch} className="flex items-center border-2 border-blue-400 rounded-xl px-4 py-2 w-full">
            <span className="mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none w-full text-sm"
            />
          </form>

          <button className="text-xl">👤</button>
          <div className="relative cursor-pointer">
            <span className="text-xl">👜</span>
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">3</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

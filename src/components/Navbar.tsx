import icon from "../assets/Icono.png";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

function Navbar() {

    const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/Products", { state: { search } });
  };

  return (
    <div className="flex w-full border-b border-gray-200">
      <nav className="flex w-full items-center justify-between px-40 py-4">
        
      
        <div className="flex items-center gap-5">
          
           <Link to={"/"}><img src={icon} alt="Logo" className="h-10 w-20" /></Link>

          <a className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" href="#">
            <Link to={"/"}>Shop</Link>
          </a>
          <a className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" href="#">
            <Link to={"/Products"}>All Products</Link>
          </a>
          <a className="text-sm font-semibold hover:text-[#0d7ff2]  transition-colors" href="#">
            <Link to={"/Categories"}>Collections</Link>
          </a>
          <a className="text-sm font-semibold hover:text-[#0d7ff2]  transition-colors" href="#">
            Journal
          </a>
        </div>

   
        <div className="flex items-center gap-6">
          
         <form
          onSubmit={handleSearch}
          className="flex items-center border-2 border-blue-400 rounded-xl px-4 py-2 w-64"
        >
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
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">
              3
            </span>
          </div>
        </div>

      </nav>
    </div>
  );
}

export default Navbar;

import icon from "../assets/Icono.png";

function Navbar() {
  return (
    <div className="flex w-full border-b border-gray-200">
      <nav className="flex w-full items-center justify-between px-40 py-4">
        
      
        <div className="flex items-center gap-5">
          <img src={icon} alt="Logo" className="h-10 w-20" />

          <a className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" href="#">
            Shop
          </a>
          <a className="text-sm font-semibold hover:text-[#0d7ff2] transition-colors" href="#">
            New Arrivals
          </a>
          <a className="text-sm font-semibold hover:text-[#0d7ff2]  transition-colors" href="#">
            Collections
          </a>
          <a className="text-sm font-semibold hover:text-[#0d7ff2]  transition-colors" href="#">
            Journal
          </a>
        </div>

   
        <div className="flex items-center gap-6">
          
          <div className="flex items-center border-2 border-blue-400 rounded-xl px-4 py-2 w-64">
            <span className="text-blue-400 mr-2">🔍</span>
            <input
              type="text"
              placeholder="Search products..."
              className="outline-none w-full text-sm"
            />
          </div>

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

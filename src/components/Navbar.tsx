import icon from "../assets/Icono.png";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";
import { Heart } from "lucide-react";
import { useClerk,UserButton,useUser } from "@clerk/clerk-react";
function Navbar() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {openSignIn}=useClerk();
  const {user}=useUser();

  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const { itemLiked } = useFavorites();
  const totalFavorites = itemLiked.length;


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

         {user ? <UserButton/> : <button
  onClick={() => openSignIn()}
  className="hidden md:block px-5 py-2.5 text-sm font-semibold text-white 
             bg-gradient-to-r from-blue-500 to-blue-600 
             rounded-xl shadow-md 
             hover:from-blue-600 hover:to-blue-700 
             hover:shadow-lg 
             transition-all duration-300"
>
  Iniciar sesión
</button>
}
   
          <Link to="/favorites" className="relative inline-block cursor-pointer">
            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
            {totalFavorites > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {totalFavorites}
              </span>
            )}
          </Link>

          {/* 👜 Carrito */}
          <Link to="/cart" className="relative inline-block cursor-pointer">
            <span className="text-xl">👜</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>
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

          {/* Favoritos Mobile */}
          <Link to="/favorites" className="relative inline-block cursor-pointer">
            <Heart className="w-6 h-6 text-gray-600 hover:text-red-500 transition-colors" />
            {totalFavorites > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                {totalFavorites}
              </span>
            )}
          </Link>

          {/* Carrito Mobile */}
          <Link to="/cart" className="relative inline-block cursor-pointer">
            <span className="text-xl">👜</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1.5">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
import CardItemLiked from "../components/CardItemLiked";
import { useFavorites } from "../context/FavoritesContext";

import { useNavigate } from "react-router";
function Favorites() {
  const { itemLiked,  clearFavorites } = useFavorites();
  const navigate=useNavigate();

  if (itemLiked.length === 0) {
    return (

      <div className="flex flex-col items-center justify-center py-20">
        <div className="flex mb-10">
             <button 
          onClick={() => navigate("/Products")}
          className="mt-4 text-blue-500 "
        >
          Go back to shop
        </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          No tienes favoritos aún ❤️
        </h2>
        <p className="text-gray-500">Agrega algunos productos a tus favoritos para verlos aquí.</p>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-40 py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Mis Favoritos</h2>
       <div className="flex items-center gap-5">
         <button
          onClick={clearFavorites}
          className="bg-[#0d7ff2] text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          Limpiar favoritos
        </button>
        <button 
          onClick={() => navigate("/Products")}
          className=" text-blue-500 "
        >
          Go back to shop
        </button>
       </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {itemLiked.map((product) => (
          <CardItemLiked product={product} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
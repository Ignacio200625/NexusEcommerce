import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d7ff2] to-blue-400 px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-8xl font-extrabold text-[#0d7ff2]">404</h1>
        
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Página no encontrada
        </h2>
        
        <p className="mt-3 text-gray-500">
          Lo sentimos, la página que estás buscando no existe o fue movida.
        </p>

        <Link
          to={"/"}
          className="mt-8 inline-block bg-[#0d7ff2] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
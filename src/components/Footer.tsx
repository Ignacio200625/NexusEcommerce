import image from "../assets/Icono.png"

function Footer() {
  return (
    <div className=" mt-10 bg-white  shadow-[0_-4px_10px_rgba(0,0,0,0.02)] md:px-40 px-20 text-gray-900  py-10">
        <div className="max-w-7x1 grid grid-cols-2 md:grid-cols-4  w-full gap-20 md:gap-15">
      <div className="w-1/4">
       <div>
        <img src={image} alt="" />
       </div>
       <div>
         <p className="text-[#69748b]  text-nowrap  text-base mt-2">
         Curating the world's <br className="md:hidden"/> most <br />
         premium lifestyle and <br className="md:hidden"/> fashion <br />
         essentials since 2018. <br />  Quality over <br className="md:hidden"/> quantity, always.
        </p>
       </div>
      </div>
      <div className="w-1/4">
        <p className="text-[#69748b]    font-bold text-base mt-1">
         Producto
        </p>
        <p className="text-[#69748b]  text-base mt-1">
         Caracteristicas
        </p>
        <p className="text-[#69748b]  text-base mt-1">
         Precios
        </p>
        <p className="text-[#69748b] text-nowrap text-base mt-1">
         Casos de uso
        </p>
      </div>
      <div className="w-1/4">
        <p className="text-[#69748b]   font-bold text-base mt-1">
         Empresa
        </p>
        <p className="text-[#69748b] text-nowrap text-base mt-1">
         Sobre Nosotros
        </p>
        <p className="text-[#69748b] text-base mt-1">
         Blog
        </p>
        <p className="text-[#69748b]  text-base mt-1">
        Carreras
        </p>
      </div>
      <div className="w-1/4">
        <p className="text-[#69748b]  font-bold text-base mt-1">
         Legal
        </p>
        <p className="text-[#69748b]  text-base mt-1">
         Privacidad
        </p>
        <p className="text-[#69748b] text-base mt-1">
         Términos
        </p>
        <p className="text-[#69748b]  text-base mt-1">
         Cookies
        </p>
      </div>
      

    </div>
  <div className="mt-10 border-t border-gray-300 dark:border-gray-700 w-4/4 mx-auto"></div>
     <div className="flex md:flex-row flex-col items-center justify-between">
       <p className="text-center  text-[#69748b]   mt-5 ">@2026 Tu plataforma. Todos los derechos reservados.</p>
       <div className=" flex gap-5  mt-5 ">
        <p className="text-[#69748b] hover:text-black cursor-pointer">Privacy Policy</p>
        <p className="text-[#69748b] hover:text-black cursor-pointer">Terms of Service</p>
        <p className="text-[#69748b] hover:text-black cursor-pointer">Cookie Settings</p>
       </div>
     </div>
    </div>
  );
}

export default Footer;

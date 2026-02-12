import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <div >
      <Navbar />
      <main className="">
        <Outlet />
        <div className="bg-[#f5f7f8]">
        <Footer />
      </div>
      </main>
      
      
      
    </div>
  );
}

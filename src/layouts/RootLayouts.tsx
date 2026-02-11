import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout() {
  return (
    <div >
      <Navbar />
      <main className="bg-[#f5f7f8]">
        <Outlet />
      </main>
    </div>
  );
}

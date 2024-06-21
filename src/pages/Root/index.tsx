import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {

  return (
    <div>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

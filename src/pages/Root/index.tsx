import Footer from "@components/Footer/Footer";
import Navbar from "@components/Navbar/Navbar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink}/>
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

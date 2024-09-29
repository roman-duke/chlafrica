import Footer from "@components/Footer/Footer";
import Loader from "@components/Loader";
import Navbar from "@components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 1000);
  }, [location.pathname]);

  return showLoader ? (
    <Loader />
  ) : (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navbar />
        </motion.div>
      </AnimatePresence>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

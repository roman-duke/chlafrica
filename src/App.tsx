import { useLocation, useRoutes } from "react-router-dom";
import Home from "@pages/Home/Home";
import Root from "@pages/Root";
import About from "@pages/About/About";
import { AnimatePresence } from "framer-motion";
import React from "react";

export default function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about-us',
          element: <About />
        },
      ]
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}

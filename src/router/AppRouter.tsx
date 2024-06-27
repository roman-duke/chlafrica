import About from "@pages/About/About";
import Expressions from "@pages/Expressions/Expressions";
import Home from "@pages/Home/Home";
import Root from "@pages/Root";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
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
      {
        path: 'expressions',
        element: <Expressions />
      },
    ]
  }
]);

export default AppRouter;

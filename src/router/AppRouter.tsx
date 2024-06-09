import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home/Home";
import Root from "@pages/Root";
import About from "@pages/About/About";

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
    ]
  }
])

export default AppRouter;

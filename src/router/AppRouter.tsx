import About from "@pages/About/About";
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
        element: <div>Eren Jaeger</div>
      },
    ]
  }
]);

export default AppRouter;

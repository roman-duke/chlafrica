import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home/Home";

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

export default AppRouter;

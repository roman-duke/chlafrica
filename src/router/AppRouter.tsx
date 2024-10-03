import About from "@pages/About/About";
import Article1 from "@pages/Expressions/Article1";
import Article2 from "@pages/Expressions/Article2";
import Article3 from "@pages/Expressions/Article3";
import Article4 from "@pages/Expressions/Article4";
import Article5 from "@pages/Expressions/Article5";
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
        element: <Expressions />,
      },
      {
        path: 'articles',
        children: [
          {
            index: true,
            path: 'the_african_union_agenda',
            element: <Article1 />
          },
          {
            path: 'rise_of_africa_space_industry',
            element: <Article3 />
          },
          {
            path: 'state_of_tech_in_africa',
            element: <Article4 />
          },
          {
            path: 'nigeria_economy',
            element: <Article5 />
          },
        ]
      },
      {
        path: 'events',
        children: [
          {
            path: 'overcoming_obstacles_and_creating_impact',
            element: <Article2 />
          }
        ]
      },
    ]
  }
]);

export default AppRouter;

import React, { Suspense } from "react";

import { BrowserRouter, useRoutes } from "react-router-dom";

import "glider-js/glider.min.css";
import Navigation from "./components/Navigation";
import PageLoader from "./components/PageLoader";

const Home = React.lazy(() => import("./pages/Home"));
const Slick = React.lazy(() => import("./pages/Slick"));
const Journey = React.lazy(() => import("./pages/Journey"));

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/slow_journey", element: <Slick /> },
    { path: "/journey", element: <Journey /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppWrapper;

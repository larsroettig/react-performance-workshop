import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import { BrowserRouter, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
const Slick = React.lazy(() => import("./pages/Slick"));
const SlickBackground = React.lazy(() => import("./pages/SlickBackground"));

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/slick", element: <Slick /> },
    { path: "/slick_background", element: <SlickBackground /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="">
        <App />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppWrapper;

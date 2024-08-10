import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import UniversityDetails from "../pages/UniversityDetails";
import MaterialDetails from "../pages/MaterialDetails";
import Error from "../components/Error";
import PdfDetails from "../pages/PdfDetails";
import Faculties from "../pages/Faculties";
import RequestForm from "../pages/RequestForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="university">
        <Route path=":slug" element={<UniversityDetails />} />
        <Route
          path=":universityName/:semester/:slug"
          element={<MaterialDetails />}
        />
        <Route
          path=":universityName/:semester/:material/:slug"
          element={<PdfDetails />}
        />
        <Route path="bsmraau/faculties" element={<Faculties />} />
      </Route>
      <Route path="request/material" element={<RequestForm />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoute() {
  return <RouterProvider router={router} />;
}

export default WebRoute;

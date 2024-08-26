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
import Departments from "../pages/Departments";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faculties" element={<Faculties />} />
      <Route path="university">
        <Route path=":slug" element={<Departments />} />
        <Route path=":slug/:department" element={<UniversityDetails />} />
        <Route
          path=":universityName/:semester/:slug"
          element={<MaterialDetails />}
        />
        <Route
          path=":universityName/:semester/:material/:slug"
          element={<PdfDetails />}
        />
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

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import ListingsPage from "./Pages/ListingsPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import DetailsPage from "./Pages/DetailsPage";
import NotFoundPage from "./Components/404 Page/NotFoundPage";

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="listing" element={<ListingsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="details" element={<DetailsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          {/* This is the catch-all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )

}

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route, Routes,
//   RouterProvider,
// } from "react-router-dom";

// export default function App() {

// const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Dashboard />}>
  //       <Route index element={<HomePage />} />
  //       <Route path="/listing" element={<ListingsPage />} />
  //       <Route path="/about-us" element={<AboutUsPage />} />
  //       <Route path="/contact" element={<ContactPage />} />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/signup" element={<SignUpPage />} />
  //       <Route element={<NotFoundPage />} />
  //     </Route>
  //   )
  // );
// }
  
  // return (
  //   <div className="App">
  //     <RouterProvider router={router} />
  //   </div>
  // );
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import ListingsPage from "./Pages/ListingsPage";
import DetailsPage from "./Pages/DetailsPage";
import NotFoundPage from "./Components/404 Page/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="listing" element={<ListingsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="details" element={<DetailsPage />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

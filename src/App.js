import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ShowDetails from "./pages/Showdetails/ShowDetails";

const app = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<AboutPage />} />
          <Route path="/showdetails/:id" exact element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default app;

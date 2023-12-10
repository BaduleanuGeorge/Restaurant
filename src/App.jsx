import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Reservation } from "./pages/Reservation";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

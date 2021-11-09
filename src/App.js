import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./component/Navbar/index";
import Contact from "./component/Contact/index";
import Index from "./component/Index/index";

function App() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route  path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
// className="App"

export default App;

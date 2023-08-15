import "./App.css";
import React from "react";
import Search from "./component/Search";
import Home from "./component/Home";
import BookDetail from "./component/BookDetail";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/books/:id" element={<BookDetail />} />


    </Routes>
</Router>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} >login</Route>
        </Routes>
    </Router>
  );
}

export default App;

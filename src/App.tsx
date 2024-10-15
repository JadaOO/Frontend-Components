import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LightGrid from "./Josh/light_grid/lightGrid";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import JadaProjectList from "./Jada/JadaProjectList";
import Grid from "./Jada/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Jada and Josh's Training Land</h1>
        <h2>Things take time, be nice to yourself</h2>

        <BrowserRouter>
          <nav>
            <Link to="/jada">Jada's Projects</Link>
            <Link to="/josh">Josh's Projects</Link>
          </nav>
          <Routes>
            <Route path="/jada" element={<JadaProjectList />} />
            <Route path="/jada/grid" element={<Grid />} />
            <Route path="/josh" element={<LightGrid />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

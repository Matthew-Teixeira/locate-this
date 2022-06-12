import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Map from "./Pages/Map";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/map" element={<Map />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

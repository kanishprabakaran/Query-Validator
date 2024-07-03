import React from "react";
import Signup from "./signUp";
// import Login from "./Login";
// import Home from './Home';
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>

  )
}
export default App;

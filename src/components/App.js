// import React, {} from "react";
import Signup from "./signUp";
import { AuthProvider } from "../contexts/AuthContext";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import TeachersHome from "./Teachers/Home";
import StudentsHome from "./Students/Home";


function App() {
  
  return (
    <Router>
      <AuthProvider>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/Teachers/Home" element={<TeachersHome />} />
              <Route path="/Students/Home" element={<StudentsHome />} /> 
            </Routes>
          </div>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;

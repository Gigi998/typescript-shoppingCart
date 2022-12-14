import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Store from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
};

export default App;

import "./App.css";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Contacts from "./components/Contacts";
import ExpenseTracker from "./components/ExpenseTracker";
import Print from "./components/Print";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                  Contacts
                </Nav.Link>
                <Nav.Link as={Link} to="/expensetracker">
                  Expense Tracker
                </Nav.Link>
                <Nav.Link as={Link} to="/print">
                  Print
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>

        <div>
          <Routes>
            <Route path="./" element={<Home />} />
            <Route path="./contacts" element={<Contacts />} />
            <Route path="./expensetracker" element={<ExpenseTracker />} />
            <Route path="./print" element={<Print />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

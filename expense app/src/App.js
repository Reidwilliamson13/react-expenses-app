import "./App.css";
import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home"
import Contacts from "./components/Contacts";
import ExpenseTracker from "./components/ExpenseTracker";


function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/contacts'>Contacts</Nav.Link>
              <Nav.Link as={Link} to='/expensetracker'>Expense Tracker</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

<div>
    <Routes>
      <Route path="./" element={<Home />}/>
      <Route path="./Contacts" element={<Contacts />}/>
      <Route path="./ExpenseTracker" element={<ExpenseTracker />}/>
    </Routes>
</div>
    </div>
  );
}

export default App;

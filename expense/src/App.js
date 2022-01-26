import "./App.css";
import React from "react";
import { Nav, Navbar, Container, Link } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Contacts</Nav.Link>
              <Nav.Link href="#pricing">Expense Tracker</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default App;

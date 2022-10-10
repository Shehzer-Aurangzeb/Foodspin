import React from "react";
import { Nav } from "react-bootstrap";

function NavigationMenu() {
  return (
    <Nav className="me-auto">
      <Nav.Link href="#">Breakfast</Nav.Link>
      <Nav.Link href="#">Lunch</Nav.Link>
      <Nav.Link href="#">Dinner</Nav.Link>
    </Nav>
  );
}

export default NavigationMenu;

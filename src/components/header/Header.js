import React from "react";
import { Navbar, Stack } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import Cart from "../../assets/cart.png";
import NavigationMenu from "./NavigationMenu";
import HeaderLayout from "./HeaderLayout";

function Header() {
  return (
    <HeaderLayout>
      <Navbar expand="lg">
        <Navbar.Brand href="#">
          <Stack direction="horizontal">
            <img
              src={Logo}
              style={{ height: "16px", width: "16px" }}
              alt="Logo"
            />
            <p>FoodSpin</p>
          </Stack>
        </Navbar.Brand>
        <NavigationMenu />
        <Navbar.Brand href="#">
          <img src={Cart} alt="cart" />
        </Navbar.Brand>
      </Navbar>
    </HeaderLayout>
  );
}
export default Header;

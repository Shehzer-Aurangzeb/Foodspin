import React from "react";
import Container from "react-bootstrap/Container";

function Layout(props) {
  return (
    <Container style={{ padding: "0 100px", maxWidth: "100%" }}>
      {props.children}
    </Container>
  );
}

export default Layout;

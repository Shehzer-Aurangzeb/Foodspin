import React from "react";
// import Button from "react-bootstrap/Button";
import styled from "styled-components";
const Button = styled.button`
   {
    border-radius: 69px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 20px;
    color: #fff;
    width: 163px;
    height: 48px;
    border: none;
  }
`;
export const CTA = (props) => {
  return (
    <Button
      style={{
        background:
          props.meal === "breakfast" || props.meal === "dinner"
            ? "#ff922c"
            : "#54BF29",
        boxShadow:
          props.meal === "breakfast" || props.meal === "dinner"
            ? "0px 20px 40px #f4e2d1"
            : "0px 20px 40px #DBF4D1",
      }}
    >
      {props.children}
    </Button>
  );
};

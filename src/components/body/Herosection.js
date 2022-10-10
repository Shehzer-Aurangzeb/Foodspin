import React, { useEffect } from "react";
import styled from "styled-components";
import dishes from "../../assets/dishes.png";
import { motion } from "framer-motion";

const Hero = styled.div`
   {
    position: fixed;
    top: -91px;
    left: 283px;
    width: 91.9%;
    height: 582px;
    z-index: -1;
    border-radius: 50% / 0 0 100% 100%;
    overflow: hidden;
    text-align: center;
    padding-top: 229px;
  }
  img {
    // transition: all 0.35s ease-in;
  }
`;

function Herosection({ meal }) {
  return (
    <Hero
      style={{
        background:
          meal === "breakfast" || meal === "dinner" ? "#FFEEDE" : "#EAFFE2",
      }}
    >
      <motion.img
        src={dishes}
        alt="dishes"
        transition={{ duration: 0.35 }}
        animate={{
          rotate: meal === "breakfast" ? 0 : meal === "lunch" ? -36.5 : -73,
        }}
      />
    </Hero>
  );
}

export default Herosection;

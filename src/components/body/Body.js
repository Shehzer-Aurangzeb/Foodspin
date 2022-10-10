import React, { useEffect, useState, useRef } from "react";
import { CTA } from "./CTA";
import BodyLayout from "./BodyLayout";
import dish1 from "../../assets/dish1.png";
import dish2 from "../../assets/dish2.png";
import dish3 from "../../assets/dish3.png";
import arrow from "../../assets/arrow.png";
import styled from "styled-components";
import Herosection from "./Herosection";
import { motion } from "framer-motion";

const CarouselBtn = styled.div`
   {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    position: relative;
    top: -100px;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  button {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
  }
  button.prev {
    margin-left: auto;
  }
`;

function Body() {
  const dishes = [
    {
      name: "Green Goddess Chicken Salad",
      price: "$32",
      desc: "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery",
      meal: "breakfast",
      image: dish1,
    },
    {
      name: "Asian Cucumber Salad",
      price: "$35",
      desc: "Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!",
      meal: "lunch",
      image: dish2,
    },
    {
      name: "Green Goddess Chicken Salad",
      price: "$32",
      desc: "It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery",
      meal: "dinner",
      image: dish3,
    },
  ];
  const [data, setData] = useState(dishes[0]);
  const [count, setCount] = useState(0);
  const [x, setx] = useState(false);
  const handleSubmit = (action) => {
    if (action === "prev" && count != 0) {
      setx(true);
      setTimeout(() => {
        setx(false);
      });
      setData(dishes[count - 1]);
      setCount(count - 1);
    }
    if (action === "next" && count < dishes.length - 1) {
      setx(true);
      setTimeout(() => {
        setx(false);
      });
      setData(dishes[count + 1]);
      setCount(count + 1);
    }
  };

  return (
    <BodyLayout>
      <Herosection meal={data.meal} />
      <div className="section-1">
        <motion.h1
          transition={{ duration: 0.75 }}
          animate={{ scale: x ? [0, 1] : 1, transformOrigin: "left" }}
          className="dishPrice"
          style={{
            color:
              data.meal === "breakfast" || data.meal === "dinner"
                ? "#ff922c"
                : "#54BF29",
          }}
        >
          {data.price}
        </motion.h1>
        <motion.h2
          className="dishName"
          transition={{ duration: 0.75 }}
          animate={{ scale: x ? [0, 1] : 1, transformOrigin: "left" }}
        >
          {data.name}
        </motion.h2>
        <motion.p
          className="dishDesc"
          transition={{ duration: 0.75 }}
          animate={{ scale: x ? [0, 1] : 1, transformOrigin: "left" }}
        >
          {data.desc}
        </motion.p>
        <CTA meal={data.meal} animation={x}>
          ORDER NOW
        </CTA>
        <div className="link">
          <a href="#">Watch Video</a>
        </div>
      </div>

      <div className="section-2">
        <motion.img
          src={data.image}
          className="dishes"
          transition={{ duration: 0.75 }}
          animate={{
            scale: x ? [-1, 1] : 1,
            rotate: x ? [180, 0] : 0,
          }}
        />
        <CarouselBtn>
          <button
            className="next"
            style={{
              background:
                data.meal === "breakfast" || data.meal === "dinner"
                  ? "#ff922c"
                  : "#54BF29",
            }}
            onClick={() => handleSubmit("next")}
          >
            <img src={arrow} />
          </button>
          <button
            className="prev"
            style={{
              background:
                data.meal === "breakfast" || data.meal === "dinner"
                  ? "#ff922c"
                  : "#54BF29",
            }}
            onClick={() => handleSubmit("prev")}
          >
            <img src={arrow} />
          </button>
        </CarouselBtn>
      </div>
    </BodyLayout>
  );
}

export default Body;

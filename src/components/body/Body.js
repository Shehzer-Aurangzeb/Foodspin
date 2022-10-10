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

  const handleSubmit = (action) => {
    if (action === "prev" && count != 0) {
      setData(dishes[count - 1]);
      setCount(count - 1);
    }
    if (action === "next" && count < dishes.length - 1) {
      setData(dishes[count + 1]);
      setCount(count + 1);
    }
  };

  return (
    <BodyLayout>
      <Herosection meal={data.meal} />
      <div className="section-1">
        <h1
          className="dishPrice"
          style={{
            color:
              data.meal === "breakfast" || data.meal === "dinner"
                ? "#ff922c"
                : "#54BF29",
          }}
        >
          {data.price}
        </h1>
        <h2 className="dishName">{data.name}</h2>
        <p className="dishDesc">{data.desc}</p>
        <CTA meal={data.meal}>ORDER NOW</CTA>
        <div className="link">
          <a href="#">Watch Video</a>
        </div>
      </div>

      <div className="section-2">
        <motion.img
          src={data.image}
          className="dishes"
          animate={{
            rotate:
              data.meal === "breakfast"
                ? [180, 0]
                : data.meal === "lunch"
                ? [180, 0]
                : [180, 0],
            scale:
              data.meal === "breakfast"
                ? [-1.25, 1]
                : data.meal === "lunch"
                ? [-1.25, 1]
                : [-1.25, 1],
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

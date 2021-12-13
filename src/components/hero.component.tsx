import React from "react";

// Component
import Text from "./text.component";

// CSS
import "../styles/hero.style.css";

export interface Props {
  imgSrc?: string;
  name?: String;
}

const Hero: React.FC<Props> = ({ imgSrc, name, ...props }) => {
  return (
    <>
      <div className="hero-container">
        <img
          className="hero-image"
          src={`${imgSrc}`}
          alt="hero"
          height={"30%"}
          width={"100%"}
        />
        <Text
          pos={1}
          l={15}
          justify={"flex-start"}
          fC={"white"}
          fS={"5vw"}
          fW={600}
        >
          {name}
        </Text>
        {props.children}
      </div>
    </>
  );
};

export default Hero;

import React from "react";

// Components
import Text from "./text.component";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

// CSS
import "../styles/button.style.css";

export interface Props {
  buttonName?: String;
  onClick?: () => void;
  lastClicked?: Number;
  focused?: Boolean;
}

const Button: React.FC<Props> = ({
  buttonName,
  onClick,
  lastClicked,
  focused,
  ...props
}) => {
  const textColor = focused ? "white" : "black";

  return (
    <div
      className="button-container"
      style={{
        backgroundColor: focused
          ? "rgba(0, 0, 0, 0.512)"
          : "rgba(0, 0, 0, 0.041)",
      }}
      onClick={onClick}
    >
      <Text justify={"center"} fW={400} fS={"10px"} fC={textColor}>
        {buttonName}
      </Text>
      {lastClicked === 0 ? (
        <MdArrowDropDown color={textColor} />
      ) : (
        <MdArrowDropUp color={textColor} />
      )}
    </div>
  );
};

export default Button;

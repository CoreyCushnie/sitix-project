import React from "react";

import Text from "./text.component";
import nbaIcons from "./NBAIcons.component";

import "../styles/game.style.css";

export interface Props {
  teamName?: String;
  id?: Number;
  abr?: String;
  price?: String;
}

const GameDetail: React.FC<Props> = ({ teamName, id, abr, price, ...props }) => {
  
  return (
    <div key={`${id}`} className="game-container">
      <div style={{ display: "flex", alignItems:"center", justifyContent: "center" }}>
        {nbaIcons(`${abr}`, "5vh")}
        <Text justify={"flex-start"} fW={800} fS={"12px"} fC={"#12294D"}>
          {teamName}
        </Text>
      </div>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <Text
          justify={"flex-start"}
          fW={500}
          fS={"10px"}
          fC={"#12294D"}
          mR={"2px"}
        >
          from
        </Text>
        <Text justify={"center"} fW={800} fS={"12px"} fC={"#12294D"}>
          ${price}
        </Text>
      </div>
    </div>
  );
};

export default GameDetail;

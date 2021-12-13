import React from "react";

// Component 
import GameDetail from "./game.component";
import Text from "./text.component";
import Button from "./button.component";

// CSS 
import "../styles/list-games.style.css";

export interface Props {
  games?: Array<any>;
}
const ListGames: React.FC<Props> = ({ games, ...props }) => {
  const [sortByTeam, setSortByTeam] = React.useState(0);
  const [sortByPrice, setSortByPrice] = React.useState(0);
  const [focusedTeam, setFocusedTeam] = React.useState(true);
  const [focusedPrice, setFocusedPrice] = React.useState(false);


  function handlClick(i: Number) {
    if (i === 0) {
      setFocusedTeam(true) 
      setFocusedPrice(false) 
      setSortByTeam((sortByTeam + 1) % 2)
      setSortByPrice(0)
      return 
    }
    setFocusedPrice(true) 
    setFocusedTeam(false) 
    setSortByPrice((sortByPrice + 1) % 2)
    setSortByTeam(0)
    
  }
  function getRandomPrice(city: String) {
    let price = "";
    for (var i = 0; i < city.length; i++) {
      const sum = Math.ceil((city.charCodeAt(i) % 9) / 2);
      price += sum !== 0 ? sum.toString() : 1;
    }
    return price;
  }

  function sortListTeam(sortTeam: Number) {
    let x;
    if (sortTeam === 1){
      x = games?.sort((a, b) => {
        return b?.id - a?.id
      })
      return x
    }
    x = games?.sort((a, b) => {
      return a?.id - b?.id
    })
    return x
  }

  function sortListPrice(sortPrice: Number) {
    let x;
    if (sortPrice === 1){
      x = games?.sort((a, b) => {
        const priceB = getRandomPrice(b?.abbreviation)
        const priceA = getRandomPrice(a?.abbreviation)

        return Number(priceB) - Number(priceA)
      })
      return x
    }
    x = games?.sort((a, b) => {
      const priceB = getRandomPrice(b?.abbreviation)
      const priceA = getRandomPrice(a?.abbreviation)

      return Number(priceA) - Number(priceB)
    })
    return x
  }

  const x = focusedTeam ? sortListTeam(sortByTeam) : sortListPrice(sortByPrice)
  
  return (
    <>
      <div className="bottom-left">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "0 0 20px",
          }}
        >
          <Button
            buttonName={"By Team"}
            focused={focusedTeam}
            lastClicked={sortByTeam}
            onClick={() => handlClick(0)}
          />
          <Button
            buttonName={"By Price"}
            focused={focusedPrice}
            lastClicked={sortByPrice}
            onClick={() => handlClick(1)}
          />
        </div>
        <div className="list-container">
          {games !== undefined && games?.length > 0 ? (
            x?.map((d) => {
              let { id, full_name, abbreviation } = d;
              return (
                <GameDetail key={id} teamName={full_name} abr={abbreviation} price={getRandomPrice(abbreviation)}/>
              );
            })
          ) : (
            <Text justify={"center"} fC={"black"} fW={800}>
              {" "}
              No results
            </Text>
          )}
        </div>
      </div>

      <div className="ad-container">
        <div className="promotional-message">
          <Text justify={"center"} fW={300} fS={"20px"} fC={"#f8f8f8"}>
            Placeholder for promotional messaging
          </Text>
        </div>
      </div>
    </>
  );
};

export default ListGames;

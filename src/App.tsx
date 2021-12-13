import * as React from "react";

// Images
import logo from "./images/WaveLogo.png";
import hero from "./images/WaveHero.jpeg";
import NBAhero from "./images/NBAHero.jpeg";

// Components
import Hero from "./components/hero.component";
import Search from "./components/search.component";
import ListGames from "./components/list-games.component";

// CSS
import "./App.css";

function App() {
  const [data, setData] = React.useState<any[]>();
  const [searchValue, setSearchValue] = React.useState("");
  const [ currentHeader, setHeader] = React.useState(hero)

  React.useEffect(() => {
    fetch("https://free-nba.p.rapidapi.com/teams?page=0", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": "e5d8563997mshcfb030c802400d3p1ec262jsn6864acf2d34a",
      },
    })
      .then((response) => response.json())
      .then((value) => setData(value.data));
  }, []);

  const filtered = data?.filter((data) =>
    data.full_name.toLowerCase().includes(searchValue.toLowerCase())
  );

  
  return (
    <div className="App">
      <button style={{
        position: "absolute",
        right: "0px",
        borderRadius: "50px",
        border: "none",
        padding: "5px",
        margin: "5px",
        color: "white",
        backgroundColor: "black",
        opacity: 0.1,
        cursor: "pointer"



      }} value={"Here"} onClick={() => {
        if (currentHeader === hero){
          setHeader(NBAhero)
        }else{
          setHeader(hero)
        }
         
        }}>Change Header</button>
      <div className="logo-container">
        <img className="logo" src={logo} alt="wave logo" />
      </div>
      <div className="hero">
      <Hero imgSrc={currentHeader}>
        
        <Search
          pos={1}
          t={-45}
          placeholder="Search a team"
          evHandle={(e) => {
            setSearchValue(() => e.target.value);
          }}
        />
      </Hero>
      </div>
      {/* <div className="">
        <p>&nbsp;</p>
      </div> */}
      <div className="bottom-container">
        <ListGames games={filtered} />
      </div>
    </div>
  );
}

export default App;

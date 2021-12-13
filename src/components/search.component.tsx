import React from "react";

import { TiLocation } from "react-icons/ti";

import "../styles/search.style.css";

export interface Props {
  placeholder?: string;
  evHandle?: React.ChangeEventHandler<HTMLInputElement>;
  pos?: Number;
  t?: Number;
  r?: Number;
  b?: Number;
  l?: Number;
}

const Search: React.FC<Props> = ({ 
    placeholder, 
    evHandle, 
    pos, 
    t,
    r,
    b,
    l,
    ...props }) => {
  return (
    <div
      className="search-container"
      style={{
        position: pos === 1 ? "relative" : "sticky",
        top: `${t}px`,
        right: `${r}px`,
        bottom: `${b}px`,
        left: `${l}px`,
      }}
    >
      <input
        className="search-input"
        type="search"
        placeholder={placeholder}
        onChange={evHandle}
      />
      <div className="search-city-container">
        <TiLocation color="white" size={"2vh"} />
        <input
          className="search-city-button"
          type="button"
          value={"New York, NY"}
          onChange={evHandle}
        />
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  setViewSearch: (x: boolean) => void;
}
function search({ setViewSearch }: Props) {
  return (
    <div
      className="nav-container"
      onClick={() => {
        setViewSearch(true);
      }}
    >
      <div style={{ padding: "10px" }}>
        <span className="nav-search-font-size">Anywhere</span>
      </div>
      <div className="border-search-line" />
      <div style={{ padding: "10px" }}>
        <span className="nav-search-font-size">Any Week</span>
      </div>
      <div className="border-search-line" />
      <div style={{ padding: "10px" }} className="flex">
        <span className="add-guest-text">Add guest</span>
        <div
          style={{
            background: "#ff385c",
            borderRadius: "360px",
            height: "30px",
            width: "30px",
            position: "relative",
            bottom: "4px",
            left: "10px",
          }}
        >
          <BiSearch color="white" className="search-icon" fontSize={20} />
        </div>
      </div>
    </div>
  );
}

export default search;

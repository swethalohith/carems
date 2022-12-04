import React from "react";
import Dropdown from "./DropdownExampleSearchSelection";
import Addapp from "./Addapp";
import Hover from "./hover";
import { render } from "react-dom";

import Table from "./Table";

import "./PokedexHeader.css";

const PokedexHeader = () => {
  return (
    <div className="main-container">
      {/* <div className='header'>
        <button class="ui button active" className='control-buttons'>Logo</button>
        <button class="ui button active" className='control-buttons'>Control Page</button>      
      </div> */}
      <header>
        <h1 className="">Logo</h1>
        <nav>
          <a href="#control">Control</a>
        </nav>
      </header>
      <h1 className="main-heading">Go Green</h1>

      <img alt="nature_image" src={"nature.jpg "} className="image" />
      <Hover></Hover>
      <Table />
      <div className="control" id="control">
        <img
          alt="nature_image"
          src={"Green-Data-Centre.jpeg"}
          className="controlImage"
        />
        <span>
          <Addapp></Addapp>
        </span>
        <span>
          <Dropdown></Dropdown>
        </span>
      </div>
    </div>
  );
};

export default PokedexHeader;

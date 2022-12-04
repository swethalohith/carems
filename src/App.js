import React from "react";
import PokedexHeader from "./components/PokedexHeader";
//import Dropdown from "./components/DropdownExampleSearchSelection";
//import { Input, Segment } from "semantic-ui-react";
//import Dropdown from './components/Dropdown'
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "@atypical.engineer",
      name: "Greg",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, data) {
    this.setState({
      name: data.value,
    });
  }

  render() {
    // let value = true;
    return (
      <div className="App">
        <PokedexHeader author={this.state.author} name={this.state.name} />
      </div>
    );
  }
}

export default App;

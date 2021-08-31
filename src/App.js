import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    // Destruct
    const { monsters, searchValue } = this.state;
    const filterMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search monster"
          handler={(e) => {
            this.setState({ searchValue: e.target.value });
          }}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;

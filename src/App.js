import React from "react";
import CardList from "./CardList";
import { robots } from "./RobotDetail";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchFiled: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchFiled: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(
        this.state.searchFiled.toLowerCase());
    })
    return (
      <>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </>
    );
  }
}
export default App;

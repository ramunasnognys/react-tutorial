import React from "react";
import Table from "./Components/Table";

class App extends React.Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ];

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;

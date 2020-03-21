import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {
        name: "Max",
        age: 20
      },
      {
        name: "Julius",
        age: 25
      },
      {
        name: "Tomas",
        age: 34
      }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        {
          name: newName,
          age: 10
        },
        {
          name: "Julius",
          age: 5
        },
        {
          name: "Tomas",
          age: 4
        }
      ]
    });
  }

    nameChangedHandler = event => {
      this.setState({
        persons: [
          {
            name: "Max",
            age: 10
          },
          {
            name: event.target.value,
            age: 25
          },
          {
            name: "Tomas",
            age: 4
          }
        ]
      });
    };
  

  render() {
    const style = {
      backgroundColor:"white",
      font:"inherit",
      border: "1px solid blue",
      padding:"8px",
      cursor:"pointer"
    }
    return (
      <div className="App">
        <h1> Hi, I am React app</h1>
        <p>It works</p>
        <button style = {style}
        onClick={() => this.switchNameHandler("Romas")}>
          {" "}
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Andrius1")}
        >
          My hobby is racing
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        ></Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person>
      </div>
    );

    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'hi i am react app!!!'));
  }
}

export default App;

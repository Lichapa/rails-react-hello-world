import React, { Component } from "react";
import axios from 'axios';

class GreetingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
    };
  }

  loadGreetings() {
    axios
      .get("/api/v1/greetings")
      .then((res) => {
        this.setState({ greetings: res.data});
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.loadGreetings();
  }

  render() {
    return (
      <div>
        <div className="wrapItems">
          <ul clasName="listItems"></ul>
            {this.state.greetings.slice(0, 1).map((greeting) => {
              return (
                <li className="item" greeting={greeting} key={greeting.id}>
                  <span className="itemDisplay">{greeting.message}</span>
                </li>
              );
            })}
        </div>
      </div>
    );
  }
}

export default GreetingsContainer;
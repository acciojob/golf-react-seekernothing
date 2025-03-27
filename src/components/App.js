import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: {
        left: "0px",
        position: "absolute", // CSS positioning ke liye important
      },
    };
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  // Handles start button click, rendering the ball
  buttonClickHandler() {
    this.setState({
      renderBall: true,
    });
  }

  // Determines whether to show start button or ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  // bind ArrowRight keydown event
  componentDidMount() {
    document.addEventListener("keydown", (event) => {
      // Check for Right Arrow key (keyCode: 39) and game started
      if (event.keyCode === 39 && this.state.renderBall) {
        this.setState((prevState) => ({
          posi: prevState.posi + 5,
          ballPosition: {
            ...prevState.ballPosition,
            left: `${prevState.posi + 5}px`,
          },
        }));
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;

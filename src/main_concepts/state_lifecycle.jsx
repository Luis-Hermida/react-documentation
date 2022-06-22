import { React } from "react";

// Adding local state to Clock Component
export class ClockState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Adding lifecycle methos to Clock Component
export class ClockLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Runs after the component output has been rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // Runs if the Clock component is ever removed from the DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

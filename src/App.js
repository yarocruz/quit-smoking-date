import React, { Component } from "react";

import "./App.css";

let today = new Date();
let quitSmokingDate = new Date("07-17-2018 12:30");
let diffMs = today - quitSmokingDate; // milliseconds since quit day and today

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      quitSmokingDate: new Date("07-17-2018 12:30"),
      diffMs: today - quitSmokingDate, // milliseconds since quit day and today
      diffDays: Math.floor(diffMs / 86400000), // days
      diffHrs: Math.floor((diffMs % 86400000) / 3600000), // hours
      diffMins: Math.round(((diffMs % 86400000) % 3600000) / 60000), // minutes
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  tick() {
    this.setState({
      today: new Date(),
      quitSmokingDate: new Date("07-17-2018 12:30"),
      diffMs: today - quitSmokingDate, // milliseconds since quit day and today
      diffDays: Math.floor(diffMs / 86400000), // days
      diffHrs: Math.floor((diffMs % 86400000) / 3600000), // hours
      diffMins: Math.round(((diffMs % 86400000) % 3600000) / 60000) // minutes
    });
  }

  render() {
    return (
      <div className="App">
        <h1>You Haven't Smoked in:</h1>
        <p>
          {this.state.diffDays} Days, {this.state.diffHrs} Hours, and{" "}
          {this.state.diffMins} Minutes
        </p>
        <p>
          It is {this.state.today.toLocaleTimeString()} on{" "}
          {this.state.days[today.getDay()]}{" "}
          {this.state.months[today.getMonth()]} {this.state.today.getDate()}{" "}
          {this.state.today.getFullYear()}
        </p>

        <p className="info">Refresh the Browser to update the time.</p>
      </div>
    );
  }
}
export default App;

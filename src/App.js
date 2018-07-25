import React, { Component } from "react";

import "./App.css";

let today = new Date();
let quitSmokingDate = new Date("2018-07-17T12:30:00-04:30");

let diffMs = today - quitSmokingDate; // milliseconds since quit day and today
let diffDays = Math.floor(diffMs / 86400000);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      quitSmokingDate: new Date("2018-07-17T12:30:00-04:30"),
      diffMs: today - quitSmokingDate, // milliseconds since quit day and today
      diffDays: Math.floor(diffMs / 86400000), // days
      diffHrs: Math.floor((diffMs % 86400000) / 3600000), // hours
      diffMins: Math.round(((diffMs % 86400000) % 3600000) / 60000), // minutes
      moneySaved: (diffDays / 2) * 6,
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
      quitSmokingDate: new Date("2018-07-1712:30:00Z:00Z"),
      diffMs: today - quitSmokingDate, // milliseconds since quit day and today
      diffDays: Math.floor(diffMs / 86400000), // days
      diffHrs: Math.floor((diffMs % 86400000) / 3600000), // hours
      diffMins: Math.round(((diffMs % 86400000) % 3600000) / 60000), // minutes
      moneySaved: (diffDays / 2) * 6
    });
  }

  render() {
    let diffMs = today - quitSmokingDate; // milliseconds since quit day and today
    let diffDays = Math.floor(diffMs / 86400000); // days
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    let diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    let moneySaved = (diffDays / 2) * 6;
    return (
      <div className="App">
        <h1>You Haven't Smoked in:</h1>
        <p>
          {diffDays} Days, {diffHrs} Hours, and {diffMins} Minutes
        </p>
        <p>
          It is {this.state.today.toLocaleTimeString()} on{" "}
          {this.state.days[today.getDay()]}{" "}
          {this.state.months[today.getMonth()]} {this.state.today.getDate()}{" "}
          {this.state.today.getFullYear()}
        </p>

        <p>You have saved an average of ${moneySaved} since your quit day.</p>

        <p className="info">Refresh the Browser to update the time.</p>
      </div>
    );
  }
}
export default App;

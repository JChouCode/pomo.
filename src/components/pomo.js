import React from 'react';
import "./css/pomo.css"

export class Pomo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "25:00",
      timeMs: 0,
      start: 0,
      tick: false,
      intervalId: 0
    }
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  msToString(ms) {
    let time = 1.5 * 10 ** 6 - this.state.timeMs;
    let totalSeconds = Math.floor(time / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
      console.log(time + " : " + `${minutes}:0${seconds}`);
      return `${minutes}:0${seconds}`
    }
    console.log(time + " : " + `${minutes}:${seconds}`);
    return `${minutes}:${seconds}`;

  }

  checkNotify() {
    if (!("Notification" in window)) {
      alert("Browser does not support notifications: Will not notify on completion");
    }
    else if (Notification.permission === "granted") {
      let notification = new Notification("Notifications granted!");
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          let notification = new Notification("Notifications granted!");
        }
      });
    }
  }

  start() {
    this.checkNotify();
    this.setState({ time: "25:00", timeMs: 0, start: Date.now(), tick: true });
    clearInterval(this.state.intervalId);
    let intervalId = setInterval(() => {
      let time = 1.5 * 10 ** 6 - this.state.timeMs;
      if (time < 0) {
        if (Notification.permission === "granted") {
          let notification = new Notification("Pomo: Good work!");
          this.stop();
        }
      }
      this.setState({ time: this.msToString(this.state.timeMs), timeMs: Date.now() - this.state.start })
    }, 100);
    this.setState({ intervalId: intervalId });
  }

  stop() {
    clearInterval(this.state.intervalId);
    var notification = new Notification("Test");
    this.setState({ time: "25:00", timeMs: 0, start: 0, tick: false });
  }

  render() {
    return (
      <div className="pomo">
        <div className="time">
          {this.state.time}
        </div>
        <div className="buttons">
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
        </div>
      </div>
    )
  }

}
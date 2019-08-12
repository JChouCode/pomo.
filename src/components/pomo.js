import React from 'react';

class pomo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: "",
      timeMs: 0,
      start: 0,
      tick: false
    }
  }

  msToString(ms) {
    let time = 1.5 * 10 ** 6 - this.state.time;
    let totalSeconds = Math.floor(time / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    console.log("${minutes}:${seconds}");
    return "${minutes}:${seconds}";

  }

  start() {
    this.setState({ time: "25:00", start: Date.now(), tick: true });
    setInterval(() => {
      this.setState({ time: this.msToString(this.state.timeMs), timeMs: Date.now() - this.state.start })
    }, 1000);
  }

  stop() {
    this.setState({ time: "25:00", start: 0, tick: false });
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
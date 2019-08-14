import React from 'react';
import './App.css';

import { Pomo } from "./components/pomo"

function App() {
  return (
    <div className="App">
      <div className="gray-rect"></div>
      <div className="logo">pomo<span>.</span></div>
      <div className="desc">The <span>simplest</span> pomodoro timer on the modern web.</div>
      <Pomo />
      <div className="copyright">Copyright © Jeffrey Chou</div>
    </div>
  );
}

export default App;

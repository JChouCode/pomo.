import React from 'react';
import "./css/stats.css"

export class Stats extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          This week
        </div>
        <div>
          Today
        </div>
      </div>
    )
  }
}
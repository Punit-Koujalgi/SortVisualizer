import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ width }) => (
  <div
    id="progress_active"
    className="ProgressBar"
    style={{
      width: `${width}%`,
    }}>
    {/* <div className="ProgressBar__Active"></div> */}
  </div>
);

export default ProgressBar;

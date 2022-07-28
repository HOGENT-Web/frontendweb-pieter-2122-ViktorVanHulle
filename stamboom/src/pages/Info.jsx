import React from "react";
import temp_image from "../../../stamboom/src/mock_data/images/1.png";

function Info() {
  return (
    <div className="info">
      <h1>John F Kennedy</h1>
      <div className="info-1">
        <img src={temp_image} alt=""></img>
        <ul>
          <li>John F Kennedy</li>
          <li>1917-1963</li>
        </ul>
      </div>
      <div className="info-2">
      <ul>
        <li>
          <div>
            <h3>Birth</h3>
            <p>John F. Kennedy was born on May 29, 1917.</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Marriage</h3>
            <p>Married in 1953.</p>
          </div>
        </li>
        <li>
          <div>
            <h3>Death</h3>
            <p>He died on November 22, 1963.</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Info;

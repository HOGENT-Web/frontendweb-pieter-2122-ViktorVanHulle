import React from "react";
import temp_image from "../assets/images/1.png";
import { useTranslation } from "react-i18next";

function Info() {
  // for getting right data:
  // console.log(location.pathname.split('/')[2])

  const { t } = useTranslation();

  return (
    <div className="info-wrapper">
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
            <h2>Birth</h2>
            <p>John F. Kennedy was born on May 29, 1917.</p>
          </div>
        </li>
        <li>
          <div>
            <h2>Marriage</h2>
            <p>Married in 1953.</p>
          </div>
        </li>
        <li>
          <div>
            <h2>Death</h2>
            <p>He died on November 22, 1963.</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
}

export default Info;

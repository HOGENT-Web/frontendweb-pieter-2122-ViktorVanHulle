import logo from "../assets/images/tree-with-many-leaves.png";
import arrow from "../assets/images/down-arrow.png";
import arrowRed from "../assets/images/down-arrow-red.png";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();

  return (
    <div id="welcome">
      <div className="welcome-inner">
        <div className="logo">
          <img src={logo}></img>
          <p>Van Hulle {t("logo")}</p>
          <small>- 2022 -</small>
        </div>
        <div className="content">
          <div className="content-inner">
            <p data-cy="title">{t("welcome")}</p>
            <span>{t("quote")}</span>
          </div>
        </div>
        <a
          className="enter"
          href="/Stamboom"
          onMouseOver={() => {
            document.getElementById("arrow").src = arrowRed;
          }}
          onMouseLeave={() => {
            document.getElementById("arrow").src = arrow;
          }}
        >
          <span>{t("enter")}</span>
          <img src={arrow} width="32" id="arrow"></img>
        </a>
      </div>
    </div>
  );
}

export default Welcome;

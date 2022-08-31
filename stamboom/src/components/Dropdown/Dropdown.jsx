import React from "react";
import { MdLogout } from "react-icons/md";
import { t } from "i18next";
import { useSession } from "../../context/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from 'react-redux'


// import { logout, selectUser } from "../../redux/userSlice";
// import { useSelector } from "react-redux";

function Dropdown(props) {
  // const { user } = useSession();
  // const [name, setName] = useState("");

  // if(user) {
  //   setName(user.USERNAME)
  // }
  // useEffect(() => {

  // }, []);


  return (
    <div className="dropdown" data-cy="dropdown">
      <button className="succes">
        {/* {name} */}
        <img src={window.location.origin + `/images/user.png`}></img>
      </button>
      <div className="dropdown-content">
        <a href="/review" data-cy="review">{t("rate")}</a>
        <a onClick={() => props.handleLogout()}>
          {t("logout")} <MdLogout />
        </a>
      </div>
    </div>
  );
}

export default Dropdown;

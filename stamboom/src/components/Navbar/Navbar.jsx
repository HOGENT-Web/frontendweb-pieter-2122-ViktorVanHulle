import React from "react";
import { useTranslation } from "react-i18next";
import test_image from "../../assets/images/1.png";
import { MdLogout } from 'react-icons/md';

function Navbar(props) {

  const { t } = useTranslation();

  const logout = () => {
    // props.onLoginChange(!props.login);
    props.setSucces(!props.succes);
  }

  return (
    <nav>
      {props.succes ? 
      (
        <div className="dropdown">
          <button className="succes">
            Name
            <img src={test_image}></img>
          </button>
          <div className="dropdown-content">
              <a>Profile</a>
              <a onClick={() => logout()}>Log out <MdLogout /></a>
          </div>
        </div>
      )
      :
      (
        <button onClick={() => props.onLoginChange(!props.login)}>
          {t("login")}
        </button>
      ) 
      }
    </nav>
  );
}

export default Navbar;

import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import BtnBack from "./../btnBack/BtnBack";
import Dropdown from "./../Dropdown/Dropdown";
import { useSession, useLogout } from "./../../context/AuthProvider";

function Navbar(props) {
  // const user = useSelector(selectUser);

  const { isAuthed } = useSession();
  const logout = useLogout();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const location = window.location.href;

  return (
    <nav>
      {location === "http://localhost:5173/" ? (
        <></>
      ) : (
        <BtnBack location={"/"} />
      )}
      {isAuthed ? (
        <Dropdown handleLogout={handleLogout} />
      ) : (
        <button
          className="btn-login"
          id="nav_btn_login"
          onClick={() => props.onLoginChange(!props.login)}
        >
          {t("login")}
        </button>
      )}
    </nav>
  );
}

export default Navbar;

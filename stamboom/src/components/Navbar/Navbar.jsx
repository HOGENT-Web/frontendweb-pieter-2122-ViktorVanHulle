import React from "react";
import { useTranslation } from "react-i18next";
import test_image from "../../assets/images/1.png";
import { MdLogout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout, selectUser } from "../../redux/userSlice";
import { useSelector } from "react-redux";
import BtnBack from "../btnBack/btnBack";
import Dropdown from "../Dropdown/Dropdown";

function Navbar(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  console.log(user);
  const location = window.location.href;

  return (
    <nav>
      {location === "http://localhost:5173/" ? (
        <></>
      ) : (
        <BtnBack location={"/"} />
      )}
      {user ? (
        <Dropdown />
      ) : (
        <button
          className="btn-login"
          onClick={() => props.onLoginChange(!props.login)}
        >
          {t("login")}
        </button>
      )}
    </nav>
  );
}

export default Navbar;

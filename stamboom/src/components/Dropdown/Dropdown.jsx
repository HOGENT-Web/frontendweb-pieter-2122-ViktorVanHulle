import React from "react";
import test_image from "../../assets/images/temp_image.jpg";
import { MdLogout } from "react-icons/md";
import { t } from "i18next";
import { useSession } from "../../context/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";

// import { logout, selectUser } from "../../redux/userSlice";
// import { useSelector } from "react-redux";

function Dropdown(props) {
  const { user } = useSession();
  // const dispatch = useDispatch();

  const [name, setName] = useState("");

  useEffect(() => {
    if(user) {
      setName(user.USERNAME)
    }
  }, []);


  return (
    <div className="dropdown">
      <button className="succes">
        {name}
        <img src={test_image}></img>
      </button>
      <div className="dropdown-content">
        <a href="/review">{t("rate")}</a>
        <a onClick={() => props.handleLogout()}>
          {t("logout")} <MdLogout />
        </a>
      </div>
    </div>
  );
}

export default Dropdown;

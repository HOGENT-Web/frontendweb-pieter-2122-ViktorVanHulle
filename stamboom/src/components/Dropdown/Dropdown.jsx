import React from "react";
import test_image from "../../assets/images/1.png";
import { MdLogout } from "react-icons/md";
// import { logout, selectUser } from "../../redux/userSlice";
// import { useSelector, useDispatch } from "react-redux";

function Dropdown(props) {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <button className="succes">
        TEST
        <img src={test_image}></img>
      </button>
      <div className="dropdown-content">
        <a href="/review">Rate Us</a>
        <a onClick={() => props.handleLogout()}>
          Log out <MdLogout />
        </a>
      </div>
    </div>
  );
}

export default Dropdown;

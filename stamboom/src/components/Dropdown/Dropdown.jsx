import React from "react";
import test_image from '../../assets/images/1.png';
import { MdLogout } from 'react-icons/md';
import { logout, selectUser } from "../../redux/userSlice";
import { useSelector, useDispatch } from 'react-redux';

function Dropdown() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  }

  return (
    <div className="dropdown">
      <button className="succes">
        {user.name}
        <img src={test_image}></img>
      </button>
      <div className="dropdown-content">
        <a>Profile</a>
        <a onClick={(e) => handleLogout(e)}>
          Log out <MdLogout />
        </a>
      </div>
    </div>
  );
}

export default Dropdown;

import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

function Modification() {
  const user = useSelector(selectUser);

  const addParent = () => {
    console.log("addParent clicked");
  };
  const addChild = () => {
    console.log("addChild clicked");
  };

  return (
    <>
      {user ? 
      (
        <aside>
          <button type="Button" className="btn btn-primary btn-lg">
            Add parent
          </button>
          <button type="Button" className="btn btn-success btn-lg">
            Add child
          </button>
        </aside>
      )
      :
      (
        <></>
      )
      }
    </>
  );
}

export default Modification;

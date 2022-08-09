import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import ModifyParents from "./ModifyParents";
import ModifyChildren from "./ModifyChildren";

function Modification() {

  const [parents, setParents] = useState(false);
  const [children, setChildren] = useState(false);

  const user = useSelector(selectUser);


  return (
    <aside>
      {user ? 
      (
        parents ?
        <ModifyParents />
        :
        children ?
        <ModifyChildren />
        :
        <>
          <button type="Button" className="btn btn-primary btn-lg" onClick={setParents}>
            Add parent
          </button>
          <button type="Button" className="btn btn-success btn-lg" onClick={setChildren}>
            Add child
          </button>
        </>
      )
      :
      (
        <></>
      )
      }
    </aside>
  );
}

export default Modification;

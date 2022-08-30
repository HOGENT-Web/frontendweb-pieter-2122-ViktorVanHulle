import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import ModifyParents from "./ModifyParents";
import ModifyChildren from "./ModifyChildren";
import { useSession } from "../../context/AuthProvider";
import { useTranslation } from "react-i18next";

function Modification({id}) {

  const {t} = useTranslation();
  const [parents, setParents] = useState(false);
  const [children, setChildren] = useState(false);

  const { isAuthed } = useSession();

  return (
    <aside>
      {isAuthed ? (
        parents ? (
          <ModifyParents id={id}/>
        ) : children ? (
          <ModifyChildren id={id}/>
        ) : (
          <>
            <button
              type="Button"
              className="btn btn-success btn-lg"
              id="addParent_button"
              onClick={setParents}
            >
            {t("addParent")}
            </button>
            <button
              type="Button"
              className="btn btn-success btn-lg"
              id="addChildren_button"
              onClick={setChildren}
            >
            {t("addChild")}
            </button>
          </>
        )
      ) : (
        <></>
      )}
    </aside>
  );
}

export default Modification;

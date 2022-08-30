import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modification from "../components/modification/Modification";
import { useEffect } from "react";
import { getMemberById } from "../api/members";

function Info() {
  const [member, setMember] = useState(null);

  // for getting id in path
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    getMemberById(id).then((data) => {
      setMember(data);

    });
  }, []);

  const { t } = useTranslation();

  return (
    member && (
      <div className="info-wrapper">
        <div className="info">
          <h1>{member.NAME}</h1>
          <div className="info-1">
            <img src={window.location.origin + `/images/${id}.jpg`} alt=""></img>
            <ul>
              <li>{member.NAME}</li>
              <li>
                {member.BIRTH.substring(0, 10)} {member.DEATH ? ", " + t("died") + " " + member.DEATH : ""}
              </li>
            </ul>
          </div>
          <div className="info-2">
            <ul>
              <li>
                <div>
                  <h2>{t("bio")}</h2>
                  <p>{member.BIOGRAPHY}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Modification id={id}/>
      </div>
    )
  );
}

export default Info;

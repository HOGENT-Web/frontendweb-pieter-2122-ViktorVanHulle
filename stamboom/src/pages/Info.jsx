import React, { useState } from "react";
import temp_image from "../assets/images/1.png";
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
            <img src={temp_image} alt=""></img>
            <ul>
              <li>{member.NAME}</li>
              <li>
                {member.BIRTH} - {member.DEATH ? member.DEATH : "present"}
              </li>
            </ul>
          </div>
          <div className="info-2">
            <ul>
              <li>
                <div>
                  <h2>Biography</h2>
                  <p>{member.BIOGRAPHY}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Modification />
      </div>
    )
  );
}

export default Info;

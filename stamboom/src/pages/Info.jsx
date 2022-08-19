import React, { useState } from "react";
// DB DOES NOT CONTAIN IMAGES YET (BLOB TO SLOW)
import temp_image from "../assets/images/temp_image.jpg";
import { useTranslation } from "react-i18next";
import Modification from "../components/modification/Modification";
import { useEffect } from "react";
import { getMemberById } from "../api/members";

function Info() {
  const [member, setMember] = useState(null);
  const [date, setDate] = useState(null);

  // for getting id in path
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    getMemberById(id).then((data) => {
      setMember(data);
      // date
      let split = member.BIRTH.substring(0, 10).split("-")
      split[2] = parseInt(split[2]) + 1
      let d = new Date(split[0], split[1] - 1, split[2])
      let datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
      setDate(datestring);

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
                {t("born")} {date !== null ? date: ""} {member.DEATH ? ", " + t("died") + " " + member.DEATH : ""}
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

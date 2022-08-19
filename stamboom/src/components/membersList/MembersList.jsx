// import React from 'react'

import { useEffect } from "react";
import { useState } from "react";
import {
  getChildrenById,
  getMemberById,
  getParentsById,
} from "../../api/members";

// Recursive component
const MembersList = ({ options, children }) => {
  const [subOptions, setSubOptions] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let temp = [];

    if (children) {
      children.map((child) => {
        getMemberById(child).then((data) => {
          if (!(subOptions.length === children.length)) {
            temp.push(data);
            console.log(temp);
            setSubOptions(temp);
          }
        });
      });
    }
  });

  return (
    <div>
      {subOptions.length > 0 ? (
        subOptions.map((option, index) => (
          <>
            <li key={index}>
              <a href={"/info/" + option.ID_MEMBER}>
                {/* <img src="" alt={option.NAME}></img> */}
                <span>{option.NAME}</span>
              </a>
              {option.HAS_CHILDREN > 0 && (
                <ul>{<MembersList children={[1, 4]} />}</ul>
              )}
            </li>
          </>
        ))
      ) : options ? (
        options.map(
          (option, index) =>
            option.HAS_PARENTS == 0 && (
              <>
                <li key={index}>
                  <a href={"/info/" + option.ID_MEMBER}>
                    {/* <img src="" alt={option.NAME}></img> */}
                    <span>{option.NAME}</span>
                  </a>
                  {option.HAS_CHILDREN > 0 && (
                    <ul>{<MembersList children={[1, 4]} />}</ul>
                  )}
                  {/* <li key={index}>
                    <a href={"/info/" + option.ID_MEMBER}>
                      <img src="" alt={option.NAME}></img>
                      <span>{option.NAME}</span>
                    </a>
                  </li> */}
                </li>
              </>
            )
        )
      ) : (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default MembersList;
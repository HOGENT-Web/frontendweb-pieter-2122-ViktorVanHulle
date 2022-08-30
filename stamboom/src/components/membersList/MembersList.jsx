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

  useEffect(() => {
    let temp = [];

    if (children) {
      children.map((child) => {
        getMemberById(child).then((data) => {
          if (!(subOptions.length === children.length)) {
            temp.push(data);
            setSubOptions(temp);
          }
        });
      });
    }
  });

  // const setChildren = (ID_PARENT) => {
  //   // simulate a delay
  //   // getChildren(ID_PARENT).then(data => {
  //   //   console.log(data);
  //   // })
  //   const children = getChildrenById(ID_PARENT).then((data) => {
  //     data.map((c) => {
  //       getMemberById(c.ID_CHILD).then((data) => {
  //         console.log(data);
  //       });
  //     });
  //   });

  //   console.log(children);

  //   console.log("button pressed");
  // };

  return (
    <div>
      {subOptions.length > 0 ? (
        subOptions.map((option, index) => (
          <>
            <li key={option.ID_MEMBER}>
              <a href={"/info/" + option.ID_MEMBER}>
                <img
                  src={
                    window.location.origin + `/images/${option.ID_MEMBER}.jpg`
                  }
                  alt={option.NAME}
                ></img>
                <span>{option.NAME}</span>
              </a>
              {option.HAS_CHILDREN > 0 && (
                <ul>{<MembersList children={[1, 4]} />}</ul>
              )}
              <div className="subOptions_tree"></div>
            </li>
          </>
        ))
      ) : options ? (
        options.map(
          (option, index) =>
            option.HAS_PARENTS == 0 && (
              <>
                <li key={option.ID_MEMBER}>
                  <a href={"/info/" + option.ID_MEMBER}>
                    <img
                      src={
                        window.location.origin +
                        `/images/${option.ID_MEMBER}.jpg`
                      }
                      alt={option.NAME}
                    ></img>
                    <span data-cy="member_name">{option.NAME}</span>
                  </a>
                  {option.HAS_CHILDREN > 0 && (
                    <ul>{<MembersList children={[1, 4, 5]} />}</ul>
                  )}
                </li>
              </>
            )
        )
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      )}
    </div>
  );
};

export default MembersList;

import React, { useEffect } from "react";
// import { children } from "../mock_data/children_mockdata";
import { getAllMembers } from "../api/members";
import MembersList from "../components/membersList/MembersList";
import { useState } from "react";

function Tree() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers().then((data) => {
      setMembers(data.data);
    });
  }, []);

  return (
    <div className="tree-wrapper">
      <div className="tree">
        <ul>
          <MembersList options={members} />
        </ul>
      </div>
    </div>
  );
}
export default Tree;

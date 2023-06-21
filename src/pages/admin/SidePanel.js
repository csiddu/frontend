import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "react-bootstrap";
import "../../css/sidebar.css";
// import { redirect } from "react-router-dom";
import { ReactSession } from 'react-client-session';

function SidePanel() {
  var navItems = ["Add Team", "Update Team", "View Past Teams", "Add Event"];

  var navLink = {
    "Add Team": "addTeam",
    "Update Team": "updateTeam",
    "View Past Teams": "allTeams",
    "Add Event": "addEvent",
  };

  const navigate = useNavigate()
  function onClickRedirection(link) {
    var str = "/" + link;
    // window.location.replace(str)
    navigate(str)
  }

  useEffect(() => {
    // setOrg(ReactSession.get("name"));
    // setEmail(ReactSession.get("email"));

    if(!ReactSession.get("email") && !ReactSession.get("password")){
      window.location.replace('/admin')
    }
  });

  return (
    <>
      <div className="bg-light sidebar">
        <center><img src="csilogo.ico" className="mb-3" width="100" height="100"/>
        <h2
          className="fw-bold tcr"
          style={{ fontFamily: "Italianno", color: "royalblue" }}
        >
          CSI DDU
        </h2></center>
        <p style={{ color: "grey" }}>csi2022@gmail.com</p>

        <hr></hr>
        {/* <br/> */}


        
        {navItems.map((i) => (
          <div
            className="p-3 bg-light navBar"
            onClick={() => onClickRedirection(navLink[i])}
          >
            {i}
          </div>
        ))}
      </div>
    </>
  );
}
export default SidePanel;
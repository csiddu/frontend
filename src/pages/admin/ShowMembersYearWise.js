import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import SidePanel from "./SidePanel";

export default function ShowMembersYearWise() {
  const { state } = useLocation();
  const [err, setErr] = useState("");
  console.log(state);
  return (
    <>
      <div className="grid">
        <div className="flex">
          <SidePanel />

          <div className=" px-8 mb-10 " style={{ marginLeft: "38%" }}>
            <center>
              <h2 className="my-10">
                Team {state.year - 1}-{state.year}
              </h2>
            </center>
            {err !== "" && { err }}
            {err === "" && (
              <>
                {state.member.length === 0 && (
                  <h2>No Members Are There Of This Team</h2>
                )}
                {state.member.length > 0 && (
                  <table
                    className="table"
                    style={{
                      overflowX: "scroll",
                      top: "2%",
                      //   left: "10%",
                    }}
                  >
                    <thead>
                      <tr style={{ color: "royalblue" }}>
                        <th scope="col">First Name</th>
                        <th></th>
                        <th></th>
                        <th scope="col">Last Name</th>
                        <th></th>
                        <th></th>
                        <th scope="col">Position</th>
                        <th></th>
                        <th></th>
                        <th scope="col">Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.member.map((i) => (
                        <tr>
                          <td>{i.firstName}</td>
                          <td></td>
                          <td></td>
                          <td>{i.lastName}</td>
                          <td></td>
                          <td></td>
                          <td>{i.position}</td>
                          <td></td>
                          <td></td>
                          <td>{i.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

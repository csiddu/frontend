import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import SidePanel from "./SidePanel";
import { BsPencilSquare } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function UpdateTeam() {
  const [allMembers, setAllMembers] = useState([]);
  const [showFlg, setShowFlg] = useState(false);
  const [teamID, setTeamID] = useState();
  const year = new Date().getFullYear();
  const [err, setErr] = useState("");

  function deleteMember(index) {
    var req = axios.post(`${process.env.REACT_APP_BACKEND}/admins/deleteTeamMember`,{
      id: teamID,
      index : index
    }).then(
      ()=>{
        axios
      .get(`${process.env.REACT_APP_BACKEND}/admins/getTeamMember`)
      .then((obj1) => {
        if (obj1.data == null) {
          setErr("Your Team has not been added . Please Add it first");
        } else {
          setAllMembers(obj1.data.obj.teamMembers);
          setTeamID(obj1.data.obj.id);
          console.log(obj1.data.obj);
        }
      });
      }
    )
  }

  function addMember(){
    window.location.replace('/addMember?id='+teamID)
  }

  useEffect(() => {

    axios.get(`${process.env.REACT_APP_BACKEND}/admins/isTeamExist`).then((obj)=>{
      setShowFlg(obj.data.flg)
      // console.log(showFlg+"hgh")
    })

    // fetch the whole team of that year and set the state
    axios
      .get(`${process.env.REACT_APP_BACKEND}/admins/getTeamMember`)
      .then((obj1) => {
        if (obj1.data == null) {
          setErr("Your Team has not been added . Please Add it first");
        } else {
          setAllMembers(obj1.data.obj.teamMembers);
          setTeamID(obj1.data.obj.id);
          console.log(obj1.data.obj);
        }
      });
  }, []);

  return (
    <>
      <div className="grid">
        <div className="flex">
          <SidePanel />

          {!showFlg && (
          <>
          <div className="mt-5 mb-20" style={{marginLeft: "30%" }}>
            <h1> Team For Current Year Is Not Added Yet. </h1>
            <h5 style={{color:"grey"}}> You can Add Team </h5>
            </div>
          </>
        )}

        {showFlg && (
          <>

          <div className=" px-8 mb-10 " style={{ marginLeft: "38%" }}>
            <center>
              <h2 className="my-10">
                Team {year - 1}-{year}
              </h2>
            </center>
            {err!=="" && {err}}
            {err==="" &&
            <>
            
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {allMembers.map((i) => (
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
                    <td>
                      <MdDelete
                        onClick={() => deleteMember(allMembers.indexOf(i))}
                        style={{ color: "blue" }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <center><button
                    className="my-6 shadow justify-self-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  text-xl bg-black py-2 px-14 rounded"
                    type="button"
                    onClick={addMember}
                  >
                    Add Member
                  </button></center>
            </>}
          </div>
          </>)}
        </div>
      </div>
    </>
  );
}

export default UpdateTeam;

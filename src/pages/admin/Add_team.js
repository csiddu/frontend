import React, { memo, useEffect, useRef, useState } from "react";
import SidePanel from "./SidePanel";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import { useNavigate } from "react-router";
import Select from "react-select";
import axios from "axios";

function AddTeam() {
    
  // const navigate = useNavigate();

  const [showFlg, setShowFlg] = useState(false);

  const [faculty, setFaculty] = useState([]);

  const [selectedFaculty, setSelectedFaculty] = useState();

  const [arrayToShow, changeShowArray] = useState([]);

  function FacultyChanged(fac) {
    setSelectedFaculty(fac);
    // console.log(emp);
  }

  async function addFaculty() {
    let obj = {
      year : new Date().getFullYear(),
      faculty : selectedFaculty.value,
      teamMembers : [],
    }

    const req = await axios.post(`${process.env.REACT_APP_BACKEND}/admins/addTeam`,obj);
    // console.log(req)
    window.location.replace('/addMember?id='+req.data.id)
  }

  

  useEffect(() => {

    // console.log("hello huy");

    // fetch the team of current year
    axios.get(`${process.env.REACT_APP_BACKEND}/admins/isTeamExist`).then((obj)=>{
      setShowFlg(obj.data.flg)
      // console.log(showFlg+"hgh")
    })

    // fetch all faculties
    axios
      .get(`${process.env.REACT_APP_BACKEND}/admins/getAllFaculty`)
      .then((obj) => {
        console.log(obj.data);
        setFaculty(obj.data);

        var tempArr = [];

        obj.data.map((i) => {
          tempArr.push({
            label: i.firstName + " " + i.lastName,
            value: i.id,
          });
        });

        changeShowArray(tempArr);
      });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-3">
          <SidePanel />
        </div>

        {showFlg && (
          <>
          <div className="mt-5 mb-20" style={{marginLeft: "30%" }}>
            <h1> Team For Current Year Is Added Already. </h1>
            <h5 style={{color:"grey"}}> You can Update Team </h5>
            </div>
          </>
        )}

        {!showFlg && (
          <>
            <form
              className="p-5 px-5 shadow my-4 mb-5"
              style={{ width: "40%", marginLeft: "10%" }}
            >
              <center>
                <h2>Add Team</h2>{" "}
              </center>
              {/* <br/> */}
              <Select
                value={selectedFaculty}
                placeholder="Select Mentor"
                onChange={FacultyChanged}
                options={arrayToShow}
                className="my-4"
              />

              <center>
                <button
                  className="shadow justify-self-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  text-xl bg-black py-2 px-14 rounded"
                  type="button"
                  onClick={addFaculty}
                >
                  Add Mentor
                </button>
              </center>
              <br></br>
              <center>
                {/* <h6 onClick={addMentor} style={{  }}> */}
                  <a href="/addFaculty" style={{textDecoration:'none',color:'grey',cursor: "pointer"}}>Would you like to add new Mentor?</a>
                
              </center>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default AddTeam;

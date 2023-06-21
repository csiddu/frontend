import { useRef,useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SidePanel from "./SidePanel";
import axios from "axios";
import React from "react";
import { useEffect } from "react";


function AddMember() {

  const [TeamID,setTeamID] = useState()


  var profile = useRef();

  const [pic,setPic] = useState({})

  var departmentList = ["CE", "IT"];

  const dept = useRef();
  const [err,setErr] = useState("")



  const [Member , setMember] = useState({
    firstName : "",
    lastName  : "",
    email : "",
    position : "",
    phoneNumber : "",
    department : "",
    github : "",
    linkdn : "",
  });

  const [availabledata, setAvailabledata] = useState(false);

  useEffect(()=>{
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
   
    setTeamID(id);

    const req = axios.get(`${process.env.REACT_APP_BACKEND}/admins/getTeamMember`).then((obj1)=>{
      setAvailabledata(obj1.data.obj.teamMembers);

      console.log(obj1.data.obj)
    })
    
  },[])

  function addMember(){

    setMember({...Member,department:dept.current.value})

    if(Member.firstName==="" || Member.lastName==="" || Member.email==="" || Member.phoneNumber==="" || Member.linkdn==="" || Member.department==-1 || Member.position==""){
      setErr("Please Enter All The Fields")
      document.getElementById("error").value = "Please Enter All The Fields!!";
    }

    else if(Member.phoneNumber.length!==10){
      setErr("Please Enter valid Contact Number")
    }

    else{

    console.log(Member)

    const req1 = axios.post(`${process.env.REACT_APP_BACKEND}/admins/addMember`,{obj:Member,teamID : TeamID,pic:pic},{headers: {
      "Content-Type": "multipart/form-data",
    }}).then(
      (res)=>{
        window.location.replace('/addMember?id='+TeamID)
      }
  );
    }
    
  }


  function getData(event) {
    var name = event.target.name;
    var val = event.target.value;
    setMember({...Member,[name]:val})
    console.log(name,val, Member)
  }

  function changeProfilePic(event) {
    profile.current.src = URL.createObjectURL(event.target.files[0]);
    setPic(event.target.files[0] );
  }

  return (
    <>
      <div className="grid">
        <div className="flex">
          <SidePanel />

          <div
            className=" border border-gray-200 rounded px-8 mb-5"
            style={{ marginLeft: "26%" }}
          >

            <form className="mt-1 w-full max-w-lg">
            <center>
                <h2 className="mt-4 mb-5">Add Team Member</h2>
              </center>

              <center>
                <div id="error" style={{color:'red',fontWeight:'bolder'}}>{err}</div>
              </center>

              <div className="row mb-2 mt-4 mb-2">
                <center>
                  <img
                    src="profile.png"
                    ref={profile}
                    className="rounded-circle"
                    style={{ height: "100px" }}
                  />
                </center>
              </div>
              <div className="px-1">
                <input
                  className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  size="10"
                  type="file"
                  name="profilePic"
                  onChange={changeProfilePic}
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    size="10"
                    type="text"
                    name = "firstName"
                    placeholder="First Name"
                    onChange={getData}
                  />
                </div>
                <div className="px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    size="10"
                    type="text"
                    name = "lastName"
                    placeholder="Last Name"
                    onChange={getData}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="email"
                    name = "email"
                    placeholder="DDU Email"
                    onChange={getData}

                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="number"
                    name = "phoneNumber"
                    placeholder="Phone Number"
                    onChange={getData}

                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name ="position"
                    placeholder="Joined As... ex.Technical Head"
                    onChange={getData}

                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name = "github"
                    placeholder="Github Link"
                    onChange={getData}

                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name = "linkdn"
                    placeholder="Linkdin Link"
                    onChange={getData}

                  />
                </div>
              </div>

              <select className="appearance-none block w-full mb-5 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="department" ref ={dept} onChange={getData}
>
                <option selected value="-1">
                  Select Department of Member
                </option>
                {departmentList.map((i) => (
                  <>
                    <option value={departmentList.indexOf(i)}>{i}</option>
                  </>
                ))}
              </select>

              <div>
               <div className="grid pb-14 mt-14">
                  <button
                    className="shadow justify-self-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  text-xl bg-black py-2 px-14 rounded"
                    type="button"
                    onClick={addMember}
                  >
                    Add Member
                  </button>
                </div>

                
              </div>
            </form>
          </div>

          <div className="ml-28 pl-24 mt-28 pt-28">
            {availabledata.length>0 && (
              <>
                <table
                  className="table"
                  style={{
                    position: "relative",
                    overflowY: "scroll",
                      left: "-100px",
                  }}
                >
                  <thead>
                    <tr style={{ color: "royalblue" }}>
                      <th scope="col">Name</th>
                      <th></th>
                      <th scope="col">Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {availabledata.map((i) => (
                      <tr>
                        <td>
                          {i.firstName +
                            " " +
                            i.lastName}
                        </td>
                        <td></td>
                        <td>{i.position}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            {!availabledata && (
              <div>
                <h6>No Members yet added</h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMember;

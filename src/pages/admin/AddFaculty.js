import { useRef, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SidePanel from "./SidePanel";
import axios from "axios";
// import { useNavigate } from 'react-router';



function AddFaculty() {
  var departmentList = ["CE", "IT"];
  // const navigate = useNavigate();
  const [err,setErr] = useState("")

  const dept = useRef();

  var profile = useRef();

  const [Faculty, setFaculty] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    department: "",
    linkdn: "",
  });

  const [pic,setPic] = useState({})

  function addFaculty() {
    setFaculty({ ...Faculty, department: dept.current.value });

    if(Faculty.firstName==="" || Faculty.lastName==="" || Faculty.email==="" || Faculty.phoneNumber==="" || Faculty.linkdn==="" || Faculty.department==-1){
      setErr("Please Enter All The Fields")
      document.getElementById("error").value = "Please Enter All The Fields!!";
    }

    else if(Faculty.phoneNumber.length!==10){
      setErr("Please Enter valid Contact Number")
    }

    else{

    // console.log(Faculty,pic)


    const req1 = axios
      .post(
        `${process.env.REACT_APP_BACKEND}/admins/addFaculty`,
        {
          obj: Faculty,
          pic: pic
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res);
      window.location.replace('/addTeam')

      });}
    // navigate("/addTeam");
      
  }

  function getData(event) {
    var name = event.target.name;
    var val = event.target.value;
    setFaculty({ ...Faculty, [name]: val });
    // console.log(name,val, Faculty)
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
            style={{ marginLeft: "36%" }}
          >
            <form className="mt-1 w-full max-w-lg">
              <center>
                <h2 className="mt-4 mb-5">Add Mentor</h2>
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
                  required
                />
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    size="10"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={getData}
                    required
                  />
                </div>
                <div className="px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    size="10"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={getData}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="email"
                    name="email"
                    placeholder="DDU Email"
                    onChange={getData}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    minLength={10}
                    maxLength={10}
                    type="number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    onChange={getData}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    name="linkdn"
                    placeholder="Linkdin Link"
                    onChange={getData}
                    required
                  />
                </div>
              </div>

              <select
                className="appearance-none block w-full mb-5 text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="department"
                ref={dept}
                onChange={getData}
                required
              >
                <option selected value="-1">
                  Select Department of Faculty
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
                    onClick={addFaculty}
                  >
                    Add Mentor
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddFaculty;

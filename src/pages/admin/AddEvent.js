import React from "react";
import { useState,useRef } from "react";
import SidePanel from "./SidePanel";
import axios from "axios";


export default function AddEvent() {
  var profile = useRef();
  const [Event, setEvent] = useState({
    title: "",
    speaker: "",
    time: "",
    description: "",
    phoneNumber: "",
    email: "",
    date:""
  });

  const [err,setErr] = useState("")

  const [pic,setPic] = useState({})

  function getData(event) {
    var name = event.target.name;
    var val = event.target.value;
    setEvent({...Event,[name]:val})
    // console.log(name,val, Member)
  }

  function changeProfilePic(event) {
    profile.current.src = URL.createObjectURL(event.target.files[0]);
    setPic(event.target.files[0] );
  }

  function addEvent(){

    console.log(Event)

    if(Event.title==="" || Event.speaker==="" || Event.email==="" || Event.phoneNumber==="" || Event.description==="" || Event.time=="" || Event.date==""){
        setErr("Please Enter All The Fields")
        document.getElementById("error").value = "Please Enter All The Fields!!";
      }
  
      else if(Event.phoneNumber.length!==10){
        setErr("Please Enter valid Contact Number")
      }
  
      else{
    const req1 = axios.post(`${process.env.REACT_APP_BACKEND}/admins/addEvent`,{obj:Event,pic:pic},{headers: {
      "Content-Type": "multipart/form-data",
    }}).then(
      (res)=>{
        
      }
  );}
    
  }

  return (
    <>
      <div className="grid">
        <div className="flex">
          <SidePanel />

          <div
            className=" border border-gray-200 rounded px-8 mb-5"
            style={{ marginLeft: "38%" }}
          >
            <form className="mt-1 w-full max-w-lg">
              <center>
                <h2 className="mt-4 mb-5">Add Event</h2>
              </center>
              <center>
                <div id="error" style={{color:'red',fontWeight:'bolder'}}>{err}</div>
              </center>
              <div className="row mb-2 mt-4 mb-2">
                <center>
                  <img
                    src="profile.png"
                    ref={profile}
                    //   className="rounded-circle"
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
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    
                    type="text"
                    name="title"
                    placeholder="Title of the Event"
                    onChange={getData}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="px-3">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  
                    type="date"
                    name="date"
                    placeholder="Date "
                    onChange={getData}
                  />
                </div>
                <div className="pl-14">
                  <input
                    className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-5 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            
                    type="time"
                    name="time"
                      placeholder="Time"
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
                    name="email"
                    placeholder="Contact Email"
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
                    name="phoneNumber"
                    placeholder="Phone Number For Contact"
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
                    name="speaker"
                    placeholder="Speaker"
                    onChange={getData}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <textarea
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    name="description"
                    placeholder="Description of Event"
                    onChange={getData}
                    cols='100'
                  />
                </div>
              </div>

              <div>
                <div className="grid pb-14 mt-8">
                  <button
                    className="shadow justify-self-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  text-xl bg-black py-2 px-14 rounded"
                    type="button"
                    onClick={addEvent}
                  >
                    Add Event
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

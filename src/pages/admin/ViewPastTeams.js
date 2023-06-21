import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BsFillEyeFill} from 'react-icons/bs'
import SidePanel from './SidePanel'

export default function ViewPastTeams() {

  const [allTeams,setAllTeams] = useState([])
  const [err,setErr] = useState("")
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND}/admins/allTeamInfo`).then((res)=>{
      setAllTeams(res.data.teams)
    })
  },[])

  function showTeamMembers(teamMembers,year){
    navigate("/teamMembersTable",{state : {member:teamMembers,year:year}})
  }

  return (
    <>
      <div className="grid">
        <div className="flex">
          <SidePanel />

          <div className=" px-8 mb-10 " style={{ marginLeft: "38%" }}>
            <center>
              <h2 className="my-10">
                Contact Prev Team Members
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
                  <th scope="col">Year</th>
                  <th></th>
                  <th></th>
                  
                </tr>
              </thead>
              <tbody>
                {allTeams.map((i) => (
                  <tr>
                    <td>{i.year-1} - {i.year}</td>
                    <td></td>
                    <td onClick={()=>showTeamMembers(i.teamMembers,i.year)} style={{cursor:"pointer",color:"black"}}><BsFillEyeFill/></td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
           
            </>}
          </div>
        </div>
      </div>
    </>
  )
}

import React,{memo, useEffect, useRef, useState} from 'react'
import SidePanel from './SidePanel';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddFaculty from './AddFaculty';
import AddTeam from './Add_team';


function HomeAdmin(){

    useEffect(()=>{
        // fetch the team of current year
    },[])

    return (
        <>
            <div className="row">
                <div className='col-3'>
                    <SidePanel/>
                </div>
                <div className='col-9'>
                    <AddTeam/>
                </div>
            </div>
            
            
        </>
    )
}

export default memo(HomeAdmin);
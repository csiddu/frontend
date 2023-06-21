import axios from 'axios';
import React,{memo, useRef, useState} from 'react';
import { ReactSession } from 'react-client-session';



function Login(props){

    const email = useRef();
    const password = useRef();


    var onSubmit= async (event) => {
        event.preventDefault();
        const loginParams = {
            email : email.current.value.toString().trim(),
            password : password.current.value.toString().trim(),
        }
        console.log(loginParams);

        // const req = await fetch(`${process.env.REACT_APP_BACKEND}/admins/login`, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: loginParams
        // });
        
        const req = await axios.post(`${process.env.REACT_APP_BACKEND}/admins/login`,loginParams).then(
            (res)=>{
                console.log(res);
                if (res.data.isLoggedIn === true) {
                    props.setLogin(true);
                    // window.sessionStorage.setItem("email", res.email);
                    // window.sessionStorage.setItem("password", loginParams.password);
                    ReactSession.set("email", loginParams.email)
                    ReactSession.set("password", loginParams.password)

                    console.log("in func2");
                }
            }
        );
        

        const req1 = await axios.post(`${process.env.REACT_APP_BACKEND}/admins/addTeam`,{year:'2024',faculty:'Apurva Mehta'}).then(
            (res)=>{
                console.log(res);
            }
        );
        

    }

    return (
        <div className="grid ">
            <div className="justify-self-center border border-gray-200 rounded px-8 my-10">
                <div className="grid p-5">
                    <p className="justify-self-center text-4xl font-bold">Admin Page</p>
                </div>
            
                <form className="mt-10 w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                        Email
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="email"  ref={email}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Password
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-20 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="password" ref={password} />
                    </div>
                </div>
                
                <div>
                    <div className="grid pb-14">
                    <button className="shadow justify-self-center bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white  text-xl bg-black py-2 px-14 rounded" type="button" onClick={onSubmit}>
                        Submit
                    </button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default memo(Login);
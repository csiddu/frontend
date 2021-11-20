import React, { useState, useEffect } from 'react'

export default function Team() {
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://csiddu-website-backend.herokuapp.com/teams")
      .then(res => res.json())
      .then((data) => { 
        data.sort((a, b) => (a.id) < (b.id) ? -1:0);
        setTeam(data); setIsLoaded(true) })
  }, [])
  
  function TeamComp(sec,start,end) {
    return(
      <div className="pt-16 grid w-screen">
        <h1 className="text-3xl justify-self-center	font-bold">
          {sec}
        </h1>
        <div className="mt-10 flex justify-center">
          {team.slice(start,end).map(memb => (
            <div className="md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-5">
              <div className="px-6 lg:w-10/12">
                <div className="lg:w-9/12 shadow-2xl rounded-full max-w-full mx-auto">
                  <img alt="..." src={memb.image}
                     className="rounded-full"/>
                </div>
                <div className="mt-6 text-center">
                  <h5 className="text-xl font-bold">
                    {memb.name}
                  </h5>
                  <p className="mt-3 text-red-600 text-xs uppercase font-semibold">
                    {memb.position}
                  </p>
                  <p className="mt-3 text-xs text-gray-500 uppercase font-semibold">
                    I do not fear semicolons, I fear lack of them.
                  </p>
                  <div className="mt-3 flex justify-around">
                    <div className="text-blue-600 focus:outline-none">
                      <a href="https://google.com" >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                    <div className="text-black focus:outline-none">
                      <a href="https://google.com" >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                    <div className="text-blue-400 focus:outline-none">
                      <a href="https://google.com" >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          ))}
        </div>
      </div>
    )
  }

  if(!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        
        {TeamComp("Our Mentor",0,1)}
        {TeamComp("Core Team",1,3)}
        {TeamComp("Technical Team",3,6)}
        {TeamComp("Management Team",6,9)}
        {TeamComp("Social Media and Designing Team",9,11)}
      </div>
    )
  }
}

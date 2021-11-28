import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Team() {
  const [error, setError] = useState(null);
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://csiddu-website-backend.herokuapp.com/teams")
      .then(res => res.json())
      .then((data) => {
        data.sort((a, b) => (a.id) < (b.id) ? -1 : 0);
        setTeam(data);
        setIsLoaded(true)
      },
        (error) => {
          setIsLoaded(false);
          setError(error);
        })
  }, [])

  const Loading = () => {
    return (
      <div class="flex w-screen h-screen justify-center items-center">
        <div class="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
      </div>
    )
  }

  function TeamComp(sec, start, end) {
    return (
      <div className="pt-16 grid w-screen">
        <h1 className="text-3xl justify-self-center sm:px-10	font-bold">
          {sec}
        </h1>
<<<<<<< HEAD
        <div className="mt-10 flex lg:flex-row flex-col justify-center">
          {team.slice(start,end).map(memb => (
=======
        <div className="mt-10 flex justify-center">
          {team.slice(start, end).map(memb => (
>>>>>>> 6e188c22d9b03f69bdbe86ec565e8aa38dfa8eb3
            <div className="md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-5">
              <div className="px-6 lg:w-10/12 py-10">
                <div className="lg:w-9/12 w-32 shadow-2xl rounded-full max-w-full mx-auto">
                  <img alt="..." src={memb.image}
                    className="rounded-full" />
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
                  <div className="mt-3 flex lg:justify-around justify-evenly">
                    <div className="text-blue-600 focus:outline-none">
                      <a href="https://google.com" >
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                    </div>
                    <div className="text-black focus:outline-none">
                      <a href="https://google.com" >
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    </div>
                    <div className="text-blue-400 focus:outline-none">
                      <a href="https://google.com" >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
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
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <Loading />
  } else {
    return (
<<<<<<< HEAD
      <div>  
        {TeamComp("Our Mentor",0,1)}
        {TeamComp("Core Team",1,3)}
        {TeamComp("Technical Team",3,6)}
        {TeamComp("Management Team",6,9)}
        {TeamComp("Social Media and Designing Team",9,11)}
        {TeamComp("Our Juniors",11,14)}
        {TeamComp("",14,17)}
        {TeamComp("",17,20)}
=======
      <div>

        {TeamComp("Our Mentor", 0, 1)}
        {TeamComp("Core Team", 1, 3)}
        {TeamComp("Technical Team", 3, 6)}
        {TeamComp("Management Team", 6, 9)}
        {TeamComp("Social Media and Designing Team", 9, 11)}
>>>>>>> 6e188c22d9b03f69bdbe86ec565e8aa38dfa8eb3
      </div>
    )
  }
}

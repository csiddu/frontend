import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom';




// import { getStorage, ref } from "firebase/storage";
// const storage = getStorage();
// const pathReference = ref(storage, 'images/stars.jpg');




export default function Team() {

  const [error, setError] = useState(null);
  const [team, setTeam] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const { state } = useLocation();


  useEffect(() => {
    console.log(state);

    setTeam(state.teamMembers);
    setIsLoaded(true);

    // fetch(`${process.env.REACT_APP_SERVER}/teams`)
    //   .then(res => res.json())
    //   .then((data) => {
    //     data.sort((a, b) => (a.id) < (b.id) ? -1 : 0);
    //     setTeam(data);
    //     setIsLoaded(true)
    //   },
    //     (error) => {
    //       setIsLoaded(false);
    //       setError(error);
    //     })
  }, [])

  const Loading = () => {
    return (
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
      </div>
    )
  }

  function TeamComp(sec, start, end) {
    return (
      <div className="pt-16 grid w-screen">
        <h1 className="text-3xl justify-self-center sm:px-10	font-bold">
          {sec}
        </h1>
        <div className="mt-10 flex lg:flex-row flex-col justify-center">
          {team.map(memb => (  //.slice(start, end)
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
                  {memb.tagline && start < 11 ? <p className="mt-3 text-xs text-gray-500 uppercase font-semibold">
                    {memb.tagline}
                  </p> : null}
                  <div className="mt-3 flex lg:justify-around justify-evenly">
                    {memb.linkedin !== "" && start < 11 ? <div className="text-blue-600 focus:outline-none">
                      <a href={memb.linkedin} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg" />
                      </a>
                    </div> : null}

                    {memb.github && start < 11 ? <div className="text-black focus:outline-none">
                      <a href={memb.github} target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    </div> : null}
                    {/* {memb.twitter && start < 11 ? <div className="text-blue-400 focus:outline-none">
                      <a href={memb.twitter} target="_blank" rel="noreferrer" >
                        <FontAwesomeIcon icon={faTwitter} size="lg" />
                      </a>
                    </div> : null} */}
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
      <div>
        <div className="container mx-auto px-4 py-10">
          <div className="items-center lg:flex">
            <div className="w-2/2 md:w-2/3 lg:w-2/3 mx-12 ml-auto mr-auto p-5">
              <img alt="..."
                className="max-w-full rounded-lg shadow-xl"
                src={require('../assets/img/15.JPG').default} />
            </div>
            <div className="w-full md:w-2/3 px-4">
              <div>
                <h3 className="text-3xl lg:text-4xl text-center font-semibold">
                  Meet Our Amazing Team!
                </h3>
                <p className="mt-5 text-l text-center leading-relaxed text-gray-600">
                <span>"Alone we can do so little, together we can do so much" <br></br>-Helen Keller </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {TeamComp("Our Mentor", 0, 1)}
        {TeamComp("Core Team", 1, 3)}
        {TeamComp("Technical Team", 3, 6)}
        {TeamComp("Management Team", 6, 9)}
        {TeamComp("Social Media and Designing Team", 9, 11)}
        {TeamComp("Our Juniors", 11, 14)}
        {TeamComp("", 14, 17)}
        {TeamComp("", 17, 20)}
      </div>
    )
  }
}

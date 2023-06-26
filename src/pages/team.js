import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";
import TeamImage from "../assets/img/15.jpg";

export default function Team() {
  const location = useLocation();
  const teamData = location.state;
  const [error, setError] = useState(null);
  const [team, setTeam] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // console.log(teamData);
  // console.log(teamData.members);

  const coreTeam = teamData.members.filter(
    (member) => member.team === "Core Team"
  );
  const socialMediaTeam = teamData.members.filter(
    (member) => member.team === "Social Media"
  );
  const technicalTeam = teamData.members.filter(
    (member) => member.team === "Technical"
  );
  const eventManagementTeam = teamData.members.filter(
    (member) => member.team === "Event Management"
  );
  const juniorAssociatesTeam = teamData.members.filter(
    (member) => member.team === "Junior Associates"
  );

  useEffect(() => {
    setTeam(location.teamMembers);
    setIsLoaded(true);
  }, []);

  const Loading = () => {
    return (
      <div class="flex w-screen h-screen justify-center items-center">
        <div class="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
      </div>
    );
  };

  function TeamComp(sec, teamData) {
    if (!teamData || teamData.length === 0) {
      console.log(null);
      return null;
    }

    return (
      <div className="pt-16 grid w-screen">
        <h1 className="text-3xl justify-self-center sm:px-10	font-bold">
          {sec}
        </h1>
        <div className="mt-1 mb-2 flex lg:flex-row flex-col justify-center">
          {teamData.map((memb) => (

            <div className="md:w-6/12  lg:ml-5 mb-12 px-5">
              <div className="px-6 lg:w-[68%] lg:ml-[13%] ">
                <div className="lg:ml-[23%] lg:w-[70%] shadow-2xl rounded-full">
                  <img alt="..." src={memb.url} className=" rounded-full" />
                </div>
                <div className="mt-6 text-center">
                  <h5 className="text-xl font-bold">
                    {memb.firstName} {memb.lastName}
                  </h5>
                  <p className="mt-3 text-red-600 text-xs uppercase font-semibold">
                    {memb.position}
                  </p>
                  {memb.tagline ? (
                    <p className="mt-3 text-xs text-gray-500 uppercase font-semibold">
                      {memb.tagline}
                    </p>
                  ) : null}
                  <div className="mt-3 flex lg:justify-between justify-evenly space-x-3">
                    {memb.linkedin !== "" ? (
                      <div className="text-blue-600 focus:outline-none">
                        <a href={memb.linkdn} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                      </div>
                    ) : null}
                    {memb.github ? (
                      <div className="text-black focus:outline-none">
                        <a href={memb.github} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                      </div>
                    ) : null}
                    {memb.twitter ? (
                      <div className="text-blue-400 focus:outline-none">
                        <a href={memb.twitter} target="_blank" rel="noreferrer">
                          <FontAwesomeIcon icon={faTwitter} size="lg" />
                        </a>
                      </div>
                    ) : null}
                  </div>

                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  else if (!isLoaded) {
    return <Loading />
  }
  else {
    return (
      <div>
        <div className="container mx-auto px-4 py-10">
          <div className="items-center lg:flex">
            <div className="w-2/2 md:w-2/3 lg:w-2/3 mx-12 ml-auto mr-auto p-5">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                src={TeamImage}
              />
            </div>
            <div className="w-full md:w-2/3 px-4">
              <div>
                <h3 className="text-3xl lg:text-4xl text-center font-semibold">
                  Meet Our Amazing Team!
                </h3>
                <p className="mt-5 text-l text-center leading-relaxed text-gray-600">
                  <span>
                    "Alone we can do so little, together we can do so much"{" "}
                  </span>
                  <br />
                  -Helen Keller
                </p>
              </div>
            </div>
          </div>
        </div>
        {TeamComp("Core Team", coreTeam)}
        {TeamComp("Social Media and Designing Team", socialMediaTeam)}
        {TeamComp("Technical Team", technicalTeam)}
        {TeamComp("Event Management", eventManagementTeam)}
        {TeamComp("Junior Associates", juniorAssociatesTeam)}
      </div>
    );
  }
}

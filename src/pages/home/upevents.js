import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Upevents() {
  const [error, setError] = useState(null);
  const [events, setEvent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  useEffect(() => {
    fetch("https://csiddu-website-backend.herokuapp.com/events")
      .then(res => res.json())
      .then((data) => {
        data.sort((a, b) => (a.id) < (b.id) ? -1 : 0);
        setEvent(data);
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

  function EventComp() {
    return (
      <div>
        {events.map(event => (
          event.register === true ? 
          <div>
          <p className="text-center font-bold text-3xl animate-pulse">Upcomming Event</p>
      <div class="lg:flex p-10">
      <div class="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full">
        <div class="text-center tracking-wide">
      
          <div class="text-white font-bold text-4xl ">{event.date.split("/")[0]}</div>
          <div class="text-white font-normal text-2xl">{monthNames[event.date.split("/")[1] - 1]}</div>
        </div>
      </div>
      <div class="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div class="flex flex-row lg:justify-start justify-center">
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            <i class="far fa-clock"></i> {event.time}
          </div>
          <div class="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            Organiser : CSI DDU
          </div>
        </div>
        <div class="mt-4 font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
          {event.title}
        </div>
        <div class="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
          {event.venue}
        </div>
      </div>
      <div class="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
        <Link to={{ pathname:"register" }} class="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
          Register Here
        </Link>
      </div>
    </div> 
    </div>
    : null
    ))
    }
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
        {EventComp()}
      </div>
    )
  }
}

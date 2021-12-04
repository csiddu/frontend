import React, { useState, useEffect }  from 'react';

const Events = () => {
const Loading = () => {
    return (
      <div class="flex w-screen h-screen justify-center items-center">
        <div class="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
      </div>
    )
  }
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("https://csiddu-website-backend.herokuapp.com/events")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setEvents(data);
                },
                (error) => {
                    setIsLoaded(false);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Loading />
    } else {
        return (
            <div>
                {events.sort((a, b) => (a.id) > (b.id) ? -1:0).map(event => {
                if(event.id %2 === 0) return (
                  <div className="container mx-auto px-4 py-10">
                  <div className="items-center lg:flex">
                    <div className="w-full md:w-2/3 px-4">
                      <div>
                        <h3 className="text-5xl text-center font-semibold">
                          {event.title}
                        </h3>
                        <p className="mt-5 text-sm text-center leading-relaxed text-gray-600">
                          {event.description}
                        </p>
                      </div>
                    </div>
                    <div className="w-2/3 mx-12 ml-auto mr-auto p-5">
                      <img alt="..."
                        className="max-w-full rounded-lg shadow-xl"
                        src={event.image}/>
                    </div>
                  </div>
                </div>
                )
                
                else return (
                    <div className="container mx-auto px-4 py-10">
                    <div className="items-center lg:flex">
                      <div className="w-2/3 mx-12 ml-auto mr-auto p-5">
                        <img alt="..."
                          className="max-w-full rounded-lg shadow-xl"
                          src={event.image}/>
                      </div>
                      <div className="w-full md:w-5/12 px-4">
                        <div>
                          <h3 className="text-5xl text-center font-semibold">
                            {event.title}
                          </h3>
                          <p className="mt-5 text-sm text-center leading-relaxed text-gray-600">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )   
    })}
            </div>
        );
    }
}
export default Events;
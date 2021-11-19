import React, { useState, useEffect }  from 'react';

const Api = () => {
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
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {events.sort((a, b) => (a.id) > (b.id) ? -1:0).map(event =>(
                    <div className="container mx-auto px-4 py-10">
                    <div className="items-center flex">
                      <div className="w-full/2 mx-12 ml-auto mr-auto p-5">
                        <img
                          className="max-w-full rounded-lg shadow-lg"
                          src="https://csiddu.netlify.app/static/media/1.82bab5ad.jpg"/>
                      </div>
                      <div className="w-full md:w-5/12 px-4">
                        <div>
                          <h3 className="text-5xl font-semibold">
                            Get Set Git
                          </h3>
                          <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        );
    }
}
export default Api;
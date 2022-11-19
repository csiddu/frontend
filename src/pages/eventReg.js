import React, { useState, useEffect } from 'react';

const EventReg = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [links, setlinks] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/links`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setlinks(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const Loading = () => {
    return (
      <div class="flex w-screen h-screen justify-center items-center">
        <div class="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
      </div>
    )
  }

  if (error) {
    return <div><meta http-equiv="refresh" content={"0; url=https://docs.google.com/forms/d/e/1FAIpQLSeWdCuEK3J23ZPyQBEVA4aVMHvqHtJaS8aV-cBodXxxHXY1Aw/viewform"} /></div>;
  } else if (!isLoaded) {
    return <Loading />
  } else {
    return (
      <div>
        <html>
          <head>
            <meta http-equiv="refresh" content={"0; url=" + links.rlink} />

          </head>

          <div className='p-10 flex flex-col font-franklin'>

            <div className="lg:px-10 self-center mt-36  h-screen">
              <p className="text-7xl font-extrabold">Just a moment</p>
            </div>

          </div>
        </html>
      </div>
    );
  }
};

export default EventReg;


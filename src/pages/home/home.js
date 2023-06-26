import React from 'react';

import Landing from './Landing';
import WWR from './WWR';
import WDWD from './WDWD';
import Upevents from './upevents';
import Reco from './Reco';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        {/* <div className='bg-black'>xyz</div> */}
        {/* <h1 className='text-red-700'>Test</h1> */}
        <Landing />
        <Upevents />
        <WWR />
        <WDWD />
        <Reco />
      </main>
    </div>
  );
}

export default Home;
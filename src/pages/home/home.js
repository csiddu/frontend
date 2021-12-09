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
        <Landing />
        <p className="text-center font-bold text-3xl animate-pulse">Upcomming Event</p>
        <Upevents />
        <WWR />
        <WDWD />
        <Reco />
      </main>
    </div>
  );
}

export default Home;
import React from 'react';

import Landing from './Landing';
import WWR from './WWR';
import WDWD from './WDWD';
import Upevents from './upevents';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="flex-grow">
        <Landing />
        <Upevents />
        <WWR />
        <WDWD />
      </main>
    </div>
  );
}

export default Home;
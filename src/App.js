import React, { useState, useEffect, Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'

import Home from './pages/home/home';
import Navbar from './components/Navbar';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';

const Events = React.lazy(() => import('./pages/events'));
const Blogs = React.lazy(() => import('./pages/blogs'));
const Team = React.lazy(() => import('./pages/team'));
const Contact = React.lazy(() => import('./pages/contact'));
const EventReg = React.lazy(() => import('./pages/eventReg'));
const EventFeed = React.lazy(() => import('./pages/eventFeed'));

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {  setIsOpen(!isOpen);  };
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true, disable: 'phone', duration: 700, easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]);


  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu); };  });

  return (
    <Suspense fallback={Loading}>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/team' component={Team} />
        <Route path="/events" component={Events}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/register" component={EventReg}/>
        <Route path="/feedback" component={EventFeed}/>
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </Suspense>
  );
}

const Loading = () => {
  return (
    <div class="flex w-screen h-screen justify-center items-center">
      <div class="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
    </div>
  )
}

const NoMatch = () => {
  return (
    <Home />
  )
}

export default App;

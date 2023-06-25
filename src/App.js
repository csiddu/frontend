import React, { useState, useEffect, Suspense } from 'react';
import { ReactSession } from 'react-client-session';
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'
import SidePanel from './pages/admin/SidePanel';
import Home from './pages/home/home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Drawer from './components/Drawer';
import AddMember from './pages/admin/AddMember';
import AddFaculty from './pages/admin/AddFaculty';
import AddTeam from './pages/admin/Add_team';
import UpdateTeam from './pages/admin/UpdateTeam';
import ViewPastTeams from './pages/admin/ViewPastTeams';
import ShowMembersYearWise from './pages/admin/ShowMembersYearWise';
import AddEvent from './pages/admin/AddEvent';

const Events = React.lazy(() => import('./pages/events'));
const Blogs = React.lazy(() => import('./pages/blogs'));
const Team = React.lazy(() => import('./pages/team'));
const Contact = React.lazy(() => import('./pages/contact'));
const EventReg = React.lazy(() => import('./pages/eventReg'));
const EventFeed = React.lazy(() => import('./pages/eventFeed'));
const Admin = React.lazy(() => import('./pages/admin/Main'));
ReactSession.setStoreType("localStorage");

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => { setIsOpen(!isOpen); };
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
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (

    <Suspense fallback={Loading}>
      <Navbar toggle={toggle} />

      <Drawer isOpen={isOpen} setIsOpen={toggle} />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/team' element={<Team />} />
        <Route path="/addTeam" element={<AddTeam />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<EventReg />} />
        <Route path="/feedback" element={<EventFeed />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addMember" element={<AddMember />} />
        <Route path="/addFaculty" element={<AddFaculty />} />
        <Route path="/updateTeam" element={<UpdateTeam />} />
        <Route path="/allTeams" element={<ViewPastTeams />} />
        <Route path="/teamMembersTable" element={<ShowMembersYearWise />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="*" element={<SidePanel />} />

      </Routes>
      <Footer />
    </Suspense>
  );
}

const Loading = () => {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      <div className="animate-spin rounded-full h-28 w-28 border-b-2 border-gray-600"></div>
    </div>
  )
}

const NoMatch = () => {
  return (
    <Home />
  )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import HeroSection from './components/HeroSection';
import EventSection from './components/EventSection';
import CommunityForum from './components/CommunityForum';
import Gallery from './components/Gallery';
import Announcements from './components/Announcements';
import ReportingSection from './components/ReportingSection';
import TrackingSection from './components/TrackingSection';
import Program from './components/Program';
import Committee from './components/Committee';
import Volunteer from './components/Volunteer';

function Layout() {
  return (
    <>
      <Header />
      
      <HeroSection />
      <EventSection />
      <CommunityForum />
      <Gallery />
      <Announcements />
      <ReportingSection />
      <TrackingSection />
      <AboutSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/community" element={<CommunityForum />} />
        <Route path="/po" element={<Program />} />
        <Route path="/cmt" element={<Committee />} />
        <Route path="/volun" element={<Volunteer />} />
       
        {/* Define other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));

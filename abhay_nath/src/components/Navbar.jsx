import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Internship from './Internship';
import Team from './Team';
import Contact from './Contact';

function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <NavLink to="/" className="link" activeClassName="active">Home</NavLink>
            <NavLink to="/about" className="link">About</NavLink>
            <NavLink to="/internships" className="link">Internships</NavLink>
            <NavLink to="/team" className="link">Team</NavLink>
            <NavLink to="/contact" className="link">Contact Us</NavLink>
          </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/internships" element={<Internship />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
export default Navbar;
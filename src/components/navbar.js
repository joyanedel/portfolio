import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [bgColor, setBgColor] = useState('transparent')

    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 30
        if (show) {
          setBgColor('rgba(1,4,26,0.98)');
        } else {
          setBgColor('transparent');
        }
      }

      document.addEventListener('scroll', handleScroll);
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, []);

    return (
      <div className="container-fluid px-0 sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark" style={{'borderBottom': 'solid', 'borderBottomColor': 'white', "backgroundColor": bgColor, "transition": "background-color 0.5s ease 0s"}}>
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand px-3"> My Portfolio </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'><NavLink to="/technical-skills" className="nav-link">Technical Skills</NavLink></li>
                <li className="nav-item dropdown btn-group">
                  <NavLink to="/projects" className="nav-link"> Projects </NavLink>
                  <a href="void(0);" className="nav-link dropdown-toggle dropdown-toggle-split ps-0" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded={false}> </a>
                  <ul className="dropdown-menu" aria-labelledby='navbarDropdown'>
                    <li><NavLink to="/projects/#externals" className="dropdown-item"> Externals </NavLink></li>
                    <li><NavLink to="/projects/#personals" className="dropdown-item"> Personals </NavLink></li>
                  </ul>
                </li>
                <li className="nav-item"><NavLink to="/about-me" className="nav-link">About Me</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavBar;
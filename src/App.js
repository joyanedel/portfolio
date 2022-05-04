import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainMenuPage from './views/main_menu';
import AboutMePage from './views/about_me';
import ProjectsPage from './views/projects';
import TechnicalSkills from './views/technical_skills';

function App() {
  return (
    <div className="container-fluid mx-0 px-0">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* Navbar */}
        <NavBar />
        {/* Content */}
        <div className='container-fluid' style={{"margin": "2rem 0rem"}}>
          <Routes>
            <Route path="/" element={<MainMenuPage />}/>
            <Route path="/about-me" element={<AboutMePage />}/>
            <Route path="/technical-skills" element={<TechnicalSkills />} />
            <Route path="/projects" element={<ProjectsPage />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-gray-100">
      <Navbar />
      <Hero />
      <TechStack />

      <main>
          <Routes>
              <Route path="/" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
          </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
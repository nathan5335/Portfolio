import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import FloatingContactButton from './components/FloatingContactButton';
import CustomCursor from './components/CustomCursor';
import VisitorCounter from './components/VisitorCounter';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <CustomCursor />
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
          <FloatingContactButton />
          <VisitorCounter />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

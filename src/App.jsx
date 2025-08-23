import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Thesis from './components/Thesis';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Thesis />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


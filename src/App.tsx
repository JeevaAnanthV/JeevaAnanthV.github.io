import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white relative">
      <ParticleBackground />
      <Navigation />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <Projects />
        <section id="skills">
          <Skills />
        </section>
      </main>
    </div>
  );
}

export default App;
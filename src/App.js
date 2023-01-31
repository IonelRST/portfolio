import React from 'react'
import logo from './logo.svg';

import Header from './components/header/header';
import Content from './components/content/content';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import Work from './components/work/work';

import './App.css';

function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className='content-container'>
        <Content />
      </div>
      <div className='experience-container'>
        <Experience />
      </div>
      <div className='work-container'>
        <Work />
      </div>
      <div className='projects-container'>
        <Projects />
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import profile from './images/profile.jpeg'

import Header from './components/header/header';
import Content from './components/content/content';
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <main>
          <div className='image-container'>
    </div>
      <header>
        <Header />
      </header>
      <div className='content-container'>
        <Content />
      </div>
      <div className='experience-container'>
        <Experience />
      </div>
      <div className='projects-container'>
        <Projects />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;

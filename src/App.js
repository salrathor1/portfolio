import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import Skills from './components/Skills';

class App extends React.Component {
  //state

  //methods

  //render
  render() {
    return (
      <div className="container">
         <AboutMe />
         <Experience />
         <Education />
         <Skills />
         <Projects />
         <NavBar />
      </div>
    )
  }
}
export default App;

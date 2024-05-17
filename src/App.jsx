
import './App.scss'
import { Routes, Route } from 'react-router-dom'
// import Particles from "react-tsparticles";
// import { loadFull } from 'tsparticles';
import Home from './containers/home'
import About from './containers/about'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'
import Navbar from './components/navBar'
// import particles from './utils.js/particles';



function App() {
  // const handleInit = async (main) => {
  //   await loadFull(main);
  // }
  return (
    <div className='App'>

      {/* <Particles id="particles" options={particles} init={handleInit} /> */}

      <Navbar />
      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route index path='/about' element={<About />} />
          <Route index path='/resume' element={<Resume />} />
          <Route index path='/skills' element={<Skills />} />
          <Route index path='/portfolio' element={<Portfolio />} />
          <Route index path='/contact' element={<Contact />} />

        </Routes>
      </div>


    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './features/pages/HomePage';
import NavigationBar from './components/ui/NavigationBar';
import EducationPage from './features/pages/EducationPage';
import PublicationsPage from './features/pages/PublicationsPage';
import ProjectsPage from './features/pages/ProjectsPage';
import Footer from './components/ui/Footer';
function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        {/* <Route path="/" element={<ProfileLayout />} >  */}
          <Route path='/' element={<HomePage />} />
          <Route path='/education' element={<EducationPage />} />
          <Route path='/publications' element={<PublicationsPage />} />
          <Route path='/projects' element={<ProjectsPage />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App

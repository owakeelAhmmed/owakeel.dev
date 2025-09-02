import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe'
import Contacts from './pages/Contacts'

function App() {

  return (
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='projects/' element={<Projects/>}/>
          <Route path='about-me/' element={<AboutMe/>}/>
          <Route path='contact/' element={<Contacts/>}/>
        </Routes>
      </MainLayout>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Project from './pages/Project'
import PageNotFound from './pages/pageNotfound'
import Footer from './components/footer'


function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Pokemon from './pages/pokemon/Pokemon'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pokemon/" element={<Pokemon />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

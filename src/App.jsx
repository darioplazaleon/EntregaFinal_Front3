import Home from './components/home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Contacto from './components/contacto/Contacto'
import ThemeProvider from './components/context/ThemeContext'
import Detalle from './components/detalles/Detalle'
import Destacados from './components/destacados/Destacados'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/detalle/:id' element={<Detalle/>} />
        <Route path='/destacados' element={<Destacados/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  )
}

export default App

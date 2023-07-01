import { Link } from 'react-router-dom'
import { FaSuitcaseMedical } from 'react-icons/fa6'
import '../css/Navbar.css'
import { useContext } from 'react'
import { ThemeContext } from '../components/context/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <header className={theme ? 'header-light' : 'header-dark'}>
      <div className={theme ? 'logo-light' : 'logo-dark'}>
        <FaSuitcaseMedical className={theme ? 'icon-light' : 'icon-dark'} />
        <p>Clinica</p>
      </div>
      <nav className={theme ? 'navBar navBar-dark' : 'navBar navBar-light'}>
        <Link className={theme ? 'text-link textLink-light' : 'text-link textLink-dark'} to='/home'>
          Home
        </Link>
        <Link className={theme ? 'text-link textLink-light' : 'text-link textLink-dark'} to='/contacto'>
          Contacto
        </Link>
        <Link className={theme ? 'text-link textLink-light' : 'text-link textLink-dark'} to='/destacados'>
          Destacados
        </Link>
        <button onClick={handleClick}>Cambiar Tema</button>
      </nav>
    </header>
  )
}

export default Navbar

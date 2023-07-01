import '../css/Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../components/context/ThemeContext'

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleClick = () => {
    toggleTheme()
  }

  return (
    <footer className={theme ? 'footer-light' : 'footer-dark'}>
      <p>Powered by Dario</p>
    </footer>
  )
}

export default Footer

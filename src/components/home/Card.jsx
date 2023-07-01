import '../../css/Card.css'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

function Card({ datos, addToFavorites, handleRemoveFromFavorites }) {
  const [favorite, setFavorite] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const clickFavorite = () => {
    setFavorite(!favorite)
    if (favorite) {
      handleRemoveFromFavorites(datos.id)
    } else {
      addToFavorites(datos)
    }
  }

  return (
    <div className={theme ? 'card card-light' : 'card card-dark'}>
      <Link to={`/detalle/${datos.id}`}>
        <img src='src/assets/doctor.jpg' alt='doctor' />
      </Link>
      <p className='name'>{datos.name}</p>
      <p>{datos.username}</p>
      <div
        className={
          theme ? 'favoriteB favorite-light' : 'favoriteB favorite-dark'
        }
      >
        <AiFillHeart
          className={`favorite-icon ${favorite ? 'favorite' : ''}`}
          onClick={clickFavorite}
        />
      </div>
    </div>
  )
}

export default Card

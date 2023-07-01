import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../home/Card'
import '../../css/Home.css'

function Destacados() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites))
    }
  }, [])

  const handleRemoveFromFavorites = (cardId) => {
    const updatedFavorites = favorites.filter((card) => card.id !== cardId)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  return (
    <div className='cards'>
      {favorites.map((datos) => (
        <Card
          key={datos.id}
          datos={datos}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
      ))}
    </div>
  )
}

export default Destacados

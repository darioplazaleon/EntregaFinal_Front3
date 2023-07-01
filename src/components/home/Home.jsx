import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'
import Card from '../home/Card'
import '../../css/Home.css'

function Home() {
  const [odontologos, setOdontologos] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )
        if (response.ok) {
          const data = await response.json()
          setOdontologos(data)
        } else {
          throw new Error('Error en la solicitud')
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])


  
  useEffect(()=>{
    const storedFavorites = localStorage.getItem('favorites')
    if(storedFavorites){
      setFavorites(JSON.parse(storedFavorites))
    }
  },[])
  
  const addToFavorites = (odontologos) => {
    // Verificar si la carta ya está en los favoritos
    const isAlreadyAdded = favorites.some((favorite) => favorite.id === odontologos.id);
    if (isAlreadyAdded) {
      return; // No hacer nada si ya está en los favoritos
    }

    const updatedFavorites = [...favorites, odontologos];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (cardId) => {
    const updatedFavorites = favorites.filter((card) => card.id !== cardId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };



  return (
    <>
      <div className='cards'>
        {odontologos.map((datos) => (
          <Card key={datos.id} datos={datos} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
        ))}
      </div>
    </>
  )
}

export default Home

import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { useParams } from 'react-router-dom'
import CardDetail from './CardDetail'
import '../../css/Detalle.css'

function Detalle() {
  const params = useParams()
  const [odontologosId, setOdontologosId] = useState("")

  console.log(params)

  useEffect(() => {
    const fetchDataO = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.id}`
      )
      console.log(response)
      if (response.ok) {
        const dataO = await response.json()
        setOdontologosId(dataO)
        console.log(dataO)
      }
    }

    fetchDataO()
  }, [])

  return (
    <div className='cardDetail'>
        <h1>Detalles</h1>
        <CardDetail datos={odontologosId}/>
    </div>
  )
}

export default Detalle

import { useState } from 'react'
import React from 'react'
import '../../css/Formulario.css'

function Formulario() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [error2, setError2] = useState('')
  const [submitedValues, setSubmitedValues] = useState()
  const [submitedMessage, setSubmitedMessage] = useState()

  const onChangeName = (e) => setName(e.target.value)
  const onChangeEmail = (e) => setEmail(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim().length < 5) {
      setError('El nombre no puede tener menos de 5 caracteres')
    } else {
      setError()
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      setError2('El email debe tener un formato valido')
      console.log(error2)
    } else {
      setError2()
    }

    if (name.trim().length > 5 && emailRegex.test(email)) {
      setSubmitedMessage(true)
      setSubmitedValues({
        name,
        email,
      })
      setError('')
      setError2('')
    }
  }
  return (
    <div className='formularioA'>
      <h1>Formulario</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type='text'
          placeholder='Ingrese su nombre'
          value={name}
          onChange={onChangeName}
        />
        {error ? <p className='error'>{error}</p> : undefined}
        <label>Email:</label>
        <input
          type='email'
          placeholder='Ingrese su email'
          value={email}
          onChange={onChangeEmail}
        />
        {error2 ? <p className='error'>{error2}</p> : undefined}
        <button type='submit'>Enviar</button>
        {submitedMessage ? (
          <p>
            “Gracias {submitedValues.name}, te contactaremos cuanto antes vía
            mail”.
          </p>
        ) : undefined}
      </form>
    </div>
  )
}

export default Formulario

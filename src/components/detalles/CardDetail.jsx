
import Doctor from '../../assets/doctor.jpg'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'
import '../../css/CardDetail.css'


function CardDetail({ datos }) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
      <div className={theme ? 'card card-light' : 'card card-dark'}>
        <img src={Doctor} alt='doctor' />
        <p className='name'>{datos.name}</p>
        <p>{datos.email}</p>
        <p>{datos.phone}</p>
        <p>{datos.website}</p>
      </div>
  )
}

export default CardDetail

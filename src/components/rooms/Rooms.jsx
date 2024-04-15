import React from 'react'
import s from './Rooms.module.css'

const Rooms = () => {
  return (
    <div className={s.container}>
        <h1>Rooms</h1>
        <div className={s.contact_container}>
          <div className={s.contact}>
            <img src="	https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="s" />
            <p>+998-78-150-10-90</p>
          </div>
        </div>
    </div>
  )
}

export default Rooms
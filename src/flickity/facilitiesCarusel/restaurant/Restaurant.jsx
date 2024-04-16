import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/restoran1.3096ed8.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/restoran2.3f2607e.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/restoran3.8ddba2c.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/restoran4.d7ec585.jpg"
const king5 = "https://navruzhotel.uz/_nuxt/img/restoran5.91ea58c.jpg"
const king6 = "https://navruzhotel.uz/_nuxt/img/restoran6.59d795c.jpg"
const king7 = "https://navruzhotel.uz/_nuxt/img/restoran7.6219453.jpg"
const king8 = "https://navruzhotel.uz/_nuxt/img/restoran8.22675f4.jpg"
const king9 = "https://navruzhotel.uz/_nuxt/img/restoran9.848adc5.jpg"
const king10 = "https://navruzhotel.uz/_nuxt/img/restoran10.a8c4af2.jpg"
const king11 = "https://navruzhotel.uz/_nuxt/img/restoran11.d12ffc8.jpg"
const king12 = "https://navruzhotel.uz/_nuxt/img/restoran12.887ebae.jpg"
const king13 = "https://navruzhotel.uz/_nuxt/img/restoran13.4d494f9.jpg"
const king14 = "https://navruzhotel.uz/_nuxt/img/restoran14.516ebf2.jpg"

const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
  image: [king1, king2, king3, king4, king5, king6, king7, king8, king9, king10, king11, king12, king13, king14]
}

const Restaurant = () => {
  return (
    <div className='container'>
        <Flickity
            className='slider'
            elementType='div'
            disableImagesLoaded={false}
            options={flickityOptions}
            reloadOnUpdate
            static
        >
          {rooms['id'].map((index) => {
            return (
              <div key={index} className='plate'>
                <div style={{
                  backgroundImage:`url(${rooms['image'][index - 1]})`,
                  width: '100%',
                  height: 270,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}></div>
              </div>
            )
          })}
        </Flickity>
    </div>
  )
}

export default Restaurant
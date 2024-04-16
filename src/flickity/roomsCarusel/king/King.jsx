import React from 'react'
import './Flickity.css'
import './King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/king2.c7bcc07.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/king3.a17503f.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/king4.f3bf48a.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/king5.e3ac512.jpg"
const king5 = "https://navruzhotel.uz/_nuxt/img/king6.f9414e9.jpg"

const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4,5],
  image: [king1, king2, king3, king4, king5]
}

const King = () => {
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
                  backgroundSize: 'cover'
                }}></div>
              </div>
            )
          })}
        </Flickity>
    </div>
  )
}

export default King
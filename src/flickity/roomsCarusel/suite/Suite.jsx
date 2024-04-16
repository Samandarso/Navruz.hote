import React from 'react'
import '../king/Flickity.css'
import '../king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/suite1.0c9a979.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/suite2.2b3ab86.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/suite3.803f561.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/suite4.d8dd4d1.jpg"
const king5 = "https://navruzhotel.uz/_nuxt/img/suite5.db199fc.jpg"
const king6 = "https://navruzhotel.uz/_nuxt/img/suite6.1192228.jpg"
const king7 = "https://navruzhotel.uz/_nuxt/img/suite7.6b2fb70.jpg"
const king8 = "https://navruzhotel.uz/_nuxt/img/suite8.5090a66.jpg"
const king9 = "https://navruzhotel.uz/_nuxt/img/suite9.4263d10.jpg"
const king10 = "https://navruzhotel.uz/_nuxt/img/suite10.074edd2.jpg"

const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4,6,7,8,9,10],
  image: [king1, king2, king3, king4, king5, king6, king7, king8, king9, king10]
}

const Suite = () => {
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

export default Suite
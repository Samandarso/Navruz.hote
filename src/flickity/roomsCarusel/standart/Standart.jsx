import React from 'react'
import '../king/Flickity.css'
import '../king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/twin1.e802c7e.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/twin2.06c79f4.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/twin3.a685811.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/twin4.6047a9c.jpg"

const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4],
  image: [king1, king2, king3, king4]
}

const Standart = () => {
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

export default Standart
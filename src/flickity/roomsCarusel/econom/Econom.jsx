import React from 'react'
import '../king/Flickity.css'
import '../king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/econom1.6178b0e.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/econom2.ccce43d.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/econom3.69c3382.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/econom2.ccce43d.jpg"

const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4],
  image: [king1, king2, king3, king4]
}

const Econom = () => {
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

export default Econom
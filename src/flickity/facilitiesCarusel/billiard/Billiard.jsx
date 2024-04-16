import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/billiard1.e9196d7.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/billiard2.92d1c07.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/billiard3.9ab2caa.jpg"


const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3],
  image: [king1, king2, king3]
}

const Billard = () => {
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

export default Billard
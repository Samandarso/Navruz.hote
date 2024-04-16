import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/terace1.10bc107.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/terace2.5395cd4.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/terace3.260be05.jpg"


const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3],
  image: [king1, king2, king3]
}

const Terrace = () => {
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

export default Terrace
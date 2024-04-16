import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/roomservice1.265ed72.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/roomservice2.f028eb3.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/roomservice3.d947c25.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/roomservice4.987aa03.jpg"
const king5 = "https://navruzhotel.uz/_nuxt/img/roomservice5.7fa01ff.jpg"
const king6 = "https://navruzhotel.uz/_nuxt/img/roomservice6.331767e.jpg"


const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4,5,6],
  image: [king1, king2, king3, king4, king5, king6]
}

const Service = () => {
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

export default Service
import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/bar1.d186c94.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/bar2.5da09a2.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/bar3.d49678d.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/bar4.08bb63c.jpg"
const king5 = "https://navruzhotel.uz/_nuxt/img/bar5.23e3d7c.jpg"
const king6 = "https://navruzhotel.uz/_nuxt/img/bar6.7e13bce.jpg"
const king7 = "https://navruzhotel.uz/_nuxt/img/bar7.1ddb585.jpg"
const king8 = "https://navruzhotel.uz/_nuxt/img/bar8.7dd7ac2.jpg"
const king9 = "https://navruzhotel.uz/_nuxt/img/bar9.2d79b16.jpg"
const king10 = "https://navruzhotel.uz/_nuxt/img/bar10.21dd94a.jpg"
const king11 = "https://navruzhotel.uz/_nuxt/img/bar11.28aa2ad.jpg"
const king12 = "https://navruzhotel.uz/_nuxt/img/bar12.37f4f52.jpg"
const king13 = "https://navruzhotel.uz/_nuxt/img/bar13.c55439e.jpg"


const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4,5,6,7,8,9,10,11,12,13],
  image: [king1, king2, king3, king4, king5, king6, king7, king8, king9, king10, king11, king12, king13]
}

const Bar = () => {
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

export default Bar
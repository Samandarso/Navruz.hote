import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/massage1.133f30f.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/massage2.08997b0.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/massage3.7fde9dc.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/massage4.dd30cd9.jpg"


const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4],
  image: [king1, king2, king3, king4]
}

const Massage = () => {
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

export default Massage
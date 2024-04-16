import React from 'react'
import '../../roomsCarusel/king/Flickity.css'
import '../../roomsCarusel/king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/sauna1.3e54df6.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/sauna2.bb8cd2a.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/sauna3.b1389b9.jpg"


const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3],
  image: [king1, king2, king3]
}

const Sauna = () => {
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

export default Sauna
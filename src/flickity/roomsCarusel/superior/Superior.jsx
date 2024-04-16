import React from 'react'
import '../king/Flickity.css'
import '../king/King.css'
import Flickity from 'react-flickity-component'


const king1 = "https://navruzhotel.uz/_nuxt/img/superior1.59aa489.jpg"
const king2 = "https://navruzhotel.uz/_nuxt/img/superior2.34db16a.jpg"
const king3 = "https://navruzhotel.uz/_nuxt/img/superior3.fb13211.jpg"
const king4 = "https://navruzhotel.uz/_nuxt/img/superior1.59aa489.jpg"

const flickityOptions = {
    initialIndex: 1
}

const rooms = {
  id: [1,2,3,4],
  image: [king1, king2, king3, king4]
}

const Superior = () => {
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

export default Superior
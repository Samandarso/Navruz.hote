import React, { useRef } from 'react'
import s from './Home.module.css'
import { FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { HiMiniXMark } from 'react-icons/hi2';
import { BsArrowRight } from 'react-icons/bs';
import { firestore } from '../firebase'
import { addDoc, collection } from 'firebase/firestore';


const Home = () => {
  const { t } = useTranslation();
  
  const ariveRef = useRef();
  const movegeRef = useRef();
  const personRef = useRef();
  const ref = collection(firestore, "messages")

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(ariveRef.current.value);

    let data = {
      arive:ariveRef.current.value,
      move:movegeRef.current.value,
      person:personRef.current.value,
    }

    try {
      addDoc(ref, data)
    }
    catch (e) {
      console.log(e);
    }

  }

  return (
    <div className={s.container}>
      <div className={s.contact_container}>
        <div className={s.contact}>
          <img src="	https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="s" />
          <p>+998-78-150-10-90</p>
        </div>
      </div>
      <div className={s.loyal}>
        <div className={s.img}></div>
        <div className={s.xmark}><HiMiniXMark/> </div>
        <div className={s.program}>
          <p>{t("Loyalty Program")}</p>
          <span>{t("Register in loyalty program and get your first discount!")}</span>
          <button>{t("Register now")}</button>
        </div>
      </div>
      <div className={s.offer}>
        <div className={s.container_of}>
           <div className={s.cozy}>
            <h1>{t("Cozy hotel for business and leisure in the business center of Tashkent")}</h1>
            <a href="/rooms"><button>{t("Book")}</button></a>
           </div>
           <form action="#" onSubmit={handleSave} className={s.search}>
            <div className={s.top_b}>
              <b>{t("Book online")}</b>
              <p>{t("Get your guaranteed accommodation RIGHT NOW!")}</p>
            </div>
            <div className={s.controls}>
              <div className={s.date}>
                <div className={s.check}>
                  <p>{t("Check-in")}</p>
                  <input  type="text" ref={ariveRef} placeholder='09/04/2024'/>
                </div>
                <p className={s.icon}>🗓️</p>
              </div>
              <div className={s.date}>
                <div className={s.check}>
                  <p>{t("Check-in")}</p>
                  <input type="text" ref={movegeRef} placeholder='10/04/2024'/>
                </div>
                <p className={s.icon}>🗓️</p>
              </div>
              <div className={s.date}>
                <div className={s.check}>
                  <p>{t("Guest")}</p>
                  <input type="text" ref={personRef} placeholder={t("2 adults, 0 children")}/>
                </div>
                <p className={s.icon}><FaUser/></p>
              </div>
              <div className={s.btn}>
                <button type='submit'>{t("FIND ROOM")}</button>
              </div>
            </div>
           </form>
        </div>
      </div>
      
      <div className={s.about}>
        <div className={s.home_about}>
          <h2>{t("About us")} <h2>.</h2></h2>
          <div className={s.main_container}>
            <div className={s.main_text}>
              <span>{t("Navruz Hotel Tashkent")}</span>
              <p>{t("Navruz Hotel Tashkent is a cozy, comfortable hotel with high-class service 24/7 and an excellent location in the business center of the city with developed infrastructure.")}</p>
              <p>{t("The hotel offers 128 comfortable and well-equipped rooms of various categories. All hotel rooms are equipped with air conditioning, refrigerator, safety box, smart TV with satellite channels, Wi-Fi and toiletries.")}</p>
              <p>{t("Hotel guests have access to spacious conference rooms, a restaurant, a bar, a gym, billiards, a sauna, an outdoor swimming pool, a cozy courtyard with gazebos and free bicycle rental. Airport transfers and room service are available.")}</p>
              <p>{t("The reception is open 24 hours a day.")}</p>
              <div className={s.more}><a className={s.ah} href="/about">{t("Learn more")} <BsArrowRight className={s.right}/></a></div>
            </div>
            <div className={s.main_img}>
              <img src="https://navruzhotel.uz/_nuxt/img/about-bg.57c329c.png" alt="a" />
            </div>
          </div>
          <div className={s.card}>
            <div className={s.set}>
              <img src="https://navruzhotel.uz/_nuxt/img/medal.bde7ded.svg" alt="" />
              <span>{t("Affordable room price")}</span>
            </div>
            <div className={s.set}>
              <img src="https://navruzhotel.uz/_nuxt/img/snow.7c72b49.svg" alt="" />
              <span>{t("Green area to relax")}</span>
            </div>
            <div className={s.set}>
              <img src="https://navruzhotel.uz/_nuxt/img/wifi.cbdbbea.svg" alt="" />
              <span>{t("Free Wi-Fi")}</span>
            </div>
            <div className={s.set}>
              <img src="https://navruzhotel.uz/_nuxt/img/bonfire.5cef29a.svg" alt="" />
              <span>{t("Competent staff 24/7")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.rooms_container}>
        <div className={s.rooms}>
          <h2>{t("Rooms")}<h2>.</h2></h2>
          <div className={s.row}>
            <div className={s.cursor}>
              <img src="https://navruzhotel.uz/_nuxt/img/twin-room.e166ff0.png" alt="" />
              <h3 className={s.hov}>{t("Standart Twin")} <h3 className={s.second}>.</h3></h3>
            </div>
            <div className={s.cursor}>
              <img src="https://navruzhotel.uz/_nuxt/img/king-room.b252916.png" alt="" />
              <h3 className={s.hov}>{t("Standart King")} <h3 className={s.second}>.</h3></h3>
            </div>
            <div className={s.cursor}>
              <img src="https://navruzhotel.uz/_nuxt/img/suite-room.01e2e1a.png" alt="" />
              <h3 className={s.hov}>{t("Suite")} <h3 className={s.second}>.</h3></h3>
            </div>
            <div className={s.cursor}>
              <img src="https://navruzhotel.uz/_nuxt/img/econom-room.4a937ff.png" alt="" />
              <h3 className={s.hov}>{t("Econom Standart")} <h3 className={s.second}>.</h3></h3>
            </div> 
            <div className={s.cursor}>
              <img src="https://navruzhotel.uz/_nuxt/img/superior-room.ed75c91.png" alt="" />
              <h3 className={s.hov}>{t("Superior King")} <h3 className={s.second}>.</h3></h3>
            </div>
          </div>
        </div>
      </div>
      <div className={s.facilities_container}>
        <div className={s.facilities}>
          <h2>{t("Facilities ")}<h2>.</h2></h2>
          <div className={s.item_container}>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/restoran1.3096ed8.jpg" alt="" />
              <span>{t("Restaurant")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/bar13.c55439e.jpg" alt="" />
              <span>{t("Bar")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/conference2.c46191e.jpg" alt="" />
              <span>{t("Conference rooms")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/pool1.2f02c34.jpg" alt="" />
              <span>{t("Swimming pool")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/gym1.77c1917.jpg" alt="" />
              <span>{t("Gym")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/billiard1.e9196d7.jpg" alt="" />
              <span>{t("Billiard room")}</span>
            </div>
          </div>
          <button id={s.fac_btn}><a href="/facilities">{t("More")}</a></button>
        </div>
      </div>
      <footer>
        <div className={s.card_map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.819353247629!2d69.28727522870963!3d41.33454138105029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf49b954dd3%3A0x8b6b32b227cbe29e!2sNavruz%20Hotel%20Tashkent!5e0!3m2!1sru!2s!4v1712723592585!5m2!1sru!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className={s.credent_container}>
          <div className={s.credent}>
            <span>© 2018—2024 Navruz hotel</span>
            <div className={s.span}>
              <span>{t("Developed by")} <a href="https://www.linkedin.com/in/ildar-anikin-a301b2198/">{t("an.ildar")}</a></span>
              <span>{t("Designed by")} <a href="https://kwork.ru/user/zednight13">{t("zednight")}</a></span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
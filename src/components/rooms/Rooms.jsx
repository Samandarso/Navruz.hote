import React from 'react'
import s from './Rooms.module.css'
import King from '../../flickity/roomsCarusel/king/King'
import { useTranslation } from "react-i18next";
import { FaUser } from 'react-icons/fa';
import Standart from '../../flickity/roomsCarusel/standart/Standart';
import Suite from '../../flickity/roomsCarusel/suite/Suite';
import Econom from '../../flickity/roomsCarusel/econom/Econom';
import Superior from '../../flickity/roomsCarusel/superior/Superior';

const Rooms = () => {

  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.contact_container}>
        <div className={s.contact}>
          <img src="	https://navruzhotel.uz/_nuxt/img/logo.4e3f64a.svg" alt="s" />
          <p>+998-78-150-10-90</p>
        </div>
      </div>
      <div className={s.back}></div>
      <div className={s.rooms_container}>
        <div className={s.rooms}>
          <h1>{t("Rooms")}</h1>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Standart King")}</h2>
              <p>{t("All rooms of this category are equipped with a comfortable king-size bed, smart TV, telephone, mini fridge, safe, wardrobe, separate work area and individual disposable accessories. The total area of the room is 20 sq.m. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.")}</p>
              <King/>
              <button className={s.btn}>{t("Book")}</button>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Standard Twin")}</h2>
              <p>{t("Room with two single beds, which has air conditioning, TV, mini fridge, telephone, safe and bathroom with shower. Beds with modern orthopedic mattresses. The total area of the room is 20 sq.m. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.")}</p>
              <Standart/>
              <button className={s.btn}>{t("Book")}</button>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Suite")}</h2>
              <p>{t("Two-room suite with a comfortable bedroom with a king-size bed, where you can relax after a working day and a living room-study, for business meetings or midday rest. The total area of the room is 40 sq.m. Private bathroom with all the necessary individual accessories. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.")}</p>
              <Suite/>
              <button className={s.btn}>{t("Book")}</button>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Econom Room")}</h2>
              <p>{t("Economy rooms combine compactness and the necessary level of convenience. The total area of the room is 12 sq.m. The room has a bed with an orthopedic mattress, comfortable furniture, TV, air conditioning, telephone and mini fridge. A secure safe is also installed in the room to keep your personal belongings. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.")}</p>
              <Econom/>
              <button className={s.btn}>{t("Book")}</button>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Superior King room")}</h2>
              <p>{t("Spacious room with a comfortable king-size bed, smart TV, telephone, mini fridge, safe, wardrobe, separate work area and individual disposable accessories. The total area of the room is 25 sq.m. The room rate includes breakfast, mini bar with soft drinks, gym and outdoor pool.")}</p>
              <Superior/>
              <button className={s.btn}>{t("Book")}</button>
            </div>
          </div>
          <div className={s.search}>
            <div className={s.wraper}>
              <div className={s.top_block}>
                <h2>{t("Book online")}</h2>
                <span>{t("Guaranteed accommodation")}</span>
              </div>
              <div className={s.main_block}>
                <div className={s.date}>
                  <div className={s.date_span}>
                    <span>{t("Check-in")}</span>
                    <p>{t("14/04/2024")}</p>
                  </div>
                  <p>🗓️</p>
                </div>
                <div className={s.date}>
                  <div className={s.date_span}>
                    <span>{t("Check-out")}</span>
                    <p>{t("15/04/2024")}</p>
                  </div>
                  <p>🗓️</p>
                </div>
                <div className={s.date}>
                  <div className={s.date_span}>
                    <span>{t("Guests")}</span>
                    <p>{t("2 adults, 0 children")}</p>
                  </div>
                  <FaUser className={s.usr} />
                </div>
                <button>{t("FIND ROOM")}</button>
              </div>
            </div>
          </div>
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

export default Rooms
import React from 'react'
import s from './About.module.css'
import { FaUser } from 'react-icons/fa'
import { useTranslation } from "react-i18next";

const About = () => {

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
      <div className={s.about_container}>
        <div className={s.about}>
          <h2>{t("About us")}</h2>
          <p><span>{t("Cozy and comfortable Navruz Hotel Tashkent")}</span> {t("is located in the city center and first opened its doors to hotel guests in 2018.")}</p>
          <p><span>{("The hotel offers 128 rooms")}</span> {t("of various categories for a comfortable stay, equipped with modern technology. Each room has a smart TV, mini fridge, air conditioning, Wi-Fi and a secure safe.")}</p>
          <p><span>{("A spacious conference room,")}</span> {t("bar, restaurant, gym, billiard room, outdoor pool, sauna and a cozy courtyard are available for the Guests of the hotel.")}</p>
          <h2>{t("Why we are?")}</h2>
          <div className={s.ul}>
            <ul>
              <li><span>{t("Affordable prices")}</span></li>
              <li><span>{t("Online booking management")}</span></li>
              <li><span>{t("Multilingual staff")}</span></li>
              <li><span>{t("Security")}</span></li>
              <li><span>{t("Non-smoking rooms")}</span></li>
            </ul>
            <ul>
              <li><span>{t("Free Wi-Fi")}</span></li>
              <li><span>{t("Airport shuttle")}</span></li>
              <li><span>{t("Family rooms")}</span></li>
              <li><span>{t("Free parking")}</span></li>
              <li><span>{t("24-hour front desk")}</span></li>
            </ul>
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
                  <FaUser className={s.usr}/>
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

export default About
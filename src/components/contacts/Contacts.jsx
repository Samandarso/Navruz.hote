import React from 'react'
import s from './Contacts.module.css'
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaUser } from 'react-icons/fa'
import { LiaTelegramPlane } from 'react-icons/lia';

const Contacts = () => {

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
      <div className={s.contacts_container}>
        <div className={s.contacts}>
          <div className={s.row_container}>
            <h2>{("Contact us")} <h2>.</h2></h2>
            <p>{t("Uzbekistan, Tashkent, Yunusabad district, Shivli street, 6-8, 100084")}</p>
            <p>Tel.: <a href="tel:+998781501090">(+998) 78 150 10 90</a></p>
            <p><a href="mailto:info@navruzhotel.uz">info@navruzhotel.uz</a></p>
            <ul>
              <FaInstagram/>
              <li><FaFacebookF/></li>
              <LiaTelegramPlane/>
            </ul>
            <button>{t("Contact us")}</button>
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

export default Contacts
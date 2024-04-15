import React from 'react'
import s from './Booking.module.css'
import { useTranslation } from "react-i18next";
import { FaPlus } from 'react-icons/fa';

const Booking = () => {

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
      <div className="booking_container">
        <div className={s.booking}>
          <h1>{t("Booking")}</h1>
          <div className={s.tl_container}>
            <div className={s.hnp_nav}>
              <h1>{t("Details of your stay")}</h1>
            </div>
            <div className={s.hcp}>
              <img src="https://w7.pngwing.com/pngs/815/16/png-transparent-england-kingdom-of-great-britain-flag-of-the-united-kingdom-flag-of-great-britain-cyber-nations-wiki-blue-angle-flag.png" alt="" />
              <span>UZS</span>
            </div>
            <div className={s.search_container}>
              <div className={s.search_filter}>
                <div className={s.search_left}>
                  <span>{t("Check-in date")}</span>
                  <div className={s.date}>
                    <span>{t("14 April 2024")}</span>
                    <p>🗓️</p>
                  </div>
                </div>
                <div className={s.search_left}>
                  <span>{t("Check-in date")}</span>
                  <div className={s.date}>
                    <span>{t("14 April 2024")}</span>
                    <p>🗓️</p>
                  </div>
                </div>
              </div>
              <div className={s.search_filter}>
                <div className={s.search_left} id={s.spn}>
                  <span>{t("Stay in room")} <span>{t("Adults aged 4 years ald and older")}</span></span>
                  <div className={s.date}>
                    <span>{t("2 adults")}</span>
                    <p>▼</p>
                  </div>
                  <div className={s.extra}>{t("Extra room")}<FaPlus /> </div>
                </div>
                <div className={s.search_right}>
                  <div className={s.date}>
                    <span>{t("Add a child")}</span>
                    <p>▼</p> 
                  </div>
                </div>
              </div>
            </div>
            <div className={s.search_btn}>
              <span><div></div> {t("I have a promo code")}</span>
              <button>{t("CHECK AVAILITY")}</button>
            </div>
          </div>
          <h2>{t("Check-in rules")}</h2>
          <ul>
            <li>{t(" - Check-in 14:00 Check-out 12:00")}</li>
            <li>{t(" - Early check-in from 06:00 +50% of the room rate")}</li>
            <li>{t(" - Check-in before 06:00 is charged 100% of the room rate")}</li>
            <li>{t(" - Late check-out until 18:00 +50% of the room rate")}</li>
            <li>{t(" - Check-out after 18:00 is charged 100% of the room rate")}</li>
          </ul>
          <h2>{t("Payment")}</h2>
          <p>{t("Uzbek sum")}</p>
          <h2>{t("Cards accepted")}</h2>
          <span>{t("UzCard, Humo, MasterCard, Visa, China Union Pay, Maestro.")}</span>
          <p>{t("Payment in rubles via Paygine")}</p>
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

export default Booking
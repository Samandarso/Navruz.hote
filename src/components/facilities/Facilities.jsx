import React from 'react'
import s from './Facilities.module.css'
import King from '../../flickity/roomsCarusel/king/King'
import { useTranslation } from "react-i18next";
import { FaUser } from 'react-icons/fa';
import Pool from '../../flickity/facilitiesCarusel/pool/Pool';
import Restaurant from '../../flickity/facilitiesCarusel/restaurant/Restaurant';
import Bar from '../../flickity/facilitiesCarusel/bar/Bar';
import Gym from '../../flickity/facilitiesCarusel/gym/Gym';
import Billard from '../../flickity/facilitiesCarusel/billiard/Billiard';
import Terrace from '../../flickity/facilitiesCarusel/terrace/Terrace';
import Sauna from '../../flickity/facilitiesCarusel/sauna/Sauna';
import Massage from '../../flickity/facilitiesCarusel/massage/Massage';
import Service from '../../flickity/facilitiesCarusel/service/Service';


const Facilities = () => {

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
      <div className={s.facilities_container}>
        <div className={s.facilities}>
          <h1>{t("Rooms")}</h1>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Outdoor swimming pool")}</h2>
              <p>{t("During summer, you can take a dip in the outdoor pool or sunbathe on the comfortable sun loungers. The swimming pool is open from 09:00-21:00. Guests can also use the sauna (additional charge).")}</p>
              <Pool/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("A restaurant")}</h2>
              <p>{t("Magnolia Restaurant serves a daily buffet breakfast from 06:30-10:30. The restaurant is also open for business lunches or dinners, family celebrations and other events.")}</p>
              <Restaurant/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Bar")}</h2>
              <p>{t("The cozy Satellite Bar is open 24/7. Here guests can enjoy delicious coffee, a variety of cocktails, as well as snacks or hot meals. It is open 24/7.")}</p>
              <Bar/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Gym")}</h2>
              <p>{t("To keep fit, the hotel has a fitness room. It is open 24/7.")}</p>
              <Gym/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Billiard room")}</h2>
              <p>{t("A billiard room with a large TV will allow guests to while away their free time. It is open 24/7.")}</p>
              <Billard/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Open terrace")}</h2>
              <p>{t("Guests can admire stunning panoramic views of the city from the outdoor terrace on the 6th floor of the hotel. The terrace has comfortable chairs and tables, and you can order food and drinks from the bar.")}</p>
              <Terrace/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Sauna")}</h2>
              <p>{t("The hotel has 2 steam rooms where you can relax and unwind throughout the day (for an additional fee).")}</p>
              <Sauna/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Massage")}</h2>
              <p>{t("In our hotel you can relax in the skillful hands of a professional massage therapist.")}</p>
              <Massage/>
            </div>
          </div>
          <div className={(s.slide_container)}>
            <div className={s.slide}>
              <h2>{t("Room Service")}</h2>
              <p>{t("Room service is available round-the-clock – delivery of food and drinks to your room.")}</p>
              <Service/>
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

export default Facilities
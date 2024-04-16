import React from 'react'
import s from './Menu.module.css'
import { useTranslation } from "react-i18next";

const Menu = () => {

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
          <h2>{t("Menu ")}</h2>
          <div className={s.item_container}>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/salads.51bccc9.jpg" alt="" />
              <span>{t("Salada")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/appetizers.72bfcbe.jpg" alt="" />
              <span>{t("Appetizers")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/soups.4af96d0.jpg" alt="" />
              <span>{t("Soups")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/pasta.7267c8c.jpg" alt="" />
              <span>{t("Pasta")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/plov.c22a71f.jpg" alt="" />
              <span>{t("National Cuisine")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/fish.e880cd2.jpg" alt="" />
              <span>{t("Fish")}</span>
            </div>
            <div className={s.item}>
              <img src="	https://navruzhotel.uz/_nuxt/img/chicken.9830dc1.jpg" alt="" />
              <span>{t("Meat and Poultry Dishes")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/steak.0f02f76.jpg" alt="" />
              <span>{t("Marbled meat")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/rice.fa2f3c9.jpg" alt="" />
              <span>{t("Side dishes")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/pizza.9e81384.jpg" alt="" />
              <span>{t("Pizza / Burgers")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/desert.d51a645.jpg" alt="" />
              <span>{t("Desserts")}</span>
            </div>
          </div>
          <h1 className={s.bar}>{t("Bar card")}</h1>
          <div className={s.item_container}>
            <div className={s.item}>
              <img src="	https://navruzhotel.uz/_nuxt/img/hotDrinks.dc6691e.jpg" alt="" />
              <span>{t("Tea / Coffee")}</span>
            </div>
            <div className={s.item}>
              <img src="	https://navruzhotel.uz/_nuxt/img/iceDrinks.efcb93c.jpg" alt="" />
              <span>{t("Soft drinks")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/smoothie.1611c83.jpg" alt="" />
              <span>{t("Smoothies")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/fresh.ceb15a7.jpg" alt="" />
              <span>{t("Fresh juice")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/milkShakes.de964ef.jpg" alt="" />
              <span>{t("Milkshakes")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/vine_glass.b8847a8.jpg" alt="" />
              <span>{t("Wine by the Glass")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/vine_bottle.7c07f6c.jpg" alt="" />
              <span>{t("Wine 0.75ml")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/heavyalc.8213d4e.jpg" alt="" />
              <span>{t("Strong Drinks")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/vermutes.00b2007.jpg" alt="" />
              <span>{t("Vermouth / Liqueur / Bitters")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/bear.330f5c4.jpg" alt="" />
              <span>{t("Beer")}</span>
            </div>
            <div className={s.item}>
              <img src="https://navruzhotel.uz/_nuxt/img/coctails.81693e1.jpg" alt="" />
              <span>{t("Alcoholic Cocktails")}</span>
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

export default Menu
import React from 'react'
import { Link } from 'react-router-dom' 
import s from './Navbar.module.css'
import { useTranslation } from "react-i18next";
import { useState } from 'react';

const Navbar = () => {

    const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    console.log(lng);
    localStorage.setItem('selectedLanguage', lng)    
  }

  return (
    <div className={s.container}>
        <ul>
            <li>
                <Link  className={s.link} id='li' to ="/">{t("Home")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/booking">{t("Booking")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/about">{t("About us")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/rooms">{t("Rooms")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/facilities">{t("Facilities")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/blog">{t("Blog")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/contacts">{t("Contacts")}</Link>
            </li>
            <li>
                <Link className={s.link} id='li' to ="/menu">{t("Menu")}</Link>
            </li>
            <li>
                <select onChange={(e) => changeLanguage(e.target.value)} value={selectedLanguage}>
                    <option value="ru">🏴RU</option>
                    <option value="uz">🏳️UZ</option>
                    <option value="en">🏴EN</option>
                </select>
            </li>
        </ul>
    </div>
  )
}

export default Navbar
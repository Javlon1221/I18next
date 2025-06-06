import React from 'react';
import './header.css';
import Logo from '../../assets/logo.svg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLangChange = (e) => {
    i18n.changeLanguage(e.target.value); // Tilni o'zgartirish
  };

  return (
    <nav className='navbar'>
      <img src={Logo} alt="logo" className="logo" />
      <ul className="navbar_ul">
        <li><a href="#" className="navbar_link">{t('Navbar.ul.about')}</a></li>
        <li><a href="#" className="navbar_link">{t('Navbar.ul.advantages')}</a></li>
        <li><a href="#" className="navbar_link">{t('Navbar.ul.class')}</a></li>
        <li><a href="#" className="navbar_link">{t('Navbar.ul.contact')}</a></li>
      </ul>
      <button className='navbar_btn'>
        <span>{t('Navbar.button.boglanish')}</span>
      </button>
      <div className='menucha'>
        <select className='select' onChange={handleLangChange} defaultValue={i18n.language}>
          <option value="ru">Ru</option>
          <option value="eng">En</option>
          <option value="uz">Uz</option>
        </select>
      </div>
    </nav>
  );
};

export default Header;

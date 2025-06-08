import React from 'react';
import './hero.css';
import heroImg from '../../photos/ребенок.svg';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className='orqafon'>
      <div className="container">
        <div className="hero">
          <div className="hero_title">
            <div className="hero_text">
              <h2 className="hero_h2">
                The Best Future Stars <span>{t("Hero.title")}</span>
              </h2>
              <p className='hero_psan'>{t("Hero.text")}</p>
            </div>
            <div className="hero_button">
              <button className='buttonsd button1'>{t("Hero.qongiroq")}</button>
              <button className='buttonsd button2'>{t("Hero.malumot")}</button>
            </div>
          </div>
          <img className='hero_imgsan' src={heroImg} alt="child illustration" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import './contact.css';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="contact">
        <div className='kon'>
          <h1>{t('Kontaktlar.contact')}</h1>
          <ul className='contactUl'>
            <li>{t('Kontaktlar.manzil')}</li>
            <li>{t('Kontaktlar.raqam')}</li>
            <li>{t('Kontaktlar.raqam2')}</li>
          </ul>
          <div className='contact_img'></div>
        </div>

        <div className='bizbilan'>
          <h1>{t('Komentlar.qoldirish')}</h1>
          <p>{t('Komentlar.text')}</p>
          <form className='contactForm' action="">
            <input className='form1' type="text" placeholder={t('Komentlar.ism')} />
            <input className='form1' type="text" placeholder={t('Komentlar.familiya')} />
            <input className='form2' type="text" placeholder={t('Komentlar.raqam')} />
            <button>{t('Komentlar.button')}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

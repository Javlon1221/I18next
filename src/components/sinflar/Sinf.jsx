import React from 'react';
import './sinf.css';
import { useTranslation } from 'react-i18next';

const sinfKeys = ['sinf1', 'sinf2', 'sinf3', 'sinf4', 'sinf5'];

const Sinf = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      {/* Sarlavha */}
      <h2 className='sinfsan'>{t('Classes')}</h2>

      {/* Sinflar */}
      <div className="sinflarCard">
        {sinfKeys.map((key, index) => {
          const data = t(`Sinflar.${key}`, { returnObjects: true });

          return (
            <div key={index} className="sinfkarta">
              <div className="sinfImg">
                <img src={data.picture} alt={data.title} />
              </div>
              <div className="sinfkarta_title">
                <h3>{data.title}</h3>
                <span>{data.yosh}</span>
                <p>{data.info}</p>
                <button>{data.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sinf;

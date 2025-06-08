import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.css'

import user1 from'./photo/user1.svg'

const Bizningustunligimiz = () => {
  const { t } = useTranslation();

  const advantageKeys = ['user1', 'user2', 'user3', 'users4', 'user5']; 
  
  return (
    <div className='ustunlik'>
      <h1 className="bizningustunligimiz">{t('Bizningustunligimiz')}</h1>

      <div className='Ustunliklar'>
        {advantageKeys.map((key, index) => {
          const data = t(`Ustunliklar.${key}`, { returnObjects: true });
          console.log(data.picture);

          return (
            <div key={index} className={`sad ustunliklar_card${index + 1}`}>
              <img src={data.picture} alt={data.title} />
              <div>
                <h3>{data.title}</h3>
                <p>{data.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bizningustunligimiz;

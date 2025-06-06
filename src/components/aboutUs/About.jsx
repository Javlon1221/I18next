import React from 'react'
import MarkGroup from '../../../src/photo/MaskGroup.svg'
import './about.css'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <div className="container">
      <div className="about">
        <img src={MarkGroup} alt="About us" />
        <div className="about_title">
          <h2>{t("About.aboutUs")}</h2>
          <p>
            {t("About.title").split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

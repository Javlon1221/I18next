import React from 'react'
import './i18n';
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero';
import About from './components/aboutUs/About';
import Bizningustunligimiz from './Bizningustunligimiz/Bizningustunligimiz';


const App = () => {
  return (
    <>
      <div className='header'>
        <div className="container">
          <Header/>
        </div>
      </div>
          <Hero/>
          <About/>
      <div className='phone'>
        <Bizningustunligimiz/>
      </div>
    </>
  )
}

export default App
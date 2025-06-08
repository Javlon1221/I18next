import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
        <div className="container">
            <div className="contact">
                <div className='kon'>
                    <h1>Контакты </h1>
                    <ul className='contactUl'>
                        <li>г.Ташкент, Чиланзар 16-й квартал, ул. Ботирма</li>
                        <li>+998970020771</li>
                        <li>+998971970771 (Пн.-Пт. с 09:00 до 17:00)</li>
                    </ul>
                    <div className='contact_img'></div>
                </div>
            
            <div className='bizbilan'>
                <h1>Оставьте заявку</h1>
                <p>В честь открытия нашей школы дарим скидку -20%</p>
                <form className='contactForm' action="">
                    <input className='form1' type="text" placeholder='Имя'/>
                    <input className='form1' type="text" placeholder='Фамилия'/>
                    <input className='form2' type="text" placeholder='Номер'/>
                    <button>Отправить</button>
                </form>
            </div>
            </div>
        </div>      
    </>
  )
}

export default Contact

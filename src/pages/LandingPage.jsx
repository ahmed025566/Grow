import React, {useState, useRef, useEffect } from 'react'
import Login from './Login'
import Registration from './Registration'
import landingPhoto from '../../assets/landingPage.jpg'

const LandingPage = () => {
  const [login, setLogin] = useState(true)

  const toggle = useRef()
  const welcome = useRef()
  const width = window.innerWidth
  useEffect(() => {
    if (window.innerWidth <= 600 && toggle.current) {
      toggle.current.style.top = '570px';
      welcome.current.style.fontSize = '60px'
    } else if (window.innerWidth >= 600 && toggle.current) {
      toggle.current.style.top = '450px';
    }
  }, [width]);
  
  

  return (
    <div>
      <img src={landingPhoto} alt="landing page cover photo" className='landingPhoto' />
      <h1 className='logo'>Grow</h1>
      <h2 className='greeting' style={{left: login ? 160 : 190}} >{login ? 'Good to see you again' : 'Nice to meet you'}</h2>
      <h1 className='welcome' ref={welcome} style={{left: login ? 120 : 155, fontSize: login ? 65 : 75}} >{login ? 'Welcome Back' : 'Welcome'}</h1>
      <div className='border-bottom' style={{left: login ? 290 : 280}} ></div>
      <button type='button' ref={toggle} id="toggle" className='toggleLogin' onClick={() => {setLogin(!login)}} style={{background: 'lightgray', top: login ? 450 : 500}}>{login ? 'Register' : 'Login'}</button>
      {login ? <Login /> : <Registration />}
    </div>
  )
}

export default LandingPage
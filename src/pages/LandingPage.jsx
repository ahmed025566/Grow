import React, {useState} from 'react'
import Login from './Login'
import Registration from './Registration'
import landingPhoto from '../../assets/landingPage.jpg'

const LandingPage = () => {
  const [login, setLogin] = useState(true)

  return (
    <div>
      <img src={landingPhoto} alt="landing page cover photo" className='landingPhoto' />
      <h1 className='logo'>Grow</h1>
      <h2 className='greeting' style={{left: login ? 160 : 190}} >{login ? 'Good to see you again' : 'Nice to meet you'}</h2>
      <h1 className='welcome' style={{left: login ? 120 : 155, fontSize: login ? 65 : 75}} >{login ? 'Welcome Back' : 'Welcome'}</h1>
      <div className='border-bottom' style={{left: login ? 290 : 280}} ></div>
      <button type='button' className='toggleLogin' onClick={() => {setLogin(!login)}} style={{background: 'lightgray', top: login ? 450 : 500}}>{login ? 'Register' : 'Login'}</button>
      {login ? <Login /> : <Registration />}
    </div>
  )
}

export default LandingPage
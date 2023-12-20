import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/user/userSlice';

const Registration = () => {

  const email = useRef();
  const password = useRef();
  const passwordConfirm = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({
      user: {
        email: email.current.value,
        password: password.current.value,
        password_confirmation : passwordConfirm.current.value
      },
    }));
  };

  const { wrongData } = useSelector((state) => state.user);
  
  
  return (
    <div className='login'>
      <h2 className='loginHeader'>Create New Account</h2>
      <form className='form' id='register' onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='email@example.com' className='email' ref={email} />
        <input type="password" name='password' placeholder='your password' className='password' ref={password} />
        <input type="password" name='passwordConfirmation' placeholder='confirm your password' className='password' ref={passwordConfirm} />
        {wrongData.length > 0 ? wrongData.map((item, index) => (<p key={index} className='wrongData'>{item}</p>)) : ''}
        
        <button type="submit" className='loginButton' style={{background: '#497cf3'}}>Register</button>
      </form>
    </div>
  )
}

export default Registration
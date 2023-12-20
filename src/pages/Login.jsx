import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/user/userSlice';

const Login = () => {

  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
      user: {
        email: email.current.value,
        password: password.current.value,
      },
    }));
  };

  const { wrongData } = useSelector((state) => state.user);

  
  return (
    <div className='login'>
      <h2 className='loginHeader'>Login Account</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder='email@example.com' className='email' ref={email} />
        <input type="password" name='password' placeholder='your password' className='password' ref={password} />
        <p className='wrongData'>{wrongData}</p>
        <button type="submit" className='loginButton' style={{background: '#497cf3'}}>Login</button>
      </form>
    </div>
  )
}

export default Login
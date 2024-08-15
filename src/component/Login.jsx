import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
// import { login } from '../Service/Api';

const LoginForm = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleRegistrationClick = () => {
    navigate('/register');
  };

  return (
    <div className='hero'>
      <div className='form-box'>
        <div className='button-box'>
          <div
            className='btn'
            style={{ left: isRegister ? '110px' : '0' }}
          ></div>
          <button
            type='button'
            className='toggle-btn'
            onClick={toggleForm}
          >
            Login
          </button>
          <button
            type='button'
            className='toggle-btn'
            onClick={toggleForm}
          >
            Register
          </button>
        </div>
        <form
          className={`input-group ${isRegister ? 'move-right' : ''}`}
        >
          {!isRegister && (
            <>
              <input
                type='text'
                className='input-field'
                placeholder='Enter your Username'
                required
                name='email'
                onChange={handleInputChange}
              />
              <input
                type='password'
                className='input-field'
                placeholder='Enter your Password'
                required
                name='password'
                onChange={handleInputChange}
              />
              <input type='checkbox' />
              <span>Remember Password</span>
            </>
          )}

          {isRegister && (
            <>
              <input
                type='text'
                className='input-field'
                placeholder='Enter your Email'
                required
                name='email'
                onChange={handleInputChange}
              />
              <input
                type='password'
                className='input-field'
                placeholder='Enter your Password'
                required
                name='password'
                onChange={handleInputChange}
              />
              <input
                type='password'
                className='input-field'
                placeholder='Confirm your Password'
                required
              />
            </>
          )}

          <button type='submit' className='submit-btn'>
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import './form.css';

const RegisterForm = ({ toggleForm }) => {
  const [registerDetails, setRegisterDetails] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Registration logic here
  };

  return (
    <form onSubmit={handleRegister} className='input-group'>
      <input
        type='text'
        className='input-field'
        placeholder='Enter your Email'
        name='email'
        value={registerDetails.email}
        onChange={handleInputChange}
        required
      />
      <input
        type='password'
        className='input-field'
        placeholder='Enter your Password'
        name='password'
        value={registerDetails.password}
        onChange={handleInputChange}
        required
      />
      <input
        type='password'
        className='input-field'
        placeholder='Confirm your Password'
        name='confirmPassword'
        value={registerDetails.confirmPassword}
        onChange={handleInputChange}
        required
      />
      <button type='submit' className='submit-btn'>
        Register
      </button>
    </form>
  );
};

export default RegisterForm;

import React, { useRef } from 'react';
import {
  UserOutlined,
  LockOutlined,
  SwapRightOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

export default function SigninForm({ login, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className='signin-wrapper'>
      <h2>
        How do you feel today?
        <span role='img' aria-label='이모지' className='imo'>
          &#128578;
        </span>
      </h2>
      <div className='signin-form'>
        <div className='left'>
          <label>
            <input type='text' ref={emailRef} placeholder='email' />
            <UserOutlined />
          </label>
          <label>
            <input type='password' ref={passwordRef} placeholder='password' />
            <LockOutlined />
          </label>
        </div>
        <div className='right'>
          <button onClick={click}>
            {loading ? (
              <LoadingOutlined />
            ) : (
              <span>
                Sign In <SwapRightOutlined />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
  function click() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === '' || password === '') return;
    login(email, password);
  }
}

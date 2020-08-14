import React, { useRef } from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function SigninForm({ login, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div className='signin-form'>
      <h2>
        How do you feel today?
        <span role='img' aria-label='이모지' className='imo'>
          &#128578;
        </span>
      </h2>
      <div className='left'></div>
      <div className='right'>
        <label>
          <input type='text' ref={emailRef} placeholder='이메일 입력' />
          <UserOutlined />
        </label>
        <label>
          <input
            type='password'
            ref={passwordRef}
            placeholder='비밀번호 입력'
          />
          <LockOutlined />
        </label>
        {loading && <p>로딩 중</p>}
        <button onClick={click}>Sign In</button>
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

import React, { useRef } from 'react';

export default function SigninForm({ login, loading }) {
  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <div>
      <label>
        <input type='text' ref={emailRef} placeholder='이메일 입력' />
      </label>
      <label>
        <input type='password' ref={passwordRef} placeholder='비밀번호 입력' />
      </label>
      {loading && <p>로딩 중</p>}
      <button onClick={click}>Sign In</button>
    </div>
  );
  function click() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email === '' || password === '') return;
    login(email, password);
  }
}

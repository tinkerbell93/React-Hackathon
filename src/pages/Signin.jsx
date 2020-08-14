import React from 'react';
import SigninFormContainer from '../containers/SigninFormContainer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Signin() {
  const token = useSelector((state) => state.auth.token);
  if (token !== null) {
    return <Redirect to='/' />;
  }
  return (
    <div>
      <h1>로그인</h1>
      <SigninFormContainer />
    </div>
  );
}

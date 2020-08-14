import React from 'react';
import '../css/signin.scss';
import SigninFormContainer from '../containers/SigninFormContainer';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function Signin() {
  const token = useSelector((state) => state.auth.token);
  if (token !== null) {
    return <Redirect to='/' />;
  }
  return (
    <div className='signin'>
      <h1 className='a11y-hidden'>Sign in</h1>
      <SigninFormContainer />
    </div>
  );
}

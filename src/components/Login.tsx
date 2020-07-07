import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app, googleAuthProvider, facebookAuthProvider } from 'firebase/config';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [googleAuthProvider, facebookAuthProvider],
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
};

const Login = () => (
  <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
);

export default Login;

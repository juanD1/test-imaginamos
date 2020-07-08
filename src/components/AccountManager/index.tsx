import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app, googleAuthProvider, facebookAuthProvider } from 'firebase/config';
import { CurrentUser } from 'context/AuthContext';
import InformactionAccount from './InformactionAccount';
import { Wrapper } from './InformactionAccount/styles';

type Props = {
  showAuth: boolean;
  setShowAccountManager(value: boolean): void;
  user: CurrentUser;
};

const AccountManager = ({ user, showAuth, setShowAccountManager }: Props) => {
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [googleAuthProvider, facebookAuthProvider],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        setShowAccountManager(false);
        return false;
      },
    },
  };

  const signOut = () => {
    app.auth().signOut();
    setShowAccountManager(false);
  };

  return (
    <>
      {user && showAuth ? (
        <InformactionAccount user={user} signOut={signOut} />
      ) : (
        <Wrapper>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
        </Wrapper>
      )}
    </>
  );
};

export default AccountManager;

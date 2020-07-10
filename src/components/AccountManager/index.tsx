import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app, googleAuthProvider, facebookAuthProvider } from 'firebase/config';
import { CurrentUser } from 'types/users';
import InformactionAccount from './InformationAccount';
import { Wrapper } from './InformationAccount/styles';

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
        <Wrapper style={{ zIndex: 1 }}>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
        </Wrapper>
      )}
    </>
  );
};

export default AccountManager;

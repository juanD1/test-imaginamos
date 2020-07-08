import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { app, googleAuthProvider, facebookAuthProvider } from 'firebase/config';
import { CurrentUser } from 'context/AuthContext';

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
    <div style={{ width: 300, height: 300, backgroundColor: 'gray' }}>
      {user && showAuth ? (
        <>
          <img className="rounded-circle" src={user.photoURL} alt="user" />
          <span>{user.displayName}</span>
          <span>{user.email}</span>
          <button type="button" className="btn btn-light" onClick={signOut}>
            Sign Out
          </button>
        </>
      ) : (
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
      )}
    </div>
  );
};

export default AccountManager;

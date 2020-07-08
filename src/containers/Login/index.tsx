import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import AccountManager from 'components/AccountManager';
import unauthUser from 'assets/icons/747376.svg';
import { Img } from './styles';

const Login = () => {
  const user = useContext(AuthContext);
  const [showAccountManager, setShowAccountManager] = useState<boolean>(false);

  return (
    <>
      <Img
        className={user && 'rounded-circle'}
        src={!user ? unauthUser : user.photoURL}
        alt="icon-unauthenticated-user"
        currentUser={!!user}
        onClick={() => setShowAccountManager(!showAccountManager)}
      />
      {showAccountManager && (
        <AccountManager
          user={user}
          showAuth={showAccountManager}
          setShowAccountManager={setShowAccountManager}
        />
      )}
    </>
  );
};

export default Login;

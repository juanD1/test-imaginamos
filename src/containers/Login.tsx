import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import AccountManager from 'components/AccountManager';
import unauthUser from 'assets/icons/747376.svg';

const Login = () => {
  const user = useContext(AuthContext);
  const [showAccountManager, setShowAccountManager] = useState<boolean>(false);

  return (
    <>
      <img
        className="rounded-circle"
        style={{ width: 40, height: 40, backgroundColor: 'gray' }}
        src={!user ? unauthUser : user.photoURL}
        alt="icon-unauthenticated-user"
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

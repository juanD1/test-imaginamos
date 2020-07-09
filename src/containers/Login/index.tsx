import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import AccountManager from 'components/AccountManager';
import unauthUser from 'assets/icons/747376.svg';
import { Img } from 'styles/globalStyles';

const Login = () => {
  const user = useContext(AuthContext);
  const [showAccountManager, setShowAccountManager] = useState<boolean>(false);

  return (
    <>
      <Img
        className={user && 'rounded-circle'}
        src={!user ? unauthUser : user.photoURL}
        alt="icon-unauthenticated-user"
        width={user ? '30px' : '25px'}
        height={user ? '30px' : '25px'}
        margin="5px"
        float="right"
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

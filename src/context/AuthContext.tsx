import React, { createContext, useEffect, useState } from 'react';
import { app } from 'firebase/config';
import { GlobalProps } from 'types/globalTypes';
import { CurrentUser, FirebaseUser } from 'types/users';

const initialValue: CurrentUser = {
  displayName: 'dummy',
  photoURL: 'dummy',
  email: 'dummy',
};

const AuthContext = createContext(initialValue);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: GlobalProps) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | any>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <Provider value={currentUser}>{children}</Provider>;
};

export { AuthContext, AuthProvider };

import React, { createContext, useEffect, useState } from 'react';
import { app } from 'firebase/config';
import { CurrentUser, FirebaseUser } from 'types/users';

export type Props = {
  children: JSX.Element;
};

const initialValue: CurrentUser = {
  displayName: 'dummy',
  photoURL: 'dummy',
  email: 'dummy',
};

const AuthContext = createContext(initialValue);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | any>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <Provider value={currentUser}>{children}</Provider>;
};

export { AuthContext, AuthProvider };

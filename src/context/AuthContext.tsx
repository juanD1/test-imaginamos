import React, { createContext, useEffect, useState } from 'react';
import { app } from 'firebase/config';
import { User as FirebaseUser } from 'firebase/types';
import { GlobalProps } from 'types/globalTypes';

export type CurrentUser = {
  displayName: string;
  photoURL: string;
  email: string;
};

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

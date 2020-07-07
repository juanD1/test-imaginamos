import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { app } from 'firebase/config';
import { User as FirebaseUser } from 'firebase/types';

type Props = {
  children: ReactNode;
};

const AuthContext = createContext(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | any>(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return <Provider value={currentUser}>{children}</Provider>;
};

export { AuthContext, AuthProvider };

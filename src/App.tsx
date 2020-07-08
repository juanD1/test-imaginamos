import React from 'react';
import { AuthProvider } from 'context/AuthContext';
import Home from 'containers/Home';

const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;

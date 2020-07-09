import React from 'react';
import { AuthProvider } from 'context/AuthContext';
import Home from 'routes/Home';

const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;

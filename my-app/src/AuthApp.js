import { useState, createContext, useContext } from "react";

const AuthContext = createContext(false);

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

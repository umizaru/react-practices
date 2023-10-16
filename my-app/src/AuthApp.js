import { useState, createContext, useContext } from "react";

const AuthContext = createContext(false);

export function AuthProvider({ children }) {
  const [loggedIn, SetLogIn] = useState(false);
  const logIn = () => SetLogIn(true);
  const logOut = () => SetLogIn(false);

  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

// Contextをインポート、コンテクストを作成
import { useState, createContext, useContext } from "react";
const AuthContext = createContext(null);

// コンテクストプロバイダーコンポーネントを作成
export function AuthProvider({ children }) {
  const [logIn, SetLogIn] = useState(false);

  function logInAuth() {
    const logIn = () => SetLogIn(true);
    const logOut = () => SetLogIn(false);
  }

  return (
    <AuthContext.Provider value={{ logIn, SetLogIn }}>
      {children};
    </AuthContext.Provider>
  );
}

// useContextを使うためのカスタムフックを作成してエクスポート
export function useAuthContext() {
  return useContext(AuthContext);
}

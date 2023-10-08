// Contextをインポート、コンテクストを作成
import { useState, createContext, useContext } from "react";
const AuthContext = createContext(false);

// コンテクストプロバイダーコンポーネントを作成
export function AuthProvider({ children }) {
  const [loggedIn, SetLogIn] = useState(false);
  const logIn = () => SetLogIn(true);
  const logOut = () => SetLogIn(false);

  // Providerで下位のコンポーネントに値を提供（指定）
  return (
    <AuthContext.Provider value={{ loggedIn, logIn, logOut }}>
      {children};
    </AuthContext.Provider>
  );
}

// useContextを使うためのカスタムフックを作成してエクスポート
export function useAuthContext() {
  return useContext(AuthContext);
}

import React, { createContext, useCallback, useContext, useState } from "react";

const STORAGE_KEY = "travellers_auth";

const readStoredSession = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { user: null, token: null };
  } catch {
    return { user: null, token: null };
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(readStoredSession);

  const login = useCallback((profile, token) => {
    const nextSession = { user: profile, token };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
    } catch {
      // localStorage unavailable (e.g. private browsing) — session just won't persist across reloads
    }
    setSession(nextSession);
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setSession({ user: null, token: null });
  }, []);

  return (
    <AuthContext.Provider value={{ user: session.user, token: session.token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export default useAuth;

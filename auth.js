import React, { useState, useEffect, useContext, createContext } from "react";

import nookies from "nookies";
import { firebase } from "./firebaseClient";
import "firebase/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        setIsLoading(false);
        nookies.set(undefined, "token", "", {});
        return false;
      }
      const token = await user.getIdToken();
      setUser(user);
      setIsLoading(false);

      nookies.set(undefined, "token", token, {});
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: user, isLoading: isLoading, setIsLoading: setIsLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

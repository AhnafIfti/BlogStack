import { createContext, useContext, useState, useEffect } from "react";
import { checkAuth } from "./axios-utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggedInUser, setUser] = useState(null);
  const [trigger, setTrigger] = useState(false);

  const checkSession = async () => {
    try {
      const result = await checkAuth();
      setIsAuthenticated(result.success);
      setUser(result.user || null);
    } catch (err) {
      console.log(err);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    checkSession();
  }, [trigger]);

  const authUpdate = (user) => {
    setIsAuthenticated(!!user);
    setUser(user);
    setTrigger(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loggedInUser,
        authUpdate: (user) => authUpdate(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

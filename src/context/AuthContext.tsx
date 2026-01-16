import React, { createContext, useState, useEffect, useContext } from 'react';
import Backendless from 'backendless';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        // First check if the user-token is still valid
        const isValid = await Backendless.UserService.isValidLogin();

        if (isValid) {
          // Force fetch the full user object to ensure objectId is present
          const currentUser = await Backendless.UserService.getCurrentUser();
          setUser(currentUser);
        }
      } catch (err) {
        console.log("Session expired or invalid");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const logout = async () => {
    await Backendless.UserService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
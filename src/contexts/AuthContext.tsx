import React, { createContext, useState, useContext, ReactNode } from "react";

// Tipagem do Context
interface AuthContextType {
  isLoggedIn: boolean;
  toggleLogin: () => void;
  setLoggedInTrue: () => void;
  setLoggedInFalse: () => void;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider que gerencia o estado
interface AuthProviderProps {
  children: ReactNode;
}


export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
   
  };

  const setLoggedInTrue = () => {
    setIsLoggedIn(true);
  }

  const setLoggedInFalse = () => {
    setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin, setLoggedInTrue, setLoggedInFalse}}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Este hook deve ser utilizado dentro do contexto adequado") ;
  }
  return context;
};

import React, { createContext, useState, useContext, ReactNode } from "react";
import { router } from "expo-router";
import { loginWithFirebase, logoutWithFirebase } from "@/services/authentication.service"
import { Alert } from "react-native";


// Provider que gerencia o estado
interface AuthProviderProps {
  children: ReactNode;
}

interface setLoggedInTrueProps {
  email: string,
  password: string
}

// Tipagem do Context
interface AuthContextType {
  isLoggedIn: boolean;
  toggleLogin: () => void;
  setLoggedInTrue: ({ email, password }: setLoggedInTrueProps) => void;
  setLoggedInFalse: () => void;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authorizationToken, setAuthorizationToken] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const setLoggedInTrue = async ({ email, password }: setLoggedInTrueProps) => {
    try {
      const userToken = await loginWithFirebase({ email, password });
      setAuthorizationToken(userToken);
      setUserEmail(userEmail);
      setIsLoggedIn(true);
      router.navigate('/private');
    } catch (error) {
      Alert.alert('Erro ao realizar o login', 'Houve um erro ao autenticar suas credênciais, verifique se foram digitadas corretamente e tente novamente.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  }

  const setLoggedInFalse = async () => {
    try {
      await logoutWithFirebase();
      setAuthorizationToken('');
      setUserEmail('');
      setIsLoggedIn(false);
      router.navigate('/');
    } catch (error) {
      Alert.alert('Erro ao realizar o logout', 'Houve um erro ao desconectar da plataforma, tente novamente dentro de instantes', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin, setLoggedInTrue, setLoggedInFalse }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Este hook deve ser utilizado dentro do contexto adequado");
  }
  return context;
};

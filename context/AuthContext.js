import { getAuth } from "@firebase/auth";
import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";


const initialContext = {
  user: null,
  setUser: (user) => {},
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialContext.user);


  useEffect(() => {
    
    const auth = getAuth();
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // Setear en localStorage token JWT
        localStorage.setItem('auth', (await user?.getIdTokenResult())?.token)
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContextProvider = () => useContext(AuthContext)

export { AuthProvider, AuthContextProvider };

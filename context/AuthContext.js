import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { auth } from "../utils/firebase";


const initialContext = {
  user: null,
  setUser: (user) => {},
};

const AuthContext = createContext(initialContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(initialContext.user);


  useEffect(() => {
    
    
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        // Setear en localStorage token JWT
        localStorage.setItem('tokenAdminBodas', (await user?.getIdTokenResult())?.token)
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

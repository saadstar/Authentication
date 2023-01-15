import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import {auth} from "../firebase"

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //  to create you email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // to login (signin)
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // to check is you email and password have exist on firebase
  // itis mean to display user data to use it in our components as a user data like user.email user.profileavatar etc
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  // to logout
  const logout = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ createUser, user, logout,login }}>
      {children}
    </UserContext.Provider>
  );
};
export const UserAuth = () => {
    return useContext(UserContext);
}
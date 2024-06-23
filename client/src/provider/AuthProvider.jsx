import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/Firebase.init";
import axios from 'axios'

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    setLoading(true);
    const {data} = await axios('https://alt-choice-server.vercel.app/logout', {withCredentials: true})
    console.log(data);
    setLoading(false);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      console.log(currenUser, "currentUser");
      setUser(currenUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    setUser,
    googleLogin,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

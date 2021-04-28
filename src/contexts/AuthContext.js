import React, { useContext, useState, useEffect } from 'react';
import { auth, db } from '../firebase';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, name, password) {
    const cred = await auth.createUserWithEmailAndPassword(email, password);
    return await db
      .collection('users')
      .doc(cred.user.uid)
      .set({
        name,
        tasks: {
          toDo: [],
          doing: [],
          done: [],
        },
      });
  }

  async function getName() {
    const doc = await db.collection('users').doc(currentUser.uid).get();

    return await doc.data().name;
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateName(name) {
    return db.collection('users').doc(currentUser.uid).update({ name: name });
  }

  function clean() {
    return auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    clean,
    getName,
    updateName,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}

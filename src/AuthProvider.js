
import React, { useContext, useState, useEffect } from "react"
import { auth,db } from "./Firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password, username) {
    return auth.createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      db.collection('users').doc(user.user.uid).set({
        username:username,
        followers:[],
        following:[],
        posts:[]
      }); 
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    });
  }

  

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  

  const value = {
    currentUser,
    login,
    signup,
    logout,
  
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
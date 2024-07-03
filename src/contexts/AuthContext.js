import React, { useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         console.log("User signed up:", userCredential);
//         return userCredential;
//       })
//       .catch((error) => {
//         console.error("Signup error:", error);
//         throw error;
//       });
//   }
function signup(email, password) {
  // Use createUserWithEmailAndPassword with the auth instance
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User signed up:", userCredential);
      return userCredential;
    })
    .catch((error) => {
      console.error("Signup error:", error);
      throw error;
    });
}


function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("User logged in:", userCredential);
      return userCredential;
    })
    .catch((error) => {
      console.error("Login error:", error);
      throw error;
    });
}

function logout() {
  return signOut(auth)
    .then(() => {
      console.log("User logged out");
    })
    .catch((error) => {
      console.error("Logout error:", error);
      throw error;
    });
}

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
//   }

//   function updateEmail(email) {
//     return currentUser.updateEmail(email);
//   }

//   function updatePassword(password) {
//     return currentUser.updatePassword(password);
//   }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    //   setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout
    // resetPassword,
    // updateEmail,
    // updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

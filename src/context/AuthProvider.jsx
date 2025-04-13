import AuthContext from './AuthContext';
import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, username) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: username,
    });
    return userCredential;
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const updateUsername = async (newDisplayName) => {
    if (currentUser) {
      await updateProfile(currentUser, { displayName: newDisplayName });
      setCurrentUser({ ...currentUser, displayName: newDisplayName });
    }
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const changePassword = async (currentPassword, newPassword) => {
    if (!currentUser) throw new Error('User not authenticated.');

    // Reauthenticate
    const credential = EmailAuthProvider.credential(
      currentUser.email,
      currentPassword
    );

    await reauthenticateWithCredential(currentUser, credential);

    // Update password
    await updatePassword(currentUser, newPassword);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        forgotPassword,
        changePassword,
        updateUsername,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

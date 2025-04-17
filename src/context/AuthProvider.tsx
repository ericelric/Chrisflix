import { useState, useEffect, ReactNode } from "react";
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
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "../firebase";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email: string, password: string, username: string): Promise<UserCredential> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: username });
    return userCredential;
  };

  const login = (email: string, password: string): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = (): Promise<void> => {
    return signOut(auth);
  };

  const updateUsername = async (newDisplayName: string): Promise<void> => {
    if (currentUser) {
      await updateProfile(currentUser, { displayName: newDisplayName });
      setCurrentUser({ ...currentUser, displayName: newDisplayName });
    }
  };

  const forgotPassword = (email: string): Promise<void> => {
    return sendPasswordResetEmail(auth, email);
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    if (!currentUser || !currentUser.email) {
      throw new Error("User not authenticated.");
    }

    const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
    await reauthenticateWithCredential(currentUser, credential);
    await updatePassword(currentUser, newPassword);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
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

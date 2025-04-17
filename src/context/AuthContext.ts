import { createContext } from 'react';
import { User, UserCredential } from 'firebase/auth';

interface AuthContextType {
  currentUser: User | null;
  signup: (
    email: string,
    password: string,
    username: string
  ) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<UserCredential>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => Promise<void>;
  updateUsername: (newDisplayName: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
export type { AuthContextType };

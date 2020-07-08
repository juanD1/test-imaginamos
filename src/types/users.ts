import { User } from 'firebase/app';

export type FirebaseUser = User | null;

export type CurrentUser = {
  displayName: string;
  photoURL: string;
  email: string;
};

import { getAuth, signOut, User } from "@firebase/auth";
import { firebaseClient } from "../firebase";
firebaseClient;
const auth = getAuth();

export const autenticacion = {
  SignOut: async () => {
    await signOut(auth);
    return null;
  },
};
